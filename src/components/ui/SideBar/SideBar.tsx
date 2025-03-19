import Divider from "@/components/Divider";
import SubjectIcon from "../icons/SubjectIcon";
import TeacherIcon from '../icons/TeacherIcon';
import SideBarLink from "./SideBarLink";

export default function SideBar() {
  return (
    <aside className="flex flex-col w-64 h-screen p-4 border-r dark:border-gray-700 z-20 backdrop-blur-xl">
      <div className="flex flex-col justify-between flex-1">
        <nav>
          <SideBarLink href="/subject" icon={<SubjectIcon />}>
            Materias
          </SideBarLink>
          <SideBarLink href="/teacher" icon={<TeacherIcon />}>
            Maestros
          </SideBarLink>

          <Divider />
        </nav>
        <a
          href="/login"
          className="flex items-center justify-center m-4 rounded-lg border-2 border-boston-blue-600 hover:border-boston-blue-800 hover:bg-boston-blue-600 duration-150 hover:text-white font-medium text-gray-800 dark:text-gray-200 py-2"
        >
          Log in
        </a>
      </div>
    </aside>
  );
}
