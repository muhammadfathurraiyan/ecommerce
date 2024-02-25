import Menu from "@/components/global/Menu";
import {
  BowlFood,
  Coffee,
  Cookie,
  Pepper,
} from "@phosphor-icons/react/dist/ssr";

type TParams = {
  params: {
    category: string;
  };
};

export default function page({ params }: TParams) {
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
    <main className="min-h-screen max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-900 flex flex-col gap-3">
      <Menu
        title={`${
          params.category.charAt(0).toUpperCase() + params.category.slice(1)
        } Khas Aceh`}
        Icon={handleIcons(params.category)}
      />
    </main>
  );
}
