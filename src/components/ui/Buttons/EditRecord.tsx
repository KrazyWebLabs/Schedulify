interface Props {
  href?: string;
}
export default function EditRecord({ href }: Props) {
  return (
    <a
      href={href ? href : "javascript:void()"}
      className="py-2 px-3 inline-block text-white duration-150 font-medium bg-boston-blue-600 rounded-lg hover:bg-boston-blue-500 active:bg-boston-blue-700 md:text-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
        <path d="m15 5 4 4"></path>
        <title>EditIcon</title>
      </svg>
    </a>
  );
}
