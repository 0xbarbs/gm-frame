/** @jsxImportSource frog/jsx */
import { Box } from "@/components/shared/Box";
import { GreetingRow } from "@/components/leaderboard/GreetingRow";
import { Greeting } from "@/types/kv";

export const RecentGreetings = ({
  greetings,
}: {
  greetings: Greeting[]
}) => {
  return (
    <Box fill h={'80%'}>
      {greetings.map(greeting => (
        <GreetingRow greeting={greeting} />
      ))}
    </Box>
  )
};