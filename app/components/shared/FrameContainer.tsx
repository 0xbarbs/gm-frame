/** @jsxImportSource frog/jsx */
import React from "react";

export const FrameContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        position: 'relative',
        backgroundImage: `url(${process.env.NEXT_PUBLIC_URL!}/sunrise.jpg)`,
      }}
    >
      {children}
    </div>
  )
};