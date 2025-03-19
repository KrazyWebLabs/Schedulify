"use client";
import BackBtn from "@/components/ui/Buttons/BackBtn";
import SubmitBtn from "@/components/ui/Buttons/SubmitBtn";
import Form from "@/components/ui/Form/Form";
import FormInput from "@/components/ui/Form/Input";
import FormSelect from "@/components/ui/Form/Select";
import SelectOption from "@/components/ui/Form/SelectOption";
import TextArea from "@/components/ui/Form/TextArea";
import { useState } from "react";

const periodos: { id: number, name: string }[] = [
  {
    id: 1,
    name: "Primavera"
  },
  {
    id: 2,
    name: "Verano"
  },
  {
    id: 3,
    name: "Otoño"
  }
]

export default function Subject() {
  const [formData, setFormData] = useState({
    idPeriod: "",
    periodName: "",
    periodDesc: "",
    idPeriodClassification: "",
   
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos guardados:", formData);
    localStorage.setItem("formData", JSON.stringify(formData));
  };
  return (
    <div className="flex min-h-screen px-4 md:px-8 justify-center items-center">
      <Form title="Registro de Periodos" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-4">
          <FormInput title="ID Periodo" name="idPeriodo" type="text" placeholder="V2024" isRequired onChange={handleChange}/>
          <FormInput title="Nombre Periodo" name="periodName" type="text" placeholder="Periodo 2024" isRequired onChange={handleChange}/>
        </div>
        <div className="flex flex-wrap gap-4">
          <FormSelect title="Seleccionar Periodo" name="idPeriodClassification" isRequired onChange={handleChange}>
            {
              periodos.map((periodo) => (
                <SelectOption key={periodo.id} value={`${periodo.id}`} >{periodo.name}</SelectOption>
              ))
            }
          </FormSelect>
          {/* <FormInput title="Número de contactos" name="contactsNo" type="number" placeholder="5" isRequired onChange={handleChange}/> */}
        </div>
        <TextArea title="Descripción" name="periodDesc" placeholder="Periodo de Verano 2024 de 10 de Junio a 14 de Julio" isRequired rows={4} onChange={handleChange} />
        <SubmitBtn>
          Add
        </SubmitBtn>
        <BackBtn />
      </Form>
    </div>
  );
}
