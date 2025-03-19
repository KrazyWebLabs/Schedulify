"use client"
import BackBtn from "@/components/ui/Buttons/BackBtn"
import type React from "react"
import SubmitBtn from "@/components/ui/Buttons/SubmitBtn"
import Form from "@/components/ui/Form/Form"
import FormInput from "@/components/ui/Form/Input"
import { useState } from "react"


export default function Classroom() {
  const [formData, setFormData] = useState({
    idClassroom: "",
    plugsNumber: "",
    capacity: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Datos guardados:", formData)
    localStorage.setItem("classroomData", JSON.stringify(formData))
  }

  return (
    <div className="flex h-full px-4 md:px-8 justify-center items-center">
      <Form title="Registro de Aula" onSubmit={handleSubmit}>
          <FormInput
            title="ID Aula"
            name="idClassroom"
            type="text"
            placeholder="A101"
            isRequired
            onChange={handleChange}
          />
          <FormInput
            title="Capacidad de alumnos"
            name="capacity"
            type="number"
            placeholder="30"
            isRequired
            onChange={handleChange}
          />
          <FormInput
            title="Número de enchufes"
            name="plugsNumber"
            type="number"
            placeholder="5"
            isRequired
            onChange={handleChange}
          />
        <SubmitBtn>Add</SubmitBtn>
        <BackBtn />
      </Form>
    </div>
  )
}

