export default function SubmitBtn({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="inline-block px-4 min-w-full py-2 mx-2 text-white duration-150 font-medium bg-boston-blue-600 rounded-lg hover:bg-boston-blue-500 active:bg-boston-blue-700 md:text-sm capitalize"
    >
      {children}
    </button>
  );
}
