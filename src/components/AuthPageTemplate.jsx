export const AuthPageTemplate = ({children}) => {
  return (
    <div className="grid w-screen h-[calc(100vh-80px)] place-items-center">
      <div className="w-[90%] md:w-[80%] md:h-[80%] -mt-16 bg-white shadow-xl rounded-sm md:rounded-xl grid gap-2 md:grid-cols-2 overflow-hidden">
        <div className="flex-col items-center justify-center hidden gap-4 p-5 text-white bg-purple-500 md:flex">
          <img
            className="w-[60%]"
            src="/img/quiz_ilustration.svg"
            alt="QuizzApp Logo"
          />
          <h1 className="text-4xl font-black text-center">
            Welcome to QuizzApp
          </h1>
          <p className="text-center text-purple-100">
            Learn and have fun with <span>QuizzApp!</span>
          </p>
        </div>

        <div className="flex flex-col justify-center p-5 space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
};
