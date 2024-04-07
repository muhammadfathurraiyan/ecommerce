import { getSession } from "@/lib/utils";

export default async function page() {
  const session = await getSession();
  const data = JSON.stringify(session);
  return (
    <main className="max-w-5xl mx-auto my-3 max-lg:mx-2 text-neutral-900 gap-3 grid grid-cols-2 max-lg:grid-cols-1">
      <p className="whitespace-pre-wrap">{data}</p>
    </main>
  );
}
