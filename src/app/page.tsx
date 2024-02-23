import Category from "@/components/home/Category";
import Menu from "@/components/global/Menu";
import {
  BowlFood,
  Coffee,
  Cookie,
  Pepper,
} from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-900 flex flex-col gap-3">
      <Category />
      <Menu title="Makanan Khas Aceh" Icon={BowlFood} />
      <Menu title="Minuman Khas Aceh" Icon={Coffee} />
      <Menu title="Kue Khas Aceh" Icon={Cookie} />
      <Menu title="Penajoh Aceh" Icon={Pepper} />
    </main>
  );
}
