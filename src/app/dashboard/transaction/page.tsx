import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col m-2">
      <div className="flex items-center max-h-20 m-2 p-4 justify-between text-ucla-blue">
        <h1 className="text-3xl tracking-wider font-bold">Your payments</h1>
        <UserCircleIcon className="w-12 h-12" />
      </div>
      <div className="m-2 border rounded-3xl bg-ucla-blue p-4 h-full">
        <h2 className="text-xl font-bold tracking-wider">All your payments</h2>
      </div>
    </div>
  );
}
