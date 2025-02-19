import BackBtn from "@/components/buttons/BackBtn";
import SubmitBtn from "@/components/buttons/SubmitBtn";
import Form from "@/components/ui/Form";
import FormInput from "@/components/ui/Input";

export default function Subject() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex mx-auto px-4 md:px-8 justify-center items-center flex-col">
          <h2 className="text-gray-800 text-4xl font-extrabold sm:text-7xl dark:text-whites">
            school subject
          </h2>
          <Form title="Inicio de Sesión">
            <FormInput title="pepe" name="cardNumber" type="number" placeholder="" isRequired>
              Card Number
            </FormInput>
            <BackBtn />
            <SubmitBtn>
              Add
            </SubmitBtn>
          </Form>
        </div>
      </main>
    </div>
  );
}
