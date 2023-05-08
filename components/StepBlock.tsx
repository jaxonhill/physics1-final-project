import { useState } from "react";

export default function StepBlock({ children, stepNumber }: any): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			{isOpen ? (
				<div className="flex flex-col gap-4">
					{children}
					<button
						className="self-end bg-slate-100 rounded-lg px-4 py-2 hover:cursor-pointer hover:bg-slate-400"
						onClick={() => setIsOpen(!isOpen)}
					>
						Close Step {stepNumber}
					</button>
				</div>
			) : (
				<button
					className="bg-blue-500 text-white font-bold rounded-lg px-4 py-2 hover:cursor-pointer hover:bg-blue-700"
					onClick={() => setIsOpen(!isOpen)}
				>
					Show Step {stepNumber}
				</button>
			)}
		</div>
	);
}
