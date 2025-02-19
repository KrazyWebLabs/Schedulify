"use client";
import { usePathname } from "next/navigation";

export default function BackBtn() {
  const path = usePathname(); // Obtiene el path actual sin dominio
  const previousPath = path.substring(0, path.lastIndexOf("/")) || "/";
  return (
    <a
      href={previousPath}
      className="inline-block px-4 py-2 mr-4 text-white duration-150 font-medium bg-boston-blue-400 rounded-lg hover:bg-boston-blue-500 active:bg-boston-blue-700 md:text-sm capitalize"
    >
      <p className="text-lg">back</p>
    </a>
  );
}
