"use client";

import { ChangeEvent, useState } from "react";

function nanoid(length: number = 21) {
  const alphabet =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let nanoid = "";
  for (let i = 0; i < length; i++) {
    nanoid += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  return nanoid;
}

export default function TitleSlugInput({
  parameter,
}: {
  parameter?: { valueTitle?: string; valueSlug?: string };
}) {
  const [slug, setSlug] = useState(parameter?.valueSlug ?? "");

  const handleSlug = async (e: ChangeEvent<HTMLInputElement>) => {
    const data =
      e.target.value
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "") +
      "-" +
      nanoid(7);

    setSlug(data);
  };
  return (
    <>
      <div>
        <label htmlFor="nama" className="text-sm font-medium capitalize">
          Nama :
        </label>
        <input
          required
          type="text"
          name="nama"
          placeholder="Nama"
          defaultValue={parameter?.valueTitle}
          onChange={(e) => handleSlug(e)}
          className="border w-full px-2 py-2 rounded text-neutral-900 outline-none"
        />
      </div>
      <div>
        <label htmlFor="slug" className="text-sm font-medium capitalize">
          Slug :
        </label>
        <input
          readOnly
          type="text"
          name="slug"
          placeholder="some-slug"
          value={slug}
          className="border w-full px-2 py-2 rounded text-neutral-900 outline-none"
        />
      </div>
    </>
  );
}
