import confirmIcon from "../../../assets/images/icon-thank-you.svg";

export const Confirm = () => {
  return (
    <div className="flex flex-col gap-3 bg-white w-[90%] rounded-xl py-18 px-5 shadow-md mb-auto items-center text-center text-[#06195c] text-2xl lg:shadow-none lg:py-[20%]">
      <img src={confirmIcon} alt="confirm icon" className="w-12 lg:w-18" />
      <h1 className="font-bold text-2xl text-[#06195c]">Thank you</h1>
      <p className="text-gray-400 font-semibold text-base">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};
