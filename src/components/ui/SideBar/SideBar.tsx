import Divider from "@/components/Divider";
import SubjectIcon from "../icons/SubjectIcon";
import ClassroomIcon from "../icons/ClassroomIcon";
import SideBarLink from "./SideBarLink";
import MajorIcon from "../icons/MajorIcon";
import PeriodIcon from "../icons/PeriodIcon";

import TeacherIcon from "../icons/TeacherIcon";
import HomeIcon from "../icons/HomeIcon";

export default function SideBar() {
  return (
    <aside className="flex flex-col w-64 h-screen p-4 border-r dark:border-gray-700 z-20 backdrop-blur-xl">
      <div className="flex flex-col justify-between flex-1">
        <nav>
          <SideBarLink href="/" icon={<HomeIcon/>}>
            Inicio
          </SideBarLink>
          <Divider/>
          <SideBarLink href="/subject" icon={<SubjectIcon />}>
            Materias
          </SideBarLink>
          <SideBarLink href="/classroom" icon={<ClassroomIcon />}>
            Salones
          </SideBarLink>
          <SideBarLink href="/major" icon={<MajorIcon />}>
            Carrera
          </SideBarLink>

          <SideBarLink href="/teacher" icon={<TeacherIcon />}>
            Maestros
          </SideBarLink>          
          <SideBarLink href="/periods" icon={<PeriodIcon />}>
            Periodos
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
