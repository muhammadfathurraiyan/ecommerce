import Tabel from "@/components/admin/product/Tabel";
import Banner from "@/components/global/Banner";
import Button from "@/components/global/formComponents/Button";
import { Table, PlusSquare } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function page() {
  const data = await prisma.product.findMany();
  return (
    <main className="max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-800 flex flex-col gap-3">
      <Banner title="Product" Icon={Table} />
      <div className="grid lg:grid-cols-6 gap-3">
        <div className="lg:col-span-5 bg-neutral-100 p-6 rounded-lg shadow-lg flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <Table weight="fill" size={20} className="text-orange-600" />
            <p className="font-bold text-sm">Tabel Product</p>
          </div>
          <Tabel data={data} />
        </div>
        <div className="bg-neutral-100 h-fit max-lg:w-fit max-lg:-order-1 p-6 rounded-lg shadow-lg flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <PlusSquare weight="fill" size={20} className="text-orange-600" />
            <p className="font-bold text-sm">Create</p>
          </div>
          <Link href="/admin/product/create">
            <Button
              types="button"
              title="Tambah"
              Icon={PlusSquare}
              iconSize={22}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
