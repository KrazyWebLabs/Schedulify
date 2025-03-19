"use client";

import DeleteBtn from "@/components/ui/Buttons/DeleteBtn";
import EditRecord from "@/components/ui/Buttons/EditRecord";
import Table from "@/components/ui/Table/Table";
import TableData from "@/components/ui/Table/TableData";

const periods: { id: number, name: string, desc:string }[] = [
  {
    id: 1,
    name: "Primavera 2024",
    desc: "Periodo de primavera 2024 del 17 de Enero al 17 de Mayo",
  },  
  {
    id: 2,
    name: "Verano 2024",
    desc: "Periodo de verano 2024 del 10 de Junio al 14 de Julio",
  },  
  {
    id: 3,
    name: "Otoño 2024",
    desc: "Periodo de otoño 2024 del 21 de Agosto al 9 de Diciembre",
  },  
  {
    id: 4,
    name: "Primavera 2025",
    desc: "Periodo de Primavera 2025 del 20 de Enero al 25 de Mayo",
  },
]

const headers = ["Nombre", "Descripción", ""]

export default function PeriodsList() {

  return (
    <div className="flex flex-col min-h-screen  min-w-screen px-4 py-8 md:px-8">
      <Table title="Periodos" headers={headers}>
        {periods.map((s) => (
            <tr key={s.id}>
              
              <TableData>
                {s.name}
              </TableData>
              <TableData>
                {s.desc}
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