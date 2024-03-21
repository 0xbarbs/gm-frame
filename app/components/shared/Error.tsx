/** @jsxImportSource frog/jsx */
import { Text } from "@/components/shared/Text";

export const Error = ({
  message
}: {
  message: string;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        padding: '8px 12px',
        bottom: 25,
        left: '50%',
        transform: 'translateX(-42.5%)',
        background: 'rgba(255,0,0,0.25)',
        border: '2px solid red',
        maxWidth: '400px',
      }}
    >
      <Text m={0} size={24} align={'center'}>
        {message}
      </Text>
    </div>
  )
}