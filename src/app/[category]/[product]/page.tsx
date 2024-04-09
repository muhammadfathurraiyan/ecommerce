import Image from "next/image";
import Makanan from "../../../../public/makanan.jpg";
import { BowlFood, ShoppingBagOpen } from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/global/formComponents/Button";

export default function page({ params }: { params: { product: string } }) {
  return (
    <main className="max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-800 gap-3 grid grid-cols-2 max-lg:grid-cols-1">
      <div className="bg-black h-[80vh] rounded-lg shadow-lg">
        <Image
          src={Makanan}
          alt="makanan"
          className="rounded-lg min-h-full max-w-full object-cover"
        />
      </div>
      <div className="rounded-lg bg-neutral-100 shadow-lg flex flex-col p-6 gap-3">
        <div>
          <h1 className="text-3xl font-bold">Lorem ipsum dolor sit amet</h1>
          <h2 className="text-xl font-bold">Rp. 15.000</h2>
        </div>
        <div className="mt-4">
          <p className="text-sm font-bold text-orange-600">Kategori :</p>
          <div className="flex items-center gap-2">
            <div className="p-1 bg-orange-600 text-neutral-100 rounded-md">
              <BowlFood size={20} />
            </div>
            <p className="font-bold">Makanan</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-orange-600">Deskripsi :</p>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sed
            illo accusamus ipsum impedit eius saepe, distinctio repellendus
            facilis dolores odit quae repudiandae recusandae, vitae nesciunt
            commodi ut laudantium aliquid?
          </p>
        </div>
        <Button
          types="button"
          Icon={ShoppingBagOpen}
          iconSize={22}
          title="Pesan"
        />
      </div>
    </main>
  );
}
