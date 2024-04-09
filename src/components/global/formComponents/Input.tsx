export default function Input({
  name,
  types,
}: {
  name: string;
  types: string;
}) {
  return (
    <>
      <label htmlFor={name} className="text-sm font-medium capitalize">
        {name} :
      </label>
      <input
        type={types}
        name={name}
        placeholder={name}
        id={name}
        className="border w-full px-4 py-2 rounded-lg text-neutral-900 outline-none"
      />
    </>
  );
}
