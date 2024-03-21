/** @jsxImportSource frog/jsx */
import { kv } from "@vercel/kv";

import { Text } from "@/components/shared/Text";
import { Box } from "@/components/shared/Box";
import { Avatar } from "@/components/leaderboard/Avatar";
import { Greeting } from "@/types/kv";
import { MAX_NAME_LENGTH } from "@/constants";

export const GreetingRow = async ({
  greeting,
}: {
  greeting: Greeting;
}) => {
  const count = await kv.get(`counters:${greeting.fid}`) as number;

  return (
    <Box
      fill
      mb={12}
      align={'center'}
      justify={'space-between'}
      direction={'horizontal'}
      style={{
        maxHeight: '76px',
        borderBottom: '1px solid black'
      }}
    >
      <Box direction={'horizontal'} align={'center'} fill>
        <Avatar url={greeting.avatar} />

        <Text m={0} ml={16} size={48}>
          {greeting.name.length > MAX_NAME_LENGTH
            ? `${greeting.name.substring(0, MAX_NAME_LENGTH)}...`
            : greeting.name
          }
        </Text>
        <Text m={0} ml={16} size={32}>
          ({count} gms)
        </Text>
      </Box>

      <Text m={0} mb={8} weight={600} ml={16} size={52}>
        {greeting.greeting}
      </Text>
    </Box>
  )
};