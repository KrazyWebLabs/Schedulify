interface FormProps {
  title: string;
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ title, children, onSubmit }: FormProps) {
  return (
    <form
      className="flex flex-col p-4 justify-center items-center gap-2 backdrop-blur-sm"
      method="post"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl dark:text-white font-bold mb-2 justify-center">{title}</h2>
      {children}
    </form>
  );
}