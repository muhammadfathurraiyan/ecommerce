"use client";
import { Calendar, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const date = new Date();
  const [search, setSearch] = useState<string>();
  const pathname = usePathname();
  return (
    <header className="flex flex-col gap-2 shadow-lg bg-orange-600 text-neutral-100 p-6 max-lg:p-4 max-w-5xl mt-3 mx-auto max-lg:mx-3 rounded-lg">
      <div className="flex items-center gap-1">
        <Calendar size={20} />
        <p className="text-sm">{date.toDateString()}</p>
      </div>
      <div className="flex items-end flex-col gap-2">
        <div
          className={`flex max-lg:flex-col ${
            !pathname.startsWith("/admin")
              ? "items-start gap-4"
              : "lg:items-end gap-2"
          } justify-between w-full`}
        >
          <Link href="/" className="font-bold text-4xl">
            ECommerce
          </Link>
          {!pathname.startsWith("/admin") ? (
            <div className="relative flex-col w-3/5 max-lg:w-full gap-2 flex items-center justify-center">
              <input
                type="text"
                placeholder="Pencarian"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 rounded-lg text-neutral-900 outline-none"
              />
              <Link
                href={search ? `/search/${search}` : "/"}
                className="px-6 py-1 top-1 rounded bg-orange-600 absolute right-1 flex items-center gap-2"
              >
                <MagnifyingGlass size={24} weight="bold" />
              </Link>
              <div className="flex items-center justify-between w-full text-sm">
                <Link href="/minuman" className="max-lg:text-xs text-center">
                  Minuman Khas Aceh
                </Link>
                <Link href="/makanan" className="max-lg:text-xs text-center">
                  Makanan Khas Aceh
                </Link>
                <Link href="/kue" className="max-lg:text-xs text-center">
                  Kue Khas Aceh
                </Link>
                <Link href="/penajoh" className="max-lg:text-xs text-center">
                  Penajoh Aceh
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center md:justify-end gap-6 w-3/5 max-lg:w-full text-sm">
              <Link href="/admin" className="max-lg:text-xs text-center">
                Dashboard
              </Link>
              <Link
                href="/admin/product"
                className="max-lg:text-xs text-center"
              >
                Product
              </Link>
              <Link
                href="/admin/analytics"
                className="max-lg:text-xs text-center"
              >
                Insight
              </Link>
              <button className="max-lg:text-xs text-center">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
