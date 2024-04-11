import ImageInput from "@/components/global/formComponents/ImageInput";
import Banner from "@/components/global/Banner";
import Button from "@/components/global/formComponents/Button";
import Input from "@/components/global/formComponents/Input";
import { createProduct } from "@/lib/actions";
import { Cookie, PlusSquare } from "@phosphor-icons/react/dist/ssr";
import TitleSlugInput from "@/components/global/formComponents/TitleSlugInput";
import { getSession } from "@/lib/utils";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function page() {
  const session = await getSession();
  const addProduct = async (data: FormData) => {
    "use server";
    const isPublished =
      (data.get("status") as string) === "public" ? true : false;
    const product = {
      title: data.get("nama") as string,
      slug: data.get("slug") as string,
      price: data.get("harga") as string,
      category: data.get("kategori") as string,
      image: data.get("image") as string,
      noWa: data.get("whatsapp") as string,
      published: isPublished,
      description: data.get("deskripsi") as string,
    };

    createProduct(product, session.admin.id);
    redirect("/admin/product");
  };
  return (
    <main className="max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-800 flex flex-col gap-3">
      <Banner title="Tambah Produk" Icon={Cookie} />
      <form action={addProduct} className="grid lg:grid-cols-6 gap-3">
        <div className="lg:col-span-5 bg-neutral-100 p-6 rounded-lg shadow-lg flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <Cookie weight="fill" size={20} className="text-orange-600" />
            <p className="font-bold text-sm">Tambah Product</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <TitleSlugInput />
              <Input name="harga" types="text" />
              <ImageInput />
              <div>
                <label
                  htmlFor="kategori"
                  className="text-sm font-medium capitalize"
                >
                  Kategori :
                </label>
                <select
                  name="kategori"
                  defaultValue={1}
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
              <Input name="whatsapp" types="text" />
              <div>
                <label
                  htmlFor="status"
                  className="text-sm font-medium capitalize"
                >
                  Status :
                </label>
                <select
                  name="status"
                  defaultValue={1}
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
                  className="border w-full px-2 py-2 rounded text-neutral-900 outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-100 h-fit max-lg:w-fit max-lg:-order-1 p-6 rounded-lg shadow-lg flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <PlusSquare weight="fill" size={20} className="text-orange-600" />
            <p className="font-bold text-sm">Tambah</p>
          </div>
          <Button
            types="submit"
            title="Tambah"
            Icon={PlusSquare}
            iconSize={22}
          />
        </div>
      </form>
    </main>
  );
}
