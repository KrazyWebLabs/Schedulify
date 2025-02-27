"use client";
import { usePathname } from "next/navigation";

export default function BackBtn() {
  const path = usePathname(); // Obtiene el path actual sin dominio
  const previousPath = path.substring(0, path.lastIndexOf("/")) || "/";
  return (
    <a
      href={previousPath}
      className="flex justify-center px-4 min-w-full py-2 text-white duration-150 font-bold bg-boston-blue-400 rounded-lg hover:bg-boston-blue-500 active:bg-boston-blue-700 md:text-sm capitalize"
    >
      back
    </a>
  );
}
