import Image from "next/image";

export default function App({ name, icon, short }) {
  return (
    <div className="flex mx-4 items-center p-2">
      <Image
        src={icon}
        alt={name}
        width={50}
        height={50}
        className="rounded-lg w-12 h-12 mr-4"
      />
      <div className="flex m-2 items-center w-full">
        <div className="flex flex-col mr-auto">
          <p className="text-base font-bold">{name}</p>
          <p className="text-sm font-medium text-slate-900/70 dark:text-slate-400/70">
            {short}
          </p>
        </div>
        <div className="ml-auto flex-none items-center">
          <button className="bg-blue-400/10 dark:bg-blue-400/10 rounded-full px-3 text-blue-500 hover:text-blue-800 hover:bg-blue-400 dark:hover:bg-blue-600/70 dark:hover:text-blue-300">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
