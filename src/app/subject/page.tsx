"use client";
import BackBtn from "@/components/buttons/BackBtn";
import SubmitBtn from "@/components/buttons/SubmitBtn";
import Form from "@/components/ui/Form/Form";
import FormInput from "@/components/ui/Form/Input";
import FormSelect from "@/components/ui/Form/Select";
import SelectOption from "@/components/ui/Form/SelectOption";
import TextArea from "@/components/ui/Form/TextArea";
import { useState } from "react";

const carreras: { id: number, name: string }[] = [
  {
    id: 1,
    name: "Ingeniería en Software"
  },
  {
    id: 2,
    name: "Ingeniería Mecatronica"
  },
  {
    id: 3,
    name: "Ingeniería Industrial"
  }
]

export default function Subject() {
  const [formData, setFormData] = useState({
    idSubject: "",
    subjectName: "",
    subjectDesc: "",
    idMajor: "",
    contactsNo: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos guardados:", formData);
  };
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="flex mx-auto px-4 md:px-8 justify-center items-center flex-col">
        <Form title="Registro de Materia" onSubmit={handleSubmit}>
          <FormInput title="ID Materia" name="idSubject" type="text" placeholder="ISF12302" isRequired onChange={handleChange}/>
          <FormInput title="Nombre Materia" name="subjectName" type="text" placeholder="Videojuegos I" isRequired onChange={handleChange}/>
          <TextArea title="Descripción" name="subjectDesc" placeholder="Creación de el desarrollo de historia de un videojuego" isRequired rows={2} onChange={handleChange} />
          <FormSelect title="Seleccionar carrera" name="idMajor" isRequired onChange={handleChange}>
            {
              carreras.map((carrera) => (
                <SelectOption key={carrera.id} value={`${carrera.id}`} >{carrera.name}</SelectOption>
              ))
            }
          </FormSelect>
          <FormInput title="Número de contactos" name="contactsNo" type="number" placeholder="5" isRequired onChange={handleChange}/>
          <SubmitBtn>
            Add
          </SubmitBtn>
          <BackBtn />
        </Form>
      </div>
    </main>
  );
}
