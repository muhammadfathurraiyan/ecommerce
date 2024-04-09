import { Icon, IconProps } from "@phosphor-icons/react";

export default function Button({
  title,
  types,
  Icon,
  iconSize,
  color,
  callback,
}: {
  title?: string;
  types: "submit" | "reset" | "button" | undefined;
  color?: string;
  Icon?: Icon;
  iconSize?: string | number | undefined;
  callback?: () => void;
}) {
  const colorOptions: { [key: string]: string } = {
    default: "bg-orange-600 hover:bg-orange-700 ",
    red: "bg-red-600 hover:bg-red-700 ",
  };
  return (
    <button
      onClick={callback}
      type={types}
      className={`${
        color ? colorOptions[color] : "bg-orange-600 hover:bg-orange-700"
      } flex items-center gap-2 p-2 duration-300 w-fit rounded-md text-neutral-100`}
    >
      {Icon && <Icon size={iconSize} />}
      {title}
    </button>
  );
}
