/** @jsxImportSource frog/jsx */
import { Button } from "frog";

import { FrameContainer } from "@/components/shared/FrameContainer";
import { Text } from "@/components/shared/Text";
import { Box } from "@/components/shared/Box";

export const HomeFrameHandler = async (c: any) => {
  return c.res({
    action: '/leaderboard',
    image: (
      <FrameContainer>
        <Box align={'center'} justify={'center'} fill>
          <Text size={120}>
            gm
          </Text>
        </Box>
      </FrameContainer>
    ),
    intents: [
      <Button value="gm">gm</Button>,
      <Button value="gm 👋">gm 👋</Button>,
      <Button value="gm 🫡">gm 🫡</Button>,
      <Button value="gm 🥱">gm 🥱</Button>,
    ],
  })
}