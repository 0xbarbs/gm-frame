/** @jsxImportSource frog/jsx */
import { Button } from "frog";
import { kv } from "@vercel/kv";

import { FrameContainer } from "@/components/shared/FrameContainer";
import { Box } from "@/components/shared/Box";
import { RecentGreetings } from "@/components/leaderboard/RecentGreetings";
import { Stats } from "@/components/leaderboard/Stats";
import { NO_GREETING } from "@/constants";
import { getInteractor } from "@/utils/neynar";
import { ErrorFrameHandler } from "@/frames/ErrorFrameHandler";
import { getDateKey, getCoolDownPeriod, getUnixTimestamp, isThrottled } from "@/utils/date";
import { Greeting } from "@/types/kv";
import { Error } from "@/components/shared/Error";

export const LeaderboardFrameHandler = async (c: any) => {
  const user = getInteractor(c);
  if (!user) {
    return ErrorFrameHandler(c);
  }

  let coolDownPeriod = 0;
  const greeting = c.buttonValue;
  const date = getDateKey();

  if (greeting != NO_GREETING) {
    const retrieved = await kv.get<Greeting>(`greetings:${user.fid}`);
    if (retrieved && isThrottled(retrieved.updated)) {
      coolDownPeriod = getCoolDownPeriod(retrieved.updated);
    } else {
      await Promise.all([
        kv.incr(`counters:${user.fid}`),
        kv.incr(`counters:all`),
        kv.incr(`counters:${date}`),
        kv.lpush('greetings:all', user.fid),
        kv.set(`greetings:${user.fid}`, {
          greeting,
          fid: user.fid,
          name: user.username,
          avatar: user.pfpUrl,
          updated: getUnixTimestamp()
        }),
      ]);
    }
  }

  const fids = await kv.lrange<Greeting>('greetings:all', 0, 4);
  const [
    greetings,
    counterTotal,
    counterToday
  ] = await Promise.all<any>([
    Promise.all(fids.map(fid => kv.get(`greetings:${fid}`))),
    kv.get('counters:all'),
    kv.get(`counters:${date}`)
  ]);

  return c.res({
    image: (
      <FrameContainer>
        <Box p={24} direction={'vertical'} fill>
          <RecentGreetings greetings={greetings} />
          <Stats
            counterTotal={counterTotal}
            counterToday={counterToday}
          />

          {coolDownPeriod > 0 && (
            <Error message={`You must wait ${coolDownPeriod} seconds before you can gm again`} />
          )}
        </Box>
      </FrameContainer>
    ),
    intents: [
      <Button value={NO_GREETING}>🔄 Refresh</Button>,
    ],
  })
}