import AddRegisterBtn from "../Buttons/AddRegisterBtn";

interface InputProps {
  title?: string;
  headers: string[];
  children: React.ReactNode;
}

export default function Table({ title, headers, children }: InputProps) {
  return (
    <>
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl dark:text-gray-300">
            {title}
          </h3>
        </div>
        <div className="mt-3 md:mt-0">
          <AddRegisterBtn />
        </div>
      </div>
      <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto backdrop-blur-sm">
        <table className="w-full table-auto text-sm text-left">
          <thead className="dark:bg-gray-400/20 dark:text-white bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              {headers.map((header, index) => (
                <th className="py-3 px-6" key={index}>
                  {header}
                </th>
              ))}
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">{children}</tbody>
        </table>
      </div>
    </>
  );
}
