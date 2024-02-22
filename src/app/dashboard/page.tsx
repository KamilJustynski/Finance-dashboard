import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col m-2">
      <div className="flex items-center max-h-20 m-2 p-4 justify-between text-sky-700">
        <h1 className="text-3xl tracking-wider font-bold">Welcome Kamil</h1>
        <UserCircleIcon className="w-12 h-12" />
      </div>
      <div className="flex m-2 gap-4 h-2/4 text-white">
        <div className="flex-1 rounded-3xl bg-black/30 p-4">
          <h2 className="text-xl tracking-wider">Your card</h2>
        </div>
        <div className="flex-1 rounded-3xl bg-black/30 p-4">
          <h2 className="text-xl tracking-wider">Your money</h2>
        </div>
      </div>
      <div className="m-2 p-4 rounded-3xl bg-black/30 h-2/4 text-white">
        <h2 className="text-xl tracking-wider mb-4">
          Recent transactions
        </h2>
        <div className="grid gap-6">
          <div className="flex justify-between">
            <p>Today</p>
            <p>-100</p>
            <p>18.02.2024</p>
          </div>
          <div className="flex justify-between">
            <p>Today</p>
            <p>-50</p>
            <p>18.02.2024</p>
          </div>
          <div className="flex justify-between">
            <p>Today</p>
            <p>-250</p>
            <p>18.02.2024</p>
          </div>
          <div className="flex justify-between">
            <p>Today</p>
            <p>-80</p>
            <p>18.02.2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
