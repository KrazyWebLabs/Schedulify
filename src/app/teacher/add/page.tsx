"use client";
import BackBtn from "@/components/ui/Buttons/BackBtn";
import SubmitBtn from "@/components/ui/Buttons/SubmitBtn";
import Form from "@/components/ui/Form/Form";
import FormInput from "@/components/ui/Form/Input";
import FormSelect from "@/components/ui/Form/Select";
import SelectOption from "@/components/ui/Form/SelectOption";
import { useState } from "react";

const disponibilidad: { id: number, name: string }[] = [
  {
    id: 1,
    name: "Presencial"
  },
  {
    id: 2,
    name: "Virtual"
  },
  {
    id: 3,
    name: "Presencial/Vitual"
  }
]

export default function Teacher() {
  const [formData, setFormData] = useState({
    idTeacher: "",
    teacherName: "",
    idDisponibility: "",
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
      <Form title="Registro de Maestros" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-4">
          <FormInput title="ID Profesor" name="idTeacher" type="text" placeholder="1..." isRequired onChange={handleChange}/>
          <FormInput title="Nombre Maestro" name="teacherName" type="text" placeholder="Maestro" isRequired onChange={handleChange}/>
        </div>
        <div className="flex flex-wrap gap-4">
          <FormSelect title="Seleccionar Modalidad" name="idDisponibility" isRequired onChange={handleChange}>
            {
              disponibilidad.map((teacher) => (
                <SelectOption key={teacher.id} value={`${teacher.id}`} >{teacher.name}</SelectOption>
              ))
            }
          </FormSelect>
        </div>
        <SubmitBtn>
          Add
        </SubmitBtn>
        <BackBtn />
      </Form>
    </div>
  );
}
