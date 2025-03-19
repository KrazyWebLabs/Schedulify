"use client";

import DeleteBtn from "@/components/ui/Buttons/DeleteBtn";
import EditRecord from "@/components/ui/Buttons/EditRecord";
import Table from "@/components/ui/Table/Table";
import TableData from "@/components/ui/Table/TableData";

const subjects: { idClassroom: string, capacity: number, plugsNumber: number }[] = [
  {
    idClassroom: "A101",
    capacity: 123,
    plugsNumber: 312
  },
]

const headers = ["ID Salón", "Capacidad de alumnos", "No. enchufes", ""]

export default function SubjectsList() {

  return (
    <div className="flex flex-col h-full  min-w-screen px-4 py-8 md:px-8">
      <Table title="Materias" headers={headers}>
        {subjects.map((s) => (
            <tr key={s.idClassroom}>
              
              <TableData isID={true}>
                {s.idClassroom}
              </TableData>
              <TableData>
                {s.capacity}
              </TableData>
              <TableData>
                {s.plugsNumber}
              </TableData>

              <td className="flex items-center justify-center gap-4 m-2 text-right px-6 whitespace-nowrap">
                <EditRecord href={`${s.idClassroom}`}/>

                <DeleteBtn href="/pepeDeletea"/>
              </td>
            </tr>
          ))}
      </Table>
    </div>
  )
}