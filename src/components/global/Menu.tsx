import Makanan from "../../../public/makanan.jpg";
import Minuman from "../../../public/minuman.jpg";
import Kue from "../../../public/kue.jpg";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@phosphor-icons/react";
import { ShoppingBagOpen } from "@phosphor-icons/react/dist/ssr";
import Button from "./formComponents/Button";
import Banner from "./Banner";
import { Product } from "@prisma/client";

export default function Menu({
  title,
  Icon,
  data,
}: {
  title: string;
  Icon: Icon;
  data?: Product[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <Banner title={title} Icon={Icon} />
      <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-3">
        {data?.map((product) => (
          <div key={product.id} className="rounded-lg bg-neutral-100 shadow-lg">
            <div className="overflow-hidden rounded-t-lg h-[28vh] w-full">
              <Image
                src={product.image}
                alt={product.title}
                height={1}
                width={1}
                className="object-cover h-full w-full rounded-t-lg"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <p className="text-2xl font-bold">Rp. {product.price}</p>
              <div>
                <h2 className="text-lg font-medium">{product.title}</h2>
                <p className="line-clamp-3">{product.description}</p>
              </div>
              <Link href={`/${product.category}/${product.slug}`}>
                <Button
                  title="Pesan"
                  types="button"
                  Icon={ShoppingBagOpen}
                  iconSize={22}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
