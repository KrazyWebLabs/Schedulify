"use client";

import DeleteBtn from "@/components/ui/Buttons/DeleteBtn";
import EditRecord from "@/components/ui/Buttons/EditRecord";
import Table from "@/components/ui/Table/Table";
import TableData from "@/components/ui/Table/TableData";

const subjects: { id: number, name: string, desc:string, idMajor:number }[] = [
  {
    id: 1,
    name: "Videojuegos I",
    desc: "Introducción a la creación de videojuegos",
    idMajor: 1
  },
]

const headers = ["Nombre", "Descripción", "ID-Carrera", ""]

export default function SubjectsList() {

  return (
    <div className="flex flex-col min-h-screen  min-w-screen px-4 py-8 md:px-8">
      <Table title="Materias" headers={headers}>
        {subjects.map((s) => (
            <tr key={s.id}>
              
              <TableData>
                {s.name}
              </TableData>
              <TableData>
                {s.desc}
              </TableData>
              <TableData>
                {s.idMajor}
              </TableData>

              <td className="flex items-center justify-center gap-4 m-2 text-right px-6 whitespace-nowrap">
                <EditRecord href={`/${s.id}`}/>

                <DeleteBtn href="/pepeDeletea"/>
              </td>
            </tr>
          ))}
      </Table>
    </div>
  )
}