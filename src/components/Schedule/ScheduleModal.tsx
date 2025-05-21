"use client";
import { useState } from "react";
import FormSelect from "../ui/Form/Select";
import FormSelectOption from "../ui/Form/SelectOption";
import ScheduleSubjectModal from "./SubjectModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { removeSubject } from "@/Redux/Schedule/scheduleSlice";

export default function ScheduleModal() {
  const dispatch = useDispatch();
  const subjects = useSelector((state: RootState) => state.schedule.subjects);
  const [openModal, setModal] = useState(false);
  const handleDeleteSubject = (index: number) => {
    dispatch(removeSubject(index));
    // Aquí puedes cerrar el modal y limpiar el formulario si quieres
  };
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
      <div className="w-[600px] border rounded-3xl p-8 dark:bg-gray-900 bg-white">
        <div className="flex flex-col">
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold">Nuevo Semestre</h1>
          </div>

          <div className="flex items-center flex-col">
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

            <div className="my-4 text-center flex items-end justify-between w-full">
              <h2 className="text-2xl font-bold">Materias</h2>
              <button
                type="button"
                className="flex items-center justify-center rounded-lg border-2 border-boston-blue-800 hover:border-boston-blue-900 bg-boston-blue-700 duration-150 text-white font-bold p-2"
                onClick={handleModal}
              >
                Agregar
              </button>
            </div>

            <div className="min-h-6 border w-full rounded-lg bg-amber-50 dark:bg-amber-300/70">
              {subjects.length > 0 && (
                <div className="p-8 space-y-2">
                  {subjects.map((subject, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border rounded-md overflow-hidden bg-white dark:text-black"
                    >
                      <span className="m-2">{`${subject.subject} [${subject.teacher}] •  ${subject.schedules}`}</span>
                      <button 
                        className="bg-red-500 text-white px-4 py-2 h-full flex items-center justify-center"
                        onClick={() => handleDeleteSubject(index)}  
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {openModal && <ScheduleSubjectModal />}
    </div>
  );
}
