"use client";

import DeleteBtn from "@/components/ui/Buttons/DeleteBtn";
import EditRecord from "@/components/ui/Buttons/EditRecord";
import Table from "@/components/ui/Table/Table";
import TableData from "@/components/ui/Table/TableData";

const teachers: { id: number, name: string, disponibility:string }[] = [
  {
    id: 1,
    name: "Nicolas Arrioja",
    disponibility: "Virtual"
  },
  {
    id: 2,
    name: "Veronica",
    disponibility: "Presencial/Vitual"
  },
  {
    id: 3,
    name: "Patricia",
    disponibility: "Presencial"
  },
]

const headers = ["Nombre", "Disponibilidad", ""]

export default function SubjectsList() {

  return (
    <div className="flex flex-col min-h-screen  min-w-screen px-4 py-8 md:px-8">
      <Table title="Maestros" headers={headers}>
        {teachers.map((s) => (
            <tr key={s.id}>
              
              <TableData>
                {s.name}
              </TableData>
              <TableData>
                {s.disponibility}
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