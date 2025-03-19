import Divider from "@/components/Divider";
import SubjectIcon from "../icons/SubjectIcon";
<<<<<<< HEAD
import TeacherIcon from '../icons/TeacherIcon';
=======
import ClassroomIcon from "../icons/ClassroomIcon";
>>>>>>> 4320a84673957c99d4b5691f59d6481928fc12dd
import SideBarLink from "./SideBarLink";

export default function SideBar() {
  return (
    <aside className="flex flex-col w-64 h-screen p-4 border-r dark:border-gray-700 z-20 backdrop-blur-xl">
      <div className="flex flex-col justify-between flex-1">
        <nav>
          <SideBarLink href="/subject" icon={<SubjectIcon />}>
            Materias
          </SideBarLink>
<<<<<<< HEAD
          <SideBarLink href="/teacher" icon={<TeacherIcon />}>
            Maestros
=======
          <SideBarLink href="/classroom" icon={<ClassroomIcon />}>
            Salones
>>>>>>> 4320a84673957c99d4b5691f59d6481928fc12dd
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
