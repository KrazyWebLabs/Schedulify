"use client";
import { usePathname } from "next/navigation";

export default function AddRegisterBtn() {
  const path = usePathname(); // Obtiene el path actual sin dominio
  return (
    <a
      href={`${path}/add`}
      className="inline-block px-4 py-2 text-white duration-150 font-medium bg-boston-blue-600 rounded-lg hover:bg-boston-blue-500 active:bg-boston-blue-700 md:text-sm capitalize"
    >
      Add {path.replace(/\//g, "")}
    </a>
  );
}
