import { logIn } from "@/lib/utils";
import { Fingerprint, SignIn } from "@phosphor-icons/react/dist/ssr";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export default function page() {
  const authentication = async (data: FormData) => {
    "use server";
    const admin = await prisma.admin.findUnique({
      where: { email: data.get("email") as string },
    });

    if (!admin) {
      return null;
    }

    const checkPassword = await bcrypt.compare(
      data.get("password") as string,
      admin.password
    );

    if (!checkPassword) {
      return null;
    }

    await logIn(admin);
    redirect("/admin");
  };

  return (
    <main className="min-h-screen max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-900 flex justify-center">
      <div className="flex flex-col gap-3 w-1/2 max-lg:w-full">
        <div className="bg-neutral-100 p-6 rounded-lg shadow-lg flex items-center gap-3">
          <div className="p-2 bg-orange-600 w-fit rounded-md text-neutral-100">
            <Fingerprint size={28} />
          </div>
          <h1 className="text-4xl font-bold">Admin Login</h1>
        </div>
        <form
          action={authentication}
          className=" rounded-lg bg-neutral-100 shadow-lg p-6 flex flex-col gap-3"
        >
          <h2 className="text-xl font-bold">
            Silahkan login untuk ke menu dashboard.
          </h2>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email :{" "}
            </label>
            <input
              type="text"
              name="email"
              className="border w-full px-4 py-2 rounded-lg text-neutral-900 outline-none"
            />
            <label htmlFor="password" className="text-sm font-medium">
              Password :{" "}
            </label>
            <input
              type="password"
              name="password"
              className="border w-full px-4 py-2 rounded-lg text-neutral-900 outline-none"
            />
          </div>
          <button className="mt-4 flex items-center gap-2 p-2 bg-orange-600 hover:bg-orange-700 duration-300 w-fit rounded-md text-neutral-100 text-lg">
            <SignIn size={22} /> Login
          </button>
        </form>
      </div>
    </main>
  );
}
