import { Calendar, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Header() {
  const date = new Date();
  return (
    <header className="flex flex-col gap-2 bg-orange-600 text-neutral-100 p-6 max-lg:p-4 max-w-5xl mt-2 mx-auto max-lg:mx-2 rounded-lg">
      <div className="flex items-center gap-1">
        <Calendar size={20} />
        <p className="text-sm">{date.toDateString()}</p>
      </div>
      <div className="flex items-end flex-col gap-2">
        <div className="flex max-lg:flex-col gap-4 items-start justify-between w-full">
          <h1 className="font-bold text-4xl">ECommerce</h1>
          <div className="relative flex-col w-3/5 max-lg:w-full gap-2 flex items-center justify-center">
            <input
              type="text"
              placeholder="Pencarian"
              className="w-full px-4 py-2 rounded-lg text-neutral-900 outline-none"
            />
            <button className="px-6 py-1 top-1 rounded bg-orange-600 absolute right-1 flex items-center gap-2">
              <MagnifyingGlass size={24} weight="bold" />
            </button>
            <div className="flex items-center justify-between w-full text-sm">
              <Link href="" className="max-lg:text-xs text-center">
                Minuman Khas Aceh
              </Link>
              <Link href="" className="max-lg:text-xs text-center">
                Makanan Khas Aceh
              </Link>
              <Link href="" className="max-lg:text-xs text-center">
                Kueh Khas Aceh
              </Link>
              <Link href="" className="max-lg:text-xs text-center">
                Penajoh Aceh
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
