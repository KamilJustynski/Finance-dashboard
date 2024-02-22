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

export default function NavBar() {
  const links = [
    { name: "Dashboard", href: "/dashboard", icon: ChartBarIcon },
    {
      name: "Transaction",
      href: "/dashboard/transaction",
      icon: CreditCardIcon,
    },
    { name: "Wallet", href: "/dashboard/wallet", icon: WalletIcon },
    { name: "Analysis", href: "/dashboard/analysis", icon: ArrowTrendingUpIcon },
    { name: "Settings", href: "/dashboard/settings", icon: Cog6ToothIcon },

  ];

  return (
    <div className="flex flex-col h-screen p-10 min-w-2/6 bg-black/30">
      <Image src="/logo.png" width={200} height={200} alt="Logo" />
      <div className="flex flex-col mt-6 gap-8 max-h-full tracking-wider text-lg">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <div key={link.name} className="flex text-white items-center justify-center">
              <Link
                key={link.name}
                href={link.href}
                className="flex gap-2 hover:scale-110 duration-200"
              >
                <LinkIcon className="h-6 w-6" />
                <p className="font-bold">{link.name}</p>
              </Link>
            </div>
          )
        })}
      </div>
      <div className="flex pt-40 items-center justify-center">
        <div className="flex hover:scale-110 duration-200 items-center justify-center gap-2 text-white text-center text-lg">
          <ArrowLeftEndOnRectangleIcon className="h-6 w-6" />
          <Link href="/" className="hover:scale-110 duration-200 font-bold">
            Log out
          </Link>
        </div>
      </div>
    </div>

  );
}
