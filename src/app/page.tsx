export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex mx-auto px-4 md:px-8 justify-center items-center flex-col">
          <h2 className="text-gray-800 text-4xl font-extrabold sm:text-7xl dark:text-white">
            Welcome
          </h2>
          <div className="typewriter flex justify-center items-center flex-col">
            <h3 className="text-gray-800 text-xl font-bold sm:text-xl dark:text-gray-200 mt-5">
              to the future of the legacy
            </h3>
          </div>
          <p className="text-gray-800 text-xl sm:text-lg dark:text-gray-400 m-10 px-32 text-justify">
            Our mission is to bring history to life by offering visitors the
            unique opportunity to engage in virtual conversations with important
            personalities of the past and provide the visitor with a connection
            through the lens of their MBTI personality type.
          </p>
          <a href="/subject" className="flex justify-center px-4 w-full max-w-32 py-2 text-white duration-150 bg-boston-blue-600 rounded-lg hover:bg-boston-blue-500 active:bg-boston-blue-700 md:text-sm capitalize font-bold" >subject</a>
        </div>
      </main>
    </div>
  );
}
