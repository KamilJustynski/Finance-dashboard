import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center m-6">
      <div className="w-full p-8 tracking-wider text-2xl border rounded-3xl bg-space-cadet text-white">
        <p className="text-center">Welcome to my DASHBOARD!</p>
      </div>
      <div className="flex my-6 h-full gap-x-12">
        <div className="flex-1 p-6 leading-7 tracking-wider border rounded-3xl bg-ucla-blue text-white">
          Welcome to our comprehensive expense tracking dashboard, your personal
          tool for building a healthy relationship with your money. Our advanced
          features will allow you not only to track your finances, but also to
          understand your spending patterns and make informed financial
          decisions. Our dashboard offers continuous analysis of your
          transactions, allowing you to see instantly where and how you are
          spending your money. With intuitive data visualization tools, you can
          easily identify trends in your spending and plan your budgets for the
          future.
        </div>
        <div className="flex-1 p-6 border rounded-3xl bg-ucla-blue text-white">
          <Image
            className="rounded-3xl bg-inherit"
            src="/dashboard.png"
            width={500}
            height={500}
            alt="Picture of the dashboard"
          />
        </div>
      </div>
      <div className="flex justify-center w-full p-8 tracking-wider text-2xl border rounded-3xl bg-space-cadet">
        <Link
          href="/dashboard"
          className="align-center text-white hover:scale-110 ease-in duration-200"
        >
          Dołącz do nas!
        </Link>
      </div>
    </div>
  );
}
