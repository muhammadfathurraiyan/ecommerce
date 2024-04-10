import Menu from "@/components/global/Menu";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import prisma from "@/lib/prisma";

export default async function page({ params }: { params: { slug: string } }) {
  const products = await prisma.product.findMany();
  const searchProduct = products.filter(
    (product) =>
      product.title.toString().toLowerCase().includes(params.slug) ||
      product.category.toString().toLowerCase().includes(params.slug) ||
      product.description?.toString().toLowerCase().includes(params.slug) ||
      product.price.toString().toLowerCase().includes(params.slug)
  );

  return (
    <main className="min-h-screen max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-800 flex flex-col gap-3">
      <Menu
        title={`Hasil Pencarian Untuk ${
          params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
        }`}
        Icon={MagnifyingGlass}
        data={searchProduct}
      />
    </main>
  );
}
