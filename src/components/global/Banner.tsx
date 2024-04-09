import { Icon } from "@phosphor-icons/react";

export default function Banner({ title, Icon }: { title: string; Icon: Icon }) {
  return (
    <div className="bg-neutral-100 p-6 rounded-lg shadow-lg flex items-center gap-3">
      <div className="p-2 bg-orange-600 w-fit rounded-md text-neutral-100">
        <Icon size={28} />
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
  );
}
