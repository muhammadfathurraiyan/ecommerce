"use client";
import { deleteProduct } from "@/lib/actions";
import { Eye, PencilLine, Trash } from "@phosphor-icons/react/dist/ssr";
import { Product } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tabel({ data }: { data?: Product[] }) {
  const pathname = usePathname();
  const deleteAction = async (data: FormData) => {
    const id = data.get("productId");
    const text = "Apa anda yakin ingin menghapus produk ini?";
    if (confirm(text)) await deleteProduct(+id!);
  };
  return (
    <div className="relative overflow-x-auto rounded-t">
      <table className="w-full text-sm text-center ">
        <thead className="text-xs uppercase bg-orange-600 text-neutral-100 ">
          <tr>
            <th className="p-3">No</th>
            <th className="p-3">Nama</th>
            <th className="p-3">Kategori</th>
            <th className="p-3">Harga</th>
            {pathname !== "/admin" && (
              <>
                <th className="p-3">Status</th>
                <th className="p-3">Deskripsi</th>
              </>
            )}
            <th className="p-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product, index) => (
            <tr key={product.id} className="border-b border-orange-400">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{product.title}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">{product.price}</td>
              {pathname !== "/admin" && (
                <>
                  <td className="p-3">
                    {product.published ? "Public" : "Private"}
                  </td>
                  <td className="p-3">
                    <p className="text-wrap line-clamp-1">
                      {product.description}
                    </p>
                  </td>
                </>
              )}
              <td className="p-3 grid grid-flow-col">
                <Link
                  href={`/admin/product/${product.slug}`}
                  className="hover:text-emerald-600 transition-all"
                >
                  <PencilLine size={22} />
                </Link>
                <Link
                  href={`/${product.category}/${product.slug}`}
                  className="hover:text-orange-600 transition-all"
                >
                  <Eye size={22} />
                </Link>
                <form action={deleteAction}>
                  <input type="hidden" name="productId" value={product.id} />
                  <button className="hover:text-red-600 transition-all">
                    <Trash size={22} />
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
