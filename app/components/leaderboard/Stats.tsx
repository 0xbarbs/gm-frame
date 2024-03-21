/** @jsxImportSource frog/jsx */
import { Box } from "@/components/shared/Box";
import { Text } from "@/components/shared/Text";

export const Stats = ({
  counterTotal,
  counterToday,
}: {
  counterTotal: number;
  counterToday: number;
}) => {
  return (
    <Box p={'48px 32px 24px'} w={'100%'} h={'30%'} direction={'horizontal'} justify={'space-between'}>
      <Box align={'center'}>
        <Text m={0} size={64} weight={600}>
          {counterToday}
        </Text>
        <Text m={0} size={48} weight={600}>
          Today
        </Text>
      </Box>

      <Box align={'center'}>
        <Text m={0} size={64} weight={600}>
          {counterTotal}
        </Text>
        <Text m={0} size={48} weight={600}>
          All time
        </Text>
      </Box>
    </Box>
  );
};