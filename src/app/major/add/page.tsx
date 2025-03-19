"use client";
import BackBtn from "@/components/ui/Buttons/BackBtn";
import type React from "react";

import SubmitBtn from "@/components/ui/Buttons/SubmitBtn";
import Form from "@/components/ui/Form/Form";
import FormInput from "@/components/ui/Form/Input";
import TextArea from "@/components/ui/Form/TextArea";
import { useState } from "react";

export default function Assignment() {
  const [formData, setFormData] = useState({
    idMajor: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos guardados:", formData);
    localStorage.setItem("assignmentData", JSON.stringify(formData));
  };

  return (
    <div className="flex h-full px-4 md:px-8 justify-center items-center">
      <Form title="Registro de carrera" onSubmit={handleSubmit}>
        <FormInput
          title="ID Carrera"
          name="idMajor"
          type="text"
          placeholder="ISF2019"
          isRequired
          onChange={handleChange}
        />

        <TextArea
          title="Descripción"
          name="description"
          placeholder="Descripción detallada de la carrera"
          isRequired
          rows={4}
          onChange={handleChange}
        />
        <SubmitBtn>Add</SubmitBtn>
        <BackBtn />
      </Form>
    </div>
  );
}
