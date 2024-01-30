import React from "react";

interface InputProps {
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ label, type }) => {
  return (
    <div className="relative">
      {label === "Message" ? (
        <textarea
          className="
        block
        rounded-md
        px-6
        pt-6
        pb-1
        w-full
        text-[14px] md:text-md lg:text-lg
        text-white
        bg-blue-100/5
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        "
          placeholder=" "
        />
      ) : (
        <input
          type={type}
          className="
        block
        rounded-md
        px-6
        pt-6
        pb-1
        w-full
        text-[14px] md:text-md lg:text-lg
        text-white
       bg-blue-100/5
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        "
          placeholder=" "
        />
      )}
      <label
        className="absolute
            text-[14px] md:text-md lg:text-lg
            text-zinc-400
            duration-150
            transform
            -translate-y-3
            scale-75
            top-4
            z-10
            origin-[0]
            left-6
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
            "
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
