import Menu from "@/components/global/Menu";
import {
  BowlFood,
  Coffee,
  Cookie,
  Pepper,
} from "@phosphor-icons/react/dist/ssr";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import prisma from "@/lib/prisma";

export async function generateStaticParams() {
  return [
    { category: "makanan" },
    { category: "minuman" },
    { category: "kue" },
    { category: "penajoh" },
  ];
}

const categories = ["makanan", "kue", "minuman", "penajoh"];

export default async function page({
  params,
}: {
  params: {
    category: string;
  };
}) {
  noStore();

  const { category } = params;
  if (!categories.includes(category)) {
    redirect("/");
  }

  const data = await prisma.product.findMany({
    where: { category: category },
    orderBy: { createdAt: "desc" },
  });

  const handleIcons = (icon: string) => {
    if (icon.includes("makanan")) {
      return BowlFood;
    } else if (icon.includes("minuman")) {
      return Coffee;
    } else if (icon.includes("kue")) {
      return Cookie;
    } else {
      return Pepper;
    }
  };
  return (
    <main className="min-h-screen max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-800 flex flex-col gap-3">
      <Menu
        data={data}
        title={`${
          category.charAt(0).toUpperCase() + category.slice(1)
        } Khas Aceh`}
        Icon={handleIcons(category)}
      />
    </main>
  );
}
