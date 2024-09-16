import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "تالار عروسی ورسای : انتخابی عالی برای مراسم های فرانسوی و باشکوه",
  description:
    "",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
