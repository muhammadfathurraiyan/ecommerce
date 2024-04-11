import Image from "next/image";
import Makanan from "../../../../public/makanan.jpg";
import {
  BowlFood,
  Coffee,
  Cookie,
  Pepper,
  ShoppingBagOpen,
} from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/global/formComponents/Button";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

export async function generateStaticParams() {
  const products = await prisma.product.findMany({
    select: { slug: true, category: true },
  });
  return products.map((product) => ({
    category: product.category,
    product: product.slug,
  }));
}

export default async function page({
  params,
}: {
  params: { product: string };
}) {
  noStore();
  const { product } = params;
  const data = await prisma.product.findFirst({
    where: { slug: product },
    orderBy: { createdAt: "desc" },
  });

  if (!data) {
    return notFound();
  }
  const message = `Saya%20ingin%20membeli%20produk%20${data?.title}%0A%0Ahttp://localhost:3000/${data?.category}/${data?.slug}`;
  return (
    <main className="max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-800 gap-3 grid grid-cols-2 max-lg:grid-cols-1">
      <div className="h-[80vh] rounded-lg shadow-lg">
        <Image
          src={data!.image}
          alt="makanan"
          width={1}
          height={1}
          className="rounded-lg h-full w-full object-cover"
        />
      </div>
      <div className="rounded-lg bg-neutral-100 shadow-lg flex flex-col p-6 gap-3">
        <div>
          <h1 className="text-3xl font-bold">{data?.title}</h1>
          <h2 className="text-xl font-bold">Rp. {data?.price}</h2>
        </div>
        <div className="mt-4">
          <p className="text-sm font-bold text-orange-600">Kategori :</p>
          <div className="flex items-center gap-2">
            <div className="p-1 bg-orange-600 text-neutral-100 rounded-md">
              {data?.category === "makanan" && <BowlFood size={20} />}
              {data?.category === "minuman" && <Coffee size={20} />}
              {data?.category === "kue" && <Cookie size={20} />}
              {data?.category === "penajoh" && <Pepper size={20} />}
            </div>
            <p className="font-bold">{data?.category}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-orange-600">Deskripsi :</p>
          <p className="">{data?.description}</p>
        </div>
        <Link
          href={`https://wa.me/${data?.noWa}?text=${message}`}
          target="_blank"
        >
          <Button
            types="button"
            Icon={ShoppingBagOpen}
            iconSize={22}
            title="Pesan"
          />
        </Link>
      </div>
    </main>
  );
}
