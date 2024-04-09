"use client";
import Banner from "@/components/global/Banner";
import Button from "@/components/global/formComponents/Button";
import Input from "@/components/global/formComponents/Input";
import { logIn } from "@/lib/utils";
import { Fingerprint, SignIn } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

export default function page() {
  const [error, setError] = useState("");
  const authentication = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const result = await logIn(data);
    if (result?.error) {
      setError(result.error);
    }
  };

  return (
    <main className="min-h-screen max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-800 flex justify-center">
      <div className="flex flex-col gap-3 w-1/2 max-lg:w-full">
        <Banner Icon={Fingerprint} title="Halaman Login" />
        <form
          onSubmit={authentication}
          className="rounded-lg bg-neutral-100 shadow-lg p-6 flex flex-col gap-4"
        >
          <h2 className="text-xl font-bold">
            Silahkan login untuk ke menu dashboard.
          </h2>
          {error.length > 0 && <p className="text-red-500">{error}</p>}
          <div>
            <Input name="email" types="email" />
            <Input name="password" types="password" />
          </div>
          <Button types="submit" Icon={SignIn} iconSize={22} title="Login" />
        </form>
      </div>
    </main>
  );
}
