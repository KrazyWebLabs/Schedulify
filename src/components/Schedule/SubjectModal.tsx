"use client";
import { useState } from "react";
import type React from "react";
import FormSelect from "../ui/Form/Select";
import FormSelectOption from "../ui/Form/SelectOption";

export default function ScheduleSubjectModal() {
  const [scheduleItems, setScheduleItems] = useState<{ time: string }[]>([]);
  const [formData, setFormData] = useState({
    subject: "",
    teacher: "",
    classroom: "",
  });

  const subjects = [
    "Matemáticas",
    "Física",
    "Química",
    "Programación",
    "Base de Datos",
  ];
  const teachers = [
    "Dr. García",
    "Dra. Rodríguez",
    "Prof. Martínez",
    "Ing. López",
    "Lic. Fernández",
  ];
  const schedules = [
    "7:00 - 9:00",
    "9:00 - 11:00",
    "11:00 - 13:00",
    "13:00 - 15:00",
    "15:00 - 17:00",
  ];
  const classrooms = ["A101", "B202", "C303", "D404", "E505"];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addScheduleItem = () => {
    if (formData.schedule) {
      setScheduleItems([...scheduleItems, { time: formData.schedule }]);
      // Reset schedule selection after adding
      setFormData({ ...formData, schedule: "" });
    }
  };

  const removeScheduleItem = (index: number) => {
    const newItems = [...scheduleItems];
    newItems.splice(index, 1);
    setScheduleItems(newItems);
  };

  const handleSubmit = () => {};

  return (
    <div className="w-[500px] mx-auto border rounded-3xl p-8 dark:bg-gray-900 bg-white">
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Agregar Materia</h2>
          <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            X
          </button>
        </div>

        <div className="space-y-4">
          <FormSelect
            title="Materia"
            name="subject"
            isRequired
            onChange={handleChange}
            value={formData.subject}
          >
            <FormSelectOption value="">
              -- Selecciona Materia --
            </FormSelectOption>
            {subjects.map((subject) => (
              <FormSelectOption value={subject} key={subject}>
                {subject}
              </FormSelectOption>
            ))}
          </FormSelect>

          <FormSelect
            title="Docente"
            name="teacher"
            isRequired
            onChange={handleChange}
            value={formData.teacher}
          >
            <FormSelectOption value="">
              -- Selecciona Profesor --
            </FormSelectOption>
            {teachers.map((teacher) => (
              <FormSelectOption value={teacher} key={teacher}>
                {teacher}
              </FormSelectOption>
            ))}
          </FormSelect>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <FormSelect
                title="horario"
                name="schedule"
                isRequired={false}
                onChange={handleChange}
                value={formData.schedule}
              >
                <FormSelectOption value="">
                  -- Selecciona Horario --
                </FormSelectOption>
                {schedules.map((schedule) => (
                  <FormSelectOption value={schedule} key={schedule}>
                    {schedule}
                  </FormSelectOption>
                ))}
              </FormSelect>
              <button
                type="button"
                className="mt-2 py-2 px-3 rounded-lg border-2 border-boston-blue-800 hover:border-boston-blue-900 bg-boston-blue-700 duration-150 text-white font-medium p-2"
                onClick={addScheduleItem}
              >
                Agregar ✓
              </button>
            </div>

            {scheduleItems.length > 0 && (
              <div className="border rounded-lg p-3 bg-green-50 dark:bg-green-800">
                <div className="flex flex-wrap gap-2">
                  {scheduleItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border rounded-md overflow-hidden bg-white dark:bg-gray-700"
                    >
                      <span className="px-3 py-1">{item.time}</span>
                      <button
                        className="bg-red-500 text-white px-2 py-1 h-full flex items-center justify-center"
                        onClick={() => removeScheduleItem(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <FormSelect
            title="Salón"
            name="classroom"
            isRequired
            onChange={handleChange}
            value={formData.classroom}
          >
            <FormSelectOption value="">-- Selecciona Aula --</FormSelectOption>
            {classrooms.map((classroom) => (
              <FormSelectOption value={classroom} key={classroom}>
                {classroom}
              </FormSelectOption>
            ))}
          </FormSelect>

          <div className="flex justify-center mt-6">
            <button
              type="button"
              className="px-6 py-2 rounded-lg border-2 border-boston-blue-800 hover:border-boston-blue-900 bg-boston-blue-700 duration-150 text-white font-bold"
              onClick={handleSubmit}
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
