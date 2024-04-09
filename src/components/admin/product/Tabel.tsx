export default function Tabel() {
  return (
    <div className="relative overflow-x-auto rounded-t">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs uppercase bg-orange-600 text-neutral-100 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-orange-400">
            <td className="px-6 py-3">Apple MacBook Pro 17"</td>
            <td className="px-6 py-3">Silver</td>
            <td className="px-6 py-3">Laptop</td>
            <td className="px-6 py-3">$2999</td>
          </tr>
          <tr className="border-b border-orange-400">
            <td scope="row" className="px-6 py-3">
              Microsoft Surface Pro
            </td>
            <td className="px-6 py-3">White</td>
            <td className="px-6 py-3">Laptop PC</td>
            <td className="px-6 py-3">$1999</td>
          </tr>
          <tr className="border-b border-orange-400">
            <td scope="row" className="px-6 py-3">
              Magic Mouse 2
            </td>
            <td className="px-6 py-3">Black</td>
            <td className="px-6 py-3">Accessories</td>
            <td className="px-6 py-3">$99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
