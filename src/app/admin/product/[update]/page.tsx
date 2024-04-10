import Banner from "@/components/global/Banner";
import Button from "@/components/global/formComponents/Button";
import ImageInput from "@/components/global/formComponents/ImageInput";
import Input from "@/components/global/formComponents/Input";
import TitleSlugInput from "@/components/global/formComponents/TitleSlugInput";
import { PencilLine, Cookie } from "@phosphor-icons/react/dist/ssr";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { updateProduct } from "@/lib/actions";
import { revalidatePath } from "next/cache";

export async function generateStaticParams() {
  const slugs = await prisma.product.findMany({ select: { slug: true } });
  return slugs.map((slug) => ({ updata: slug }));
}

export default async function page({ params }: { params: { update: string } }) {
  const { update } = params;
  const datas = await prisma.product.findFirst({
    where: { slug: update },
  });
  const productUpdate = async (data: FormData) => {
    "use server";
    const isPublished =
      (data.get("status") as string) === "public" ? true : false;
    const dataProduct = {
      title: data.get("nama") as string,
      slug: data.get("slug") as string,
      price: data.get("harga") as string,
      category: data.get("kategori") as string,
      image: data.get("image") as string,
      noWa: data.get("whatsapp") as string,
      published: isPublished,
      description: data.get("deskripsi") as string,
    };

    updateProduct(dataProduct, datas?.id);
    revalidatePath("/admin/product");
    redirect("/admin/product");
  };
  return (
    <main className="max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-800 flex flex-col gap-3">
      <Banner title="Update Produk" Icon={Cookie} />
      <form action={productUpdate} className="grid lg:grid-cols-6 gap-3">
        <div className="lg:col-span-5 bg-neutral-100 p-6 rounded-lg shadow-lg flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <Cookie weight="fill" size={20} className="text-orange-600" />
            <p className="font-bold text-sm">Update Product</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <TitleSlugInput
                parameter={{
                  valueSlug: datas?.slug,
                  valueTitle: datas?.title,
                }}
              />
              <Input name="harga" value={datas?.price} types="text" />
              <ImageInput value={datas?.image} />
              <div>
                <label
                  htmlFor="kategori"
                  className="text-sm font-medium capitalize"
                >
                  Kategori :
                </label>
                <select
                  name="kategori"
                  defaultValue={datas?.category}
                  className="border w-full px-2 py-2 rounded text-neutral-900 outline-none"
                >
                  <option value="1" disabled hidden>
                    Pilih Kategori
                  </option>
                  <option value="makanan">Makanan</option>
                  <option value="minuman">Minuman</option>
                  <option value="kue">Kue</option>
                  <option value="penajoh">Penajoh</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <Input name="whatsapp" types="text" value={datas?.noWa} />
              <div>
                <label
                  htmlFor="status"
                  className="text-sm font-medium capitalize"
                >
                  Status :
                </label>
                <select
                  name="status"
                  defaultValue={datas?.published ? "public" : "private"}
                  className="border w-full px-2 py-2 rounded text-neutral-900 outline-none"
                >
                  <option value="1" disabled hidden>
                    Pilih Status
                  </option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="deskripsi"
                  className="text-sm font-medium capitalize"
                >
                  Deskripsi :
                </label>
                <textarea
                  name="deskripsi"
                  placeholder="deskripsi"
                  rows={4}
                  defaultValue={datas?.description!}
                  className="border w-full px-2 py-2 rounded text-neutral-900 outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-100 h-fit max-lg:w-fit max-lg:-order-1 p-6 rounded-lg shadow-lg flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <PencilLine weight="fill" size={20} className="text-orange-600" />
            <p className="font-bold text-sm">Update</p>
          </div>
          <Button
            types="submit"
            title="Update"
            Icon={PencilLine}
            iconSize={22}
          />
        </div>
      </form>
    </main>
  );
}
