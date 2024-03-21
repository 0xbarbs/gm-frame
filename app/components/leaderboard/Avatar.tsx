/** @jsxImportSource frog/jsx */

export const Avatar = ({
  url,
}: {
  url: string | null;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        width: 72,
        height: 72,
        backgroundImage: url ? `url(${url})` : `url("${process.env.NEXT_PUBLIC_URL!}/avatar.jpg")`,
        backgroundSize: '72px 72px',
        backgroundPosition: '0',
        backgroundAttachment: 'local',
      }}
    />
  )
}