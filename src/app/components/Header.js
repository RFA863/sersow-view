import Image from "next/image";
import { FaSignInAlt } from "react-icons/fa"

import font from '../font.module.css';
import LogoTitle from "../../../public/images/LogoTitle.svg";

export default function Header() {
  return (
		<div className="w-full bg-slate-900 px-24 py-12 border-b-[1px] border-b-solid border-b-slate-700 relative z-[2]">
			<div className="flex justify-between">
				<div className="flex items-center">
					<Image src={LogoTitle} className="w-72 pr-8 border-r-[1px] border-r-solid border-r-slate-700" />
					<h3 className={`${font.Satoshi_b2medium} pl-8 text-slate-200`}>Home</h3>
				</div>
				<button className="flex items-center gap-2 px-9 py-3 border-[1px] border-solid border-slate-300 rounded-xl">
					<div>
						<FaSignInAlt className="text-white" />
					</div>
					<h4 className={`${font.Satoshi_b2medium} text-white`}>Log in</h4>
				</button>
			</div>
		</div>
	);
}