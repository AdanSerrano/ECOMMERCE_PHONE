import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col ">
      {children}
    </MaxWidthWrapper>
  );
}
