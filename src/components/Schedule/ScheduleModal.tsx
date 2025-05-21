"use client";
import { useState } from "react";
import FormInput from "../ui/Form/Input";
import FormSelect from "../ui/Form/Select";
import FormSelectOption from "../ui/Form/SelectOption";
import ScheduleSubjectModal from "./SubjectModal";

export default function ScheduleModal() {
  const [subjects, setSubjects] = useState<string[]>(["Pepe"]);
  const [openModal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!openModal);
  };
  const majors = [
    "Computer Science",
    "Engineering",
    "Business",
    "Arts",
    "Medicine",
  ];
  return (
    <div className="w-full flex justify-center items-center space-x-8 duration-150">
      <div className="w-[700px] border rounded-3xl p-8 dark:bg-gray-900 bg-white">
        <div className="flex flex-col space-y-8">

          <div className="text-center">
            <h1 className="text-4xl font-bold">Semester x</h1>
          </div>

          <div className="flex items-center flex-col gap-4">
            <FormSelect title="Selecciona Carrera" name="major" isRequired>
              <FormSelectOption value="">
                -- Selecciona La Carrera --
              </FormSelectOption>
              {majors?.map((major) => (
                <FormSelectOption value={major} key={major}>
                  {major}
                </FormSelectOption>
              ))}
            </FormSelect>
            <FormInput
              title="ID Carrera"
              name="idMajor"
              type="text"
              placeholder="ISF2019"
              isRequired
            />
            <div className="text-center flex items-center">
              <h2 className="text-2xl font-bold mr-8">Materia</h2>
              <button
                type="button"
                className="flex items-center justify-center rounded-lg border-2 border-boston-blue-800 hover:border-boston-blue-900 bg-boston-blue-700 duration-150 text-white font-bold p-2"
                onClick={handleModal}
              >
                Agregar
              </button>
            </div>
            {subjects.length > 0 && (
              <div className="mt-4 border w-full rounded-lg bg-amber-50 dark:bg-amber-300/70">
                <div className="p-8 space-y-2">
                  {subjects.map((subject, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border rounded-md overflow-hidden bg-white dark:text-black"
                    >
                      <span className="m-2">{subject}</span>
                      <button className="bg-red-500 text-white px-4 py-2 h-full flex items-center justify-center">
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {openModal && (
          <ScheduleSubjectModal/>
        )
      }
    </div>
  );
}
