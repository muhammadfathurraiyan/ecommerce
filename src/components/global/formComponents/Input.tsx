export default function Input({
  name,
  types,
  value,
}: {
  name: string;
  types: string;
  value?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium capitalize">
        {name} :
      </label>
      <input
        required
        type={types}
        name={name}
        placeholder={name}
        id={name}
        defaultValue={value}
        className="border w-full px-2 py-2 rounded text-neutral-900 outline-none"
      />
    </div>
  );
}
