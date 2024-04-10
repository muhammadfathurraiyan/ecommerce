import Tabel from "@/components/admin/product/Tabel";
import Banner from "@/components/global/Banner";
import Button from "@/components/global/formComponents/Button";
import { getSession } from "@/lib/utils";
import {
  ChartLine,
  Cube,
  FastForward,
  SquaresFour,
  Table,
  UserCircle,
} from "@phosphor-icons/react/dist/ssr";
import prisma from "@/lib/prisma";

export default async function page() {
  const session = await getSession();
  const products = await prisma.product.findMany();
  return (
    <main className="max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-800 flex flex-col gap-3">
      <Banner Icon={SquaresFour} title="Dashboard" />
      <div className="grid lg:grid-cols-3 gap-3">
        <div className="grid grid-rows-2 gap-3">
          <div className="bg-neutral-100 p-6 rounded-lg shadow-lg flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <UserCircle weight="fill" size={20} className="text-orange-600" />
              <p className="font-bold text-sm">Admin</p>
            </div>
            <h1 className="text-lg">
              Hello <b>{session.admin.name}</b> selamat datang di halaman admin.
            </h1>
          </div>
          <div className="bg-neutral-100 p-6 rounded-lg shadow-lg flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <ChartLine weight="bold" size={20} className="text-orange-600" />
              <p className="font-bold text-sm">Insight</p>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-6xl font-black flex items-start">
                {products.length} <Cube size={22} weight="fill" />
              </h2>
              <p className="font-bold text-sm">
                Total keseluruhan product yang di jual.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 bg-neutral-100 p-6 rounded-lg shadow-lg flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <Table weight="fill" size={20} className="text-orange-600" />
            <p className="font-bold text-sm">Product Terbaru</p>
          </div>
          <Tabel data={products.slice(0, 5)} />
          <div className="flex justify-end mt-2">
            <Button
              types="button"
              title="Selengkapnya"
              Icon={FastForward}
              iconSize={22}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
