"use client";
import SubmitBtn from "@/components/ui/Buttons/SubmitBtn";
import Form from "@/components/ui/Form/Form";
import FormInput from "@/components/ui/Form/Input";
import { useState } from "react";

export default function Subject() {
  const [loginData, setLoginData] = useState({
    username: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos guardados:", loginData);
    localStorage.setItem("formData", JSON.stringify(loginData));
  };
  return (
    <div className="flex h-full px-4 md:px-8 justify-center items-center">
      <Form title="Registro de Materia" onSubmit={handleSubmit}>
        <FormInput
          title="Usuario"
          name="username"
          type="text"
          placeholder="carlos0123"
          isRequired
          onChange={handleChange}
        />
        <FormInput
          title="Contraseña"
          name="psswrd"
          type="password"
          placeholder="123456789"
          isRequired
          onChange={handleChange}
        />
        <SubmitBtn>Login</SubmitBtn>
      </Form>
    </div>
  );
}
