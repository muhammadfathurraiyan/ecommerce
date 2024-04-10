"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ImageInput({ value }: { value?: string }) {
  const [base64, setBase64] = useState(value ?? "");

  const handleImageInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setBase64(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      {base64 !== "" && (
        <Image
          className="w-full"
          width={0}
          height={0}
          src={base64}
          alt="profile pic"
        />
      )}
      <input type="hidden" value={base64} name="image" />
      <label htmlFor="gambar" className="text-sm font-medium capitalize">
        Gambar :
      </label>
      <input
        name="gambar"
        type="file"
        accept="image/*"
        onChange={(e) => handleImageInputChange(e)}
        className="border w-full px-2 py-2 rounded text-neutral-900 outline-none"
      />
    </div>
  );
}
