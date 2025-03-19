"use client";

import DeleteBtn from "@/components/ui/Buttons/DeleteBtn";
import EditRecord from "@/components/ui/Buttons/EditRecord";
import Table from "@/components/ui/Table/Table";
import TableData from "@/components/ui/Table/TableData";

const carreras: { id: number, name: string, description: string }[] = [
  {
    id: 1,
    name: "Ingeniería en Software",
    description: "Ingeniería en Software descripción"
  },
  {
    id: 2,
    name: "Ingeniería Mecatronica",
    description: "Ingeniería Mecatronica descripción"
  },
  {
    id: 3,
    name: "Ingeniería Industrial",
    description: "Ingeniería Industrial descripción"
  }
]

const headers = ["ID Carrera", "Nombre", "Descripción", ""]

export default function SubjectsList() {

  return (
    <div className="flex flex-col h-full  min-w-screen px-4 py-8 md:px-8">
      <Table title="Carreras" headers={headers}>
        {carreras.map((s) => (
            <tr key={s.id}>
              
              <TableData isID={true}>
                {s.id}
              </TableData>
              <TableData>
                {s.name}
              </TableData>
              <TableData>
                {s.description}
              </TableData>

              <td className="flex items-center justify-center gap-4 m-2 text-right px-6 whitespace-nowrap">
                <EditRecord href={`${s.id}`}/>

                <DeleteBtn href="/pepeDeletea"/>
              </td>
            </tr>
          ))}
      </Table>
    </div>
  )
}