interface Props {
  children: React.ReactNode;
  isID?: boolean
}

export default function TableData({ isID, children } : Props) {
  const isIDColor = isID ? "font-extrabold": ""
  return (
    <td className={`px-6 py-4 whitespace-nowrap dark:text-white ${isIDColor}`}>
      {children}
    </td>
  )
}