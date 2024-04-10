import Category from "@/components/home/Category";
import Menu from "@/components/global/Menu";
import {
  BowlFood,
  Coffee,
  Cookie,
  Pepper,
} from "@phosphor-icons/react/dist/ssr";
import prisma from "@/lib/prisma";

export default async function Home() {
  const dataMakanan = await prisma.product.findMany({
    where: { category: "makanan", published: true },
  });

  const dataMinuman = await prisma.product.findMany({
    where: { category: "minuman", published: true },
  });

  const dataKue = await prisma.product.findMany({
    where: { category: "kue", published: true },
  });

  const dataPenajoh = await prisma.product.findMany({
    where: { category: "penajoh", published: true },
  });

  return (
    <main className="min-h-screen max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-800 flex flex-col gap-3">
      <Category />
      <Menu data={dataMakanan} title="Makanan Khas Aceh" Icon={BowlFood} />
      <Menu data={dataMinuman} title="Minuman Khas Aceh" Icon={Coffee} />
      <Menu data={dataKue} title="Kue Khas Aceh" Icon={Cookie} />
      <Menu data={dataPenajoh} title="Penajoh Aceh" Icon={Pepper} />
    </main>
  );
}
