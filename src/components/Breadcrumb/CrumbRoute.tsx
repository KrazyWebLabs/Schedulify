interface Props {
  paths: Array<string>;
  index: number;
}

export default function CrumbRoute({ paths, index }: Props) {
  const path = paths[index];

  return (
    <a
      href={`/${paths.slice(0, index + 1).join("/")}`}
      className={`hover:underline capitalize ${
        index === paths.length - 1
          ? "text-boston-blue-600 dark:text-boston-blue-400 dark:hover:text-boston-blue-300"
          : "text-gray-600 dark:text-gray-400 dark:hover:text-white"
      }`}
    >
      {path}
    </a>
  );
}
