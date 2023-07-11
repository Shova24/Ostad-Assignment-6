import { useState } from "react";

const Content = ({ text }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <div class="h-screen flex items-center justify-center">
      <div class=" flex items-start flex-col p-5 gap-x-3">
        <button
          type="button"
          class="rounded-full bg-cyan-500 hover:bg-cyan-600 p-3 m-auto "
          onClick={() => setButtonClicked(!buttonClicked)}
        >
          Click here
        </button>
        {buttonClicked && <p class="font-normal text-gray-700"> {text}</p>}
      </div>
    </div>
  );
};

export default Content;
