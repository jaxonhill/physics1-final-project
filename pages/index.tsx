import { Inter } from "next/font/google";
import Link from "next/link";
import { NextFont } from "next/dist/compiled/@next/font";
import { useState } from "react";
import Image from "next/image";

// If loading a variable font, you don't need to specify the font weight
const inter: NextFont = Inter({ subsets: ["latin"] });

function toRadians(angle: number) {
	return angle * (Math.PI / 180);
}

export default function Home(): JSX.Element {
	const [displacement, setDisplacement] = useState(-10);
	const [time, setTime] = useState(10);
	const [theta, setTheta] = useState(45);
	const [velocity, setVelocity] = useState(10);
	const [time2, setTime2] = useState(10);

	// Do the velocity calculation and rounded it to 2 decimal places always
	let velocityAnswer = (
		Math.round((displacement / time) * 100) / 100
	).toFixed(2);

	let accelerationAnswer = (
		Math.round((velocity / time2) * 100) / 100
	).toFixed(2);

	// Do the calculation for vx and vy
	let vx = Math.round(50 * Math.cos(toRadians(theta)) * 100) / 100;
	let vy = Math.round(50 * Math.sin(toRadians(theta)) * 100) / 100;

	return (
		<>
			<article
				className={`mx-auto w-full max-w-3xl my-16 ${inter.className}`}
			>
				<div className="bg-slate-800 p-8 mb-4 flex flex-col gap-2 rounded-2xl">
					<h2 className="text-5xl text-white font-bold">
						2D Kinematics
					</h2>
					<p className="text-slate-200 text-xl">By Jaxon Hill</p>
				</div>
				<div className="mb-12">
					<p className="text-slate-800">
						<em>
							An overview of 2D Kinematics at large. This includes
							introducing vectors, displacement, velocity,
							acceleration to then explain how to apply these
							vectors in two dimensional space. I wrote this paper
							almost as if it were an introduction / guide, as it
							is something I wish I could have utilized to help
							grasp these topics when I first learned them.
						</em>
					</p>
				</div>
				<main className="prose lg:prose-lg prose-h2:mb-6 prose-h3:mb-4">
					<h2>Introduction</h2>
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
					<h2>Vectors</h2>
					<p>
						In 2D Kinematics, vectors are arguably the most
						important concept to understand — as displacement,
						velocity, and acceleration (all discussed later) ALL are
						vectors themselves. A vector is simply a quantity that
						has both a magnitude and direction. For instance, “10
						meters to the west” could be a simple description of a
						vector. However, how else could we write this? When
						dealing with vectors, it is crucial to understand where
						the vector is actually pointing in context to our axes.
						If we were to have just a “classic” set of x and y axes,
						as you would see in any math class where quadrant I is
						the positive x and y direction — then 10 meters to the
						west, could actually also be written as -10 m.
					</p>
					<p>
						Given that we are working in two dimensions, it is also
						imperative to understand how we can add and subtract
						vectors. This is actually quite straightforward, but we
						first have to break our vectors into “components.” Think
						of trigonometry. If we have a vector essentially
						pointing diagonal at, say 45°, then it will have both an
						x and y component. Once we have these components, we can
						simply add the x and y components separately through a
						method known as the “tail to tip” method. If we were
						adding vectors A and B, then we would put B’s tail on
						A’s head and draw the resultant vector from A’s tail to
						B’s head.
					</p>
					<h2>Displacement, Velocity, and Acceleration</h2>
					<h3>Displacement</h3>
					<p>
						Displacement, velocity, and acceleration are the key
						elements we will manipulate when solving 2D Kinematics
						problems. These are all vectors, and this makes sense.
						How? Well, we already looked at displacement earlier
						such as when we said “10 meters to the west.” This is
						the displacement — simple as that.{" "}
						<strong className="font-bold">
							Displacement is the shortest distance from the
							starting position to the final position.
						</strong>
					</p>
					<h3>Velocity</h3>
					<p>
						How long did it take us to get there? This would
						describe our velocity. Say we walked 10 meters to the
						west in 10 seconds (with no twists or turns). If we
						divide 10 meters by 10 seconds, we are traveling at -1
						m/s. How can velocity be negative? This perplexed me at
						first, but remember what we know is true about vectors.
						In the context of the problem, it is crucial to
						understand that we have traveled 10 meters to the left
						(the negative direction). Try moving the sliders for
						both the displacement and the time to see how they
						interact.{" "}
						<strong className="font-bold">
							Note that if you travel further in a shorter amount
							of time, the magnitude of your velocity is
							increasing.
						</strong>{" "}
						This makes logical sense as we physically have to be
						moving faster in order to cover the same distance in
						less time.
					</p>
					<div className="w-full grid grid-cols-8 gap-8">
						<div className="col-span-1"></div>
						<div className="col-span-2">
							<div className="py-4 flex flex-col gap-2">
								<strong className="font-bold">
									Displacement
								</strong>
								<input
									id="displacement"
									min="-50"
									max="50"
									step="1"
									type="range"
									value={displacement}
									onChange={(e) =>
										setDisplacement(Number(e.target.value))
									}
									className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
								></input>
							</div>
							<div className="py-4 flex flex-col gap-2">
								<strong className="font-bold">Time</strong>
								<input
									id="time"
									type="range"
									min="1"
									max="25"
									step="1"
									value={time}
									onChange={(e) =>
										setTime(Number(e.target.value))
									}
									className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
								></input>
							</div>
						</div>
						<div className="flex col-span-5 justify-center gap-8">
							<div className="flex flex-col h-full justify-center text-2xl">
								<div className="py-4 w-full flex justify-center border-b-2 border-slate-500">
									{displacement} m
								</div>
								<div className="py-4 w-full flex justify-center">
									{time} s
								</div>
							</div>
							<div className="h-full flex items-center gap-6">
								<p className="text-3xl">=</p>
								<p className="text-5xl">{velocityAnswer} m/s</p>
							</div>
						</div>
					</div>
					<h3>Acceleration</h3>
					<p>
						However, this was a constant speed. Now imagine if our
						velocity was constantly increasing over that time. This
						is acceleration — our change in velocity over the total
						amount of time. In 2D Kinematics, we treat acceleration
						as constant. That is, the rate that our velocity is
						changing over a time interval will always be the same.
						Try moving the sliders for the velocity and time to see
						how they interact.{" "}
						<strong>
							Note that if your velocity changes more in a shorter
							amount of time, your acceleration will increase!
						</strong>{" "}
					</p>
					<div className="w-full grid grid-cols-8 gap-8">
						<div className="col-span-1"></div>
						<div className="col-span-2">
							<div className="py-4 flex flex-col gap-2">
								<strong className="font-bold">
									Velocity (&#916;v)
								</strong>
								<input
									id="velocity"
									min="-50"
									max="50"
									step="1"
									type="range"
									value={velocity}
									onChange={(e) =>
										setVelocity(Number(e.target.value))
									}
									className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
								></input>
							</div>
							<div className="py-4 flex flex-col gap-2">
								<strong className="font-bold">Time</strong>
								<input
									id="time2"
									type="range"
									min="1"
									max="25"
									step="1"
									value={time2}
									onChange={(e) =>
										setTime2(Number(e.target.value))
									}
									className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
								></input>
							</div>
						</div>
						<div className="flex col-span-5 justify-center gap-8">
							<div className="flex flex-col h-full justify-center text-2xl">
								<div className="py-4 w-full flex justify-center border-b-2 border-slate-500">
									{velocity} m/s
								</div>
								<div className="py-4 w-full flex justify-center">
									{time2} s
								</div>
							</div>
							<div className="h-full flex items-center gap-6">
								<p className="text-3xl">=</p>
								<p className="text-5xl">
									{accelerationAnswer} m/s<sup>2</sup>
								</p>
							</div>
						</div>
					</div>
					<h2>1D vs. 2D</h2>
					<p>
						Now, you’re probably thinking, that’s great — but
						where’s the two dimensions? Think of everything
						discussed so far: vectors have an x and y component, and
						displacement, velocity, and acceleration are all
						vectors. Therefore, we can solve problems relating to
						each one of these portions of kinematics if we simply{" "}
						<strong className="font-bold">
							break the problem down into the two dimensions and
							break every vector down into its components.
						</strong>
					</p>
					<p>
						Say we had some velocity (v) and some angle (&theta;)
						counterclockwise above the x-axis. How would we break
						this into its components? Again, it is important to
						remember our trigonometric rules. We have a right
						triangle, thus we can use the our sin, cos, and tan
						properties. Given that v is our hypotenuse, we can then
						apply these trigonometric ratios to derive the x and y
						components of v.
					</p>
					<div className="grid grid-cols-6 font-bold text-2xl gap-8 justify-items-center items-center">
						<div className="col-span-1"></div>
						<div className="col-span-2">
							v<sub>x</sub> = v * cos(&theta;){" "}
						</div>
						<div className="col-span-2">
							v<sub>y</sub> = v * sin(&theta;)
						</div>
						<div className="col-span-1"></div>
					</div>
					<p>
						Edit the angle (&theta;) for a set velocity of 50 m/s.
						Notice how these components change. Notice how when
						&theta; is 0&deg; our v<sub>y</sub> becomes 0. This is
						because we are moving horizontally! What do you think
						happens when &theta; is 90&deg;?
					</p>
					<div className="w-full flex flex-col items-center gap-2 pb-8">
						<strong className="font-bold">
							(&theta;) = {theta}&deg;
						</strong>
						<input
							id="displacement"
							min="0"
							max="90"
							step="1"
							type="range"
							value={theta}
							onChange={(e) => setTheta(Number(e.target.value))}
							className="h-2 w-1/4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
						></input>
					</div>
					<div className="grid grid-cols-6 font-bold text-2xl gap-8 justify-items-center items-center">
						<div className="col-span-1"></div>
						<div className="col-span-2">
							v<sub>x</sub> = {vx} m/s
						</div>
						<div className="col-span-2">
							v<sub>y</sub> = {vy} m/s
						</div>
						<div className="col-span-1"></div>
					</div>
					<h2>Translational vs. Rotational Motion</h2>
					<p>
						In two dimensional kinematics, there are two different
						paradigms to be aware of; however, they are extremely
						similar in equations and solving strategies.
					</p>
					<h3>Translational Motion</h3>
					<p>
						Translational motion simply refers to movement of an
						object where all parts are moving in the same direction.
						The object is not rotating. This could be compared to a
						person walking forward, a ball being thrown through the
						air, or a cannonball being shot off a wall.{" "}
						<strong className="font-bold">
							Here are our given equations for translational
							motion:
						</strong>
					</p>
					<div className="flex flex-col gap-4 items-center font-bold text-2xl">
						<div>
							x<sub>f</sub> = x<sub>0</sub> + v<sub>0</sub>t +
							(1/2)at<sup>2</sup>
						</div>
						<div>
							v<sub>f</sub> = v<sub>0</sub> + at
						</div>
						<div>
							v<sub>f</sub>
							<sup>2</sup> = v<sub>0</sub>
							<sup>2</sup> + 2a(x<sub>f</sub> - x<sub>0</sub>)
						</div>
					</div>
					<h3>Rotational Motion</h3>
					<p>
						Rotational motion is motion where the object is spinning
						about an axis. If we are moving around a circle, our
						displacement no longer relates to the distance that we
						traveled, but the difference in the angle of where we
						ended relative to where we started. This is angular
						displacement. This then applies to our velocity and
						acceleration as we move around a circle. Again, this
						makes sense. If we are constantly moving around a circle
						faster and faster, then the amount the angle is changing
						in the same amount of time is becoming larger and
						larger. Additionally, although slightly confusing, the
						velocity in rotational motion is tangent to the circular
						path, while centripetal acceleration is always pointing
						toward the center of the circle and keeping us locked
						into that circular path. This can be confusing because
						even if we are moving at a constant speed, we have
						acceleration as the direction and thus components of the
						centripetal acceleration vector are always changing.{" "}
						<strong>
							Here are our given equations for rotational motion.
						</strong>
					</p>
					<div className="flex flex-col gap-4 items-center font-bold text-2xl">
						<div>
							&theta;<sub>f</sub> = &theta;<sub>0</sub> + &omega;
							<sub>0</sub>t + (1/2)&alpha;t<sup>2</sup>
						</div>
						<div>
							&omega;<sub>f</sub> = &omega;<sub>0</sub> + &alpha;t
						</div>
						<div>
							&omega;<sub>f</sub>
							<sup>2</sup> = &omega;<sub>0</sub>
							<sup>2</sup> + 2&alpha;(&theta;<sub>f</sub> -
							&theta;<sub>0</sub>)
						</div>
					</div>
					<h2>Projectile Motion</h2>
					<p>
						Projectile motion is frequently discussed when talking
						about 2D Kinematics as it is simply the motion of an
						object that is launched into the air and is ONLY
						influenced by gravity. Therefore, there is no
						acceleration in the x direction if we ignore air
						resistance. What does this mean? If we ignored air
						resistance, what do you think would happen if we threw a
						baseball exactly horizontal at the same time that we
						dropped a baseball from our hand?
					</p>
					<h2>Final Example Problem</h2>
					<h3>Key Information To Remember</h3>
					<ul>
						<li>
							Vectors have both vertical and horizontal
							components.
						</li>
						<li>
							Displacement, velocity, and acceleration are all
							vectors.
						</li>
						<li>
							Thus, when we are solving for a certain parameter in
							our 2D Kinematics equations, we must view the
							problem in two different dimensions and break all
							vectors into their components.
						</li>
						<li>
							Remember, all the information might not be
							necessarily given to us, as in the example above. We
							have to remember that our object is only subject to
							gravity for acceleration (denoted by g).
						</li>
						<li>
							Based on the information given to us in the problem,
							we can solve for another variable that we need to
							find.
						</li>
					</ul>
					<h2>Conclusion</h2>
					<p>
						In this interactive paper/article I discussed what
						vectors are, how to break them into their components,
						and how this relates to displacement, velocity, and
						acceleration — as these are all vectors themselves.
						Therefore, when solving 2D Kinematics problems, we must
						break every vector into its components when solving for
						a certain parameter. I also described the difference
						between translational and rotational motion and some
						confusing aspects of mainly rotational motion such as
						centripetal acceleration. Finally, I explained the
						concept of projectile motion and solved an original
						example problem where you could check your answer
						through an interactive slider.
					</p>
					<p>
						I hope you enjoyed clicking through the different
						interactive elements I had on the page to test your
						knowledge on various concepts. I chose 2D Kinematics /
						Projectile Motion because I thought it was incredibly
						interesting when we learned how you could throw
						something horizontally as well as drop something at the
						same time and they would hit the ground simultaneously.
						I also found that when I truly understood what
						displacement, velocity, and acceleration were really
						comprised of — I better understood all the material that
						followed.
					</p>
					<p>
						Here’s the{" "}
						<Link
							href={
								"https://github.com/jaxonhill/physics1-final-project"
							}
						>
							Open Source Code Repository
						</Link>{" "}
						for the project I made with TypeScript, Tailwind, and
						Next.js.
					</p>
				</main>
			</article>
		</>
	);
}
