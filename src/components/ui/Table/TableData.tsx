interface Props {
  children: React.ReactNode;
}

export default function TableData({ children } : Props) {
  return (
    <td className="px-6 py-4 whitespace-nowrap dark:text-white">
      {children}
    </td>
  )
}