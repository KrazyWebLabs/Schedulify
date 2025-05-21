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
    <aside 
    className="flex flex-col w-64 h-screen p-4 border-r dark:border-gray-700 z-20 backdrop-blur-xl fixed">
      <div className="flex flex-col justify-between flex-1">
        <nav>
          <SideBarLink href="/" icon={<HomeIcon/>}>
            Inicio
          </SideBarLink>
          <Divider/>
          <span className="flex w-full justify-center font-bold dark:text-gray-300 text-gray-700">
            Crear un horario
          </span>
          <SideBarLink href="/schedule" icon={<SubjectIcon />}>
            Horarios
          </SideBarLink>
          <SideBarLink href="/subject" icon={<SubjectIcon />}>
            Materias
          </SideBarLink>
          <SideBarLink href="/classroom" icon={<ClassroomIcon />}>
            Salones
          </SideBarLink>
          <SideBarLink href="/major" icon={<MajorIcon />}>
            Carrera
          </SideBarLink>

          <Divider />
          <SideBarLink href="/teacher" icon={<TeacherIcon />}>
            Maestros
          </SideBarLink>          
          <SideBarLink href="/periods" icon={<PeriodIcon />}>
            Periodos
          </SideBarLink>
        </nav>
      </div>
    </aside>
  );
}
