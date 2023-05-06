import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<article
				className={`mx-auto w-full max-w-2xl mt-16 ${inter.className}`}
			>
				<div className="bg-slate-800 p-8 mb-6 flex flex-col gap-2 rounded-2xl">
					<h2 className="text-5xl text-white font-bold">
						2D Kinematics
					</h2>
					<p className="text-slate-200">By Jaxon Hill</p>
				</div>
				<main className="prose lg:prose-lg prose-h2:mb-6">
					<p>
						Two dimensional kinematics is an integral part of
						Physics that describes the motion of an object in,
						unsurprisingly, two dimensions. Through understanding 2D
						Kinematics as physicists, we can better understand how
						objects will move in a two dimensional space based on
						certain information that is provided to us. This becomes
						useful information as we delve further into the world of
						physics when discussing forces, Newton’s 2nd Law,
						different types of energy, momentum, etc. It cannot be
						understated of how a solid grasp on 2D Kinematics can
						further reinforce everything else we learn about
						physics. This interactive web page will serve as an
						overview and review of 2D Kinematics and will describe
						the conclusions we can draw through completing problems
						relating to it.
					</p>
				</main>
			</article>
		</>
	);
}
