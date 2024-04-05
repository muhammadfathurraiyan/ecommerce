import Menu from "@/components/global/Menu";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-900 flex flex-col gap-3">
      <Menu
        title={`Hasil Pencarian Untuk ${
          params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
        }`}
        Icon={MagnifyingGlass}
      />
    </main>
  );
}
