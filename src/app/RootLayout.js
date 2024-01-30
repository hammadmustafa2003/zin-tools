'use client';

import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout(props) {
  const { children } = props;
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}