import { useState } from "react";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3, 4];
  return (
    <div className="container mx-auto flex flex-col h-screen pt-8 items-center">
      <div className="flex gap-4 text-white mb-8">
        {steps.map((step) => {
          return (
            <div
              key={step}
              className={`${
                currentStep === step ? "bg-[#b3ebf2] text-black" : ""
              } border-1 border-white rounded-full p-1 px-3`}
            >
              <h1 className="font-bold">{step}</h1>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 bg-white w-[90%] rounded-md py-7 px-5 shadow-md mb-auto">
        <h1 className="font-bold text-2xl">Personal Info</h1>
        <p className="text-gray-400 max-w-[250px]">
          Please provide your name, email address, and phone number.
        </p>
        <form className="flex flex-col font-semibold">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            className="border-1 border-gray-300 rounded-md p-2 placeholder-gray-400 mb-2"
          />
          <label htmlFor="email" className="text-sm">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            className="border-1 border-gray-300 rounded-md p-2 placeholder-gray-400 mb-2"
          />
          <label htmlFor="phone" className="text-sm">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            className="border-1 border-gray-300 rounded-md p-2 placeholder-gray-400"
          />
        </form>
      </div>
      <div
        className={`flex bg-white w-full h-[72px] py-4 px-5 ${
          currentStep > 1 ? "justify-between" : "justify-end"
        }`}
      >
        {currentStep > 1 && (
          <button
            type="button"
            onClick={() => setCurrentStep(currentStep - 1)}
            className="text-gray-400"
          >
            Go Back
          </button>
        )}
        {currentStep < 4 && (
          <button
            type="button"
            onClick={() => setCurrentStep(currentStep + 1)}
            className="bg-[#06195c] text-white px-3 py-2 rounded-sm self-end"
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
