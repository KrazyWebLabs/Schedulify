"use client";
import ScheduleModal from "@/components/Schedule/ScheduleModal";
import Modal from "@/components/ui/Modal";
import { useState } from "react";

const Schedule = () => {
  const [openModal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!openModal);
  };

  return (
    <>
      <div className="flex h-full px-4 md:px-8 justify-center items-center">
        <button
          type="button"
          className="h-10 px-4 font-medium text-sm rounded-md text-white bg-red-900"
          onClick={handleModal}
        >
          Open Modal
        </button>
      </div>
      <Modal state={openModal}>
        <div className="flex flex-col justify-center items-center">
          <ScheduleModal />
          <div className="flex space-x-4">
            <button
              className="mt-4 py-2 px-3 inline-block text-white duration-150 font-medium bg-red-600 rounded-lg hover:bg-red-500 active:bg-red-700 md:text-sm"
              onClick={handleModal}
            >
              Cerrar ✖
            </button>
            <button
              type="button"
              className="mt-4 py-2 px-3 rounded-lg border-2 border-boston-blue-800 hover:border-boston-blue-900 bg-boston-blue-700 duration-150 text-white font-medium p-2"
            >
              Agregar ✓
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Schedule;
