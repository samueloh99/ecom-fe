import { siteConfig } from "@/config/site";
import "./globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/next.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body className={"min-h-screen antialiased"}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <div className="flex">{children}</div>
          <Footer />
        </div>
        <TailwindIndicator />
      </body>
    </html>
  );
}
