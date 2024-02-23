import Makanan from "../../../public/makanan.jpg";
import Minuman from "../../../public/minuman.jpg";
import Kue from "../../../public/kue.jpg";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@phosphor-icons/react";
import { ShoppingBagOpen } from "@phosphor-icons/react/dist/ssr";

const data = [
  { title: "Makanan Khas Aceh", image: Makanan, link: "/makanan" },
  { title: "Minuman Khas Aceh", image: Minuman, link: "/minuman" },
  { title: "Kue Khas Aceh", image: Kue, link: "/kue" },
];

export default function Menu({ title, Icon }: { title: string; Icon: Icon }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-neutral-100 p-6 rounded-lg shadow-lg flex items-center gap-3">
        <div className="p-2 bg-orange-600 w-fit rounded-md text-neutral-100">
          <Icon size={28} />
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-3">
        {data.map((data, index) => (
          <div key={index} className="rounded-lg bg-neutral-100 shadow-lg">
            <div className="overflow-hidden rounded-t-lg h-[28vh] w-full">
              <Image
                src={data.image}
                alt={data.title}
                className="object-cover h-full w-full rounded-t-lg"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <p className="text-2xl font-bold">Rp. 15.000</p>
              <h2 className="text-lg font-medium">{data.title}</h2>
              <Link
                href={data.link}
                className="flex items-center gap-2 p-2 bg-orange-600 hover:bg-orange-700 duration-300 w-fit rounded-md text-neutral-100 text-lg"
              >
                <ShoppingBagOpen size={22} /> Pesan
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
