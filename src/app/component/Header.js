import Image from "next/image";
import { FaSignInAlt } from "react-icons/fa";

import font from "../font.module.css";
import LogoTitle from "../../../public/images/Logo.svg";

export default function Header() {
  return (
    <div className="w-full bg-slate-900 px-24 py-9 border-b-[1px] border-b-solid border-b-slate-700 relative z-[2]">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            src={LogoTitle}
            className="w-72 pr-8 border-r-[1px] border-r-solid border-r-slate-700"
          />
          <button className="home w-fit h-fit pl-8">
            <h3 className={`${font.Satoshi_b2bold} text-slate-200`}>
              Home
            </h3>
          </button>
        </div>

        <div className="flex gap-5">
          <button className="register flex items-center px-9 py-3 border-[1px] border-solid border-slate-300 rounded-xl bg-gradient-to-b from-[#A855F7] to-[#7C3AED]">
            <div>
              <h4
                className={`${font.Satoshi_b2bold} text-left text-base font-bold text-white`}
              >
                Register
              </h4>
            </div>
          </button>
          <div className="flex ">
            <button className="login flex items-center px-9 py-3 border-[1px] border-solid border-slate-300 rounded-xl">
              <div className="pr-2">
                <FaSignInAlt className="text-white" />
              </div>
              <h4 className={`${font.Satoshi_b2bold} text-white`}>Log in</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
