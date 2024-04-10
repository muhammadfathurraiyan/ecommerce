import DonutChart from "@/components/admin/insight/DonutChart";
import Banner from "@/components/global/Banner";
import { ChartDonut, Cube, ChartLine } from "@phosphor-icons/react/dist/ssr";
import prisma from "@/lib/prisma";

export default async function page() {
  const dataMakanan = await prisma.product.findMany({
    where: { category: "makanan" },
    select: { category: true },
  });

  const dataMinuman = await prisma.product.findMany({
    where: { category: "minuman" },
    select: { category: true },
  });

  const dataKue = await prisma.product.findMany({
    where: { category: "kue" },
    select: { category: true },
  });

  const dataPenajoh = await prisma.product.findMany({
    where: { category: "penajoh" },
    select: { category: true },
  });

  const totalProduct =
    dataKue.length +
    dataMakanan.length +
    dataPenajoh.length +
    dataMinuman.length;
  return (
    <main className="max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-800 flex flex-col gap-3">
      <Banner title="Insight" Icon={ChartDonut} />
      <div className="bg-neutral-100 p-6 rounded-lg shadow-lg flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <ChartLine weight="bold" size={20} className="text-orange-600" />
          <p className="font-bold text-sm">Insight</p>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-6xl font-black flex items-start">
            {totalProduct} <Cube size={22} weight="fill" />
          </h2>
          <p className="font-bold text-sm">
            Total keseluruhan product yang di jual.
          </p>
        </div>
      </div>
      <div className="bg-neutral-100 p-6 rounded-lg shadow-lg flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <ChartDonut weight="bold" size={20} className="text-orange-600" />
          <p className="font-bold text-sm">Kategori Product</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="lg:w-1/2">
            <DonutChart
              parameter={{
                kue: dataKue.length,
                makanan: dataMakanan.length,
                penajoh: dataPenajoh.length,
                minuman: dataMinuman.length,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
