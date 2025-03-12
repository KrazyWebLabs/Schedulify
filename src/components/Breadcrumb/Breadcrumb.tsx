"use client";
import Link from "next/link";
import CrumbRoute from "./CrumbRoute";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const path = usePathname(); // Obtiene el path actual sin dominio
  const paths = path.split("/").filter((crumb) => crumb);

  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
      <Link href="/" className="text-black dark:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          <title>Home</title>
        </svg>
      </Link>

      {paths.map((path, index) => (
        <span key={index}>
          <span className="mx-3 text-gray-500 dark:text-gray-400">/</span>
          <CrumbRoute paths={paths} index={index} />
        </span>
      ))}
    </div>
  );
}
