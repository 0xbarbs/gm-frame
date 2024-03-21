/** @jsxImportSource frog/jsx */
import { Button } from "frog";

import { FrameContainer } from "@/components/shared/FrameContainer";
import { Text } from "@/components/shared/Text";
import { Box } from "@/components/shared/Box";

export const ErrorFrameHandler = async (c: any) => {
  return c.res({
    image: (
      <FrameContainer>
        <Box p={'32px 64px'} align={'center'} justify={'center'} fill>
          <Text align={'center'} size={80}>
            Sorry an error occurred, please try again shortly.
          </Text>
        </Box>
      </FrameContainer>
    ),
    intents: [
      <Button.Reset>⬅️ Go back</Button.Reset>,
    ],
  })
}