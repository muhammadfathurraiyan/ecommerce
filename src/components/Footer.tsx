import { Calendar } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="flex flex-col gap-2 shadow-lg bg-orange-600 text-neutral-100 p-6 max-lg:p-4 max-w-5xl mb-2 mx-auto max-lg:mx-2 rounded-lg">
      <div className="flex items-center gap-1">
        <Calendar size={20} />
        <p className="text-sm">{date.toDateString()}</p>
      </div>
      <h1 className="font-bold text-4xl">ECommerce</h1>
      <p className="text-xs">&copy; Ecommerce 2024, all right reserved.</p>
    </footer>
  );
}
