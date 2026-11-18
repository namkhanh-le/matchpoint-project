
import type { Metadata } from "next";
import NavLink from "@/components/nav-link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MatchPoint",
    template: "%s | MatchPoint",
  },
  description: "Follow league teams, fixtures and results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav aria-label="Main navigation">
            <NavLink href="/">MatchPoint</NavLink>
            <NavLink href="/league">League</NavLink>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
