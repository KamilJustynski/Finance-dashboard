"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeftEndOnRectangleIcon,
  ChartBarIcon,
  CreditCardIcon,
  WalletIcon,
  ArrowTrendingUpIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function NavBar() {
  // const links = [
  //   { name: "dashboard", href: "/dashboard", icon: ChartBarIcon },
  //   {
  //     name: "transaction",
  //     href: "/dashboard/transaction",
  //     icon: CreditCardIcon,
  //   },
  //   { name: "budget", href: "/budget", icon: WalletIcon },
  //   { name: "analysis", href: "/analysis", icon: ArrowTrendingUpIcon },
  //   { name: "settings", href: "/settings", icon: Cog6ToothIcon },
  //   { name: "logout", href: "/logout", icon: ArrowLeftEndOnRectangleIcon },
  // ];

  // const pathname = usePathname();
  return (
    <div className="grid p-10 min-w-2/6 bg-space-cadet">
      <Image src="/logo.png" width={200} height={200} alt="Logo" />
      <div className="grid max-h-full content-between tracking-wider text-lg">
        <div className="flex flex-col gap-16 text-white text-center pb-20">
          <div className="flex gap-2 items-center justify-center hover:scale-110 duration-200">
            <ChartBarIcon className="h-6 w-6" />
            <Link href="/dashboard">Dashboard</Link>
          </div>
          <div className="flex gap-2 items-center justify-center hover:scale-110 duration-200">
            <CreditCardIcon className="h-6 w-6" />
            <Link href="/dashboard/transaction">Transactions</Link>
          </div>
          <div className="flex gap-2 items-center justify-center hover:scale-110 duration-200">
            <WalletIcon className="h-6 w-6" />
            <Link href="/">Budget</Link>
          </div>
          <div className="flex gap-2 items-center justify-center hover:scale-110 duration-200">
            <ArrowTrendingUpIcon className="h-6 w-6" />
            <Link href="/">Analysis</Link>
          </div>
          <div className="flex gap-2 items-center justify-center hover:scale-110 duration-200">
            <Cog6ToothIcon className="h-6 w-6" />
            <Link href="/">Settings</Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 text-white text-center">
          <ArrowLeftEndOnRectangleIcon className="h-6 w-6" />
          <Link href="/" className="hover:scale-110 duration-200">
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
}
