import NavBar from "@/components/navbar";
import { Suspense } from "react";
import Loading from "./loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <NavBar />
      <div className="grid w-full">{children}</div>
    </div>
  );
}
