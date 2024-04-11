import Button from "@/components/global/formComponents/Button";
import { House } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-5xl text-orange-600">
        404 Error!
      </h1>
      <p className="text-center text-lg">
        Halaman yang anda tuju tidak dapat di temukan
      </p>
      <Link href="/" className="mt-4">
        <Button types="button" title="Kembali" iconSize={22} Icon={House} />
      </Link>
    </main>
  );
}
