import { Tag } from "@phosphor-icons/react/dist/ssr";
import Makanan from "../../../public/makanan.jpg";
import Minuman from "../../../public/minuman.jpg";
import Kue from "../../../public/kue.jpg";
import Penajoh from "../../../public/penajoh.jpg";
import Image from "next/image";
import Link from "next/link";

const data = [
  { title: "Makanan Khas Aceh", image: Makanan, link: "/makanan" },
  { title: "Minuman Khas Aceh", image: Minuman, link: "/minuman" },
  { title: "Kue Khas Aceh", image: Kue, link: "/kue" },
  { title: "Penajoh Aceh", image: Penajoh, link: "/Penajoh" },
];

export default function Category() {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-neutral-100 p-6 rounded-lg shadow-lg flex items-center gap-2">
        <div className="p-2 bg-orange-600 w-fit rounded-md text-neutral-100">
          <Tag size={28} />
        </div>
        <h1 className="text-4xl font-bold">Kategori Menu</h1>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-2">
        {data.map((data, index) => (
          <Link
            key={index}
            href={data.link}
            className="h-[24vh] shadow-lg relative group"
          >
            <div className="flex items-center justify-center rounded-lg bg-neutral-900/70 w-full h-full group-hover:bg-neutral-900/10 duration-300">
              <h2 className="text-center font-medium text-neutral-100 text-lg hover">
                {data.title}
              </h2>
            </div>
            <div className="overflow-hidden rounded-lg -z-10 absolute top-0 left-0 w-full h-full">
              <Image
                src={data.image}
                alt={data.title}
                className="object-cover h-full w-full rounded-lg group-hover:scale-105 duration-300"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
