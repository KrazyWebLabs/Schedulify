interface FormProps {
  title: string;
  children: React.ReactNode;
}

export default function Form({ title, children }: FormProps) {
  return (
    <form
      className="max-w-full mx-auto p-4 grid grid-cols-2 md:grid-cols-1 gap-2 backdrop-blur-sm"
      method="post"
    >
      <h2 className="text-2xl dark:text-white font-bold mb-2">{title}</h2>
      {children}
    </form>
  );
}