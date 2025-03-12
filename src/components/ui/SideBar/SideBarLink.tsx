interface Props {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

export default function SideBarLink({ href, children, icon }: Props) {
  return (
      <a className="flex items-center px-4 py-2 mt-2 border border-transparent text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100/70 dark:hover:bg-transparent dark:hover:border-white dark:hover:text-gray-200 hover:text-gray-700 hover:border-gray-700" href={href}>
      {icon}

      <span className="mx-4 font-medium">
        {children}
      </span>
    </a>
  )
}