
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: Props) {
  const pathname = usePathname();
  const isActive =
    pathname === href ||
    (href === "/league" &&
      (pathname.startsWith("/teams") || pathname.startsWith("/league")));

  return (
    <Link href={href} aria-current={isActive ? "page" : undefined}>
      {children}
    </Link>
  );
}
