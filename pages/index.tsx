import { Inter } from "next/font/google";
import Link from "next/link";
import { NextFont } from "next/dist/compiled/@next/font";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import StepBlock from "@/components/StepBlock";

// If loading a variable font, you don't need to specify the font weight
const inter: NextFont = Inter({ subsets: ["latin"] });

function toRadians(angle: number): number {
	return angle * (Math.PI / 180);
}

const stepsToSolve: JSX.Element[] = [
	<div className="flex flex-col gap-4">
		<div>
			<strong>
				1. Identify what we need to solve for using kinematic equations.
			</strong>
		</div>
		<div>
			We will need to solve for x<sub>f</sub> in this case to find how far
			the cannon ball will travel. Remember what we stated about 2D
			Kinematics: we must make our velocity our v<sub>0x</sub> velocity,
			not just v<sub>0</sub>.
		</div>
		<div className="flex justify-center items-center text-xl">
			x<sub>f</sub> = x<sub>0</sub> + v<sub>0x</sub>t + (1/2)a<sub>x</sub>
			t<sup>2</sup>
		</div>
	</div>,
	<div className="flex flex-col gap-4">
		<div>
			<strong>
				2. Simplify the equation by removing unncessary values.
			</strong>
		</div>
		<div>
			We can now just cancel some of these terms out, as they are zero.
			Remember,{" "}
			<strong>
				our acceleration in the x direction will be ZERO as only gravity
				is acting on this object.
			</strong>{" "}
			Also, our x<sub>0</sub> is just 0 as that is where the cannon ball
			is starting from. Now we should have this equation:
		</div>
		<div className="flex justify-center items-center text-xl">
			x<sub>f</sub> = v<sub>0x</sub>t
		</div>
	</div>,
	<div className="flex flex-col gap-4">
		<div>
			<strong>
				3. Find another kinematic equation to solve for t using the
				variables we already know from the problem.
			</strong>
		</div>
		<div className="flex justify-center items-center text-xl">
			y<sub>f</sub> = y<sub>0</sub> + v<sub>0y</sub>t + (1/2)a<sub>y</sub>
			t<sup>2</sup>
		</div>
	</div>,
	<div className="flex flex-col gap-4">
		<div>
			<strong>
				4. Simplify the equation, and plug in tangible numbers.
			</strong>
		</div>
		<div>
			It's important to remember what we stated earlier about breaking the
			velocity vector into it's components. We need the v<sub>0y</sub>{" "}
			component.{" "}
			<strong>
				We can retrieve this through utilizing the trigonometric ratios
				to find that our v<sub>0y</sub> is 20 * sin(30&deg;).
			</strong>{" "}
			We also know that our y<sub>0</sub> is 100 meters in the air. Our
			acceleration in the y direction is only created through
			gravitational force, so our a<sub>y</sub> is just -g (as we are
			accelerating downwards due to gravity).
		</div>
		<div className="flex justify-center items-center text-xl">
			0 = 100 + 20*sin(30&deg;)t - (1/2)(9.8)t<sup>2</sup>
		</div>
		<div className="flex justify-center items-center text-xl">
			-4.9t<sup>2</sup> + 10t + 100 = 0
		</div>
	</div>,
	<div className="flex flex-col gap-4">
		<div>
			<strong>5. Use the quadratic equation to solve for t.</strong>
		</div>
		<div className="flex justify-center items-center text-xl">
			(-10 +/- sqrt((-10)<sup>2</sup> - 4(-4.9)(100))) / (2(-4.9))
		</div>
		<div className="flex justify-center items-center text-xl">
			(-10 +/- 45.39) / -9.8
		</div>
		<div>
			We should choose the - sign, as the + sign will get us an overall
			negative value and it is impossible to have negative time.
		</div>
		<div className="flex justify-center items-center text-xl">
			-55.39 / -9.8 = 5.65
		</div>
		<div className="flex justify-center items-center text-xl">
			t = 5.65 s
		</div>
	</div>,
	<div className="flex flex-col gap-4">
		<div>
			<strong>
				6. Plug in t and v<sub>0x</sub> to find x<sub>f</sub>.
			</strong>
		</div>
		<div className="flex justify-center items-center text-xl">
			x<sub>f</sub> = (20)*cos(30&deg;)*(5.65)
		</div>
		<div className="flex justify-center items-center text-xl">
			x<sub>f</sub> = 97.86 m
		</div>
	</div>,
	<div className="flex flex-col gap-4">
		<div>
			<strong>
				7. Reason the answer to the actual question using logic.
			</strong>
		</div>
		<div>
			Will we hit the ship? Well, if the cannon ball will travel ~98 m and
			the ship's middle point was 100 meters from the wall with a total
			ship length of 10 meters; then our range must be between 95 m and
			105 m to successfully hit the ship.
		</div>
		<div>
			<strong>
				Since our x<sub>f</sub> was 98 m:{" "}
				<span className="text-emerald-500">
					Yes, we will hit the ship towards its frontside. We will
					save the city!
				</span>
			</strong>
		</div>
	</div>,
];

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
			<Head>
				<title>2D Kinematics by Jaxon Hill</title>
			</Head>
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
							introducing vectors, displacement, velocity, and
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
						Two dimensional kinematics is a key concept in Physics
						that describes the motion of an object in,
						unsurprisingly, two dimensions. Through understanding 2D
						Kinematics as physicists, we can better understand how
						objects will move in a two dimensional space based on
						certain information that is provided to us in a problem.
						This becomes useful information as we delve further into
						the world of physics when discussing forces, Newton’s
						2nd Law, different types of energy, momentum, etc. It
						cannot be understated of how a solid grasp on 2D
						Kinematics can further reinforce everything else we
						learn about physics. This interactive web page will
						serve as an overview and review of 2D Kinematics and
						will describe the conclusions we can draw through
						completing problems relating to it.
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
						vectors. This is actually quite straightforward. Let's
						say there's a vector pointing in the positive x
						direction and a vector pointing in the positive y
						direction, then we can simply add these two vectors
						through a method known as the “tip to tail” method. If
						we were adding vectors A and B, then we would put B’s
						tail on A’s tip and draw the resultant vector from A’s
						tail to B’s tip. When subtracting vectors, this is
						equivalent to just adding a negative vector. To create a
						negative vector, simply flip the direction of the vector
						and then perform the same "tip to tail" method to add
						the two vectors.
						<br />
						<br />
						This knowledge also forms the basis of vector
						components. If there is a vector pointing 45&deg; above
						the x axis, then we can just say that this is also two
						vectors that have been added together -- an x and a y
						component. We will cover how to use trigonometry to
						determine the components of a vector later, but this is
						a crucial part of solving problems in Physics as objects
						rarely move in perfectly horizontal or vertical paths.
					</p>
					<h2>Displacement, Velocity, and Acceleration</h2>
					<h3>Displacement</h3>
					<p>
						Displacement, velocity, and acceleration are the key
						elements we will manipulate when solving 2D Kinematics
						problems. These are ALL vectors. How? Well, we already
						looked at displacement earlier such as when we said “10
						meters to the west.” This basic description contains
						both a magnitude (10 m) and a direction (west).{" "}
						<strong className="font-bold">
							Displacement is the shortest distance from the
							starting position to the final position.
						</strong>
					</p>
					<h3>Velocity</h3>
					<p>
						How long did it take us to achieve that displacement?
						This would describe our velocity. Say we walked 10
						meters to the west in 10 seconds (with no twists or
						turns). If we divide 10 meters by 10 seconds, we are
						traveling at -1 m/s. How can velocity be negative? If
						you are confused, this perplexed me at first as well,
						but remember what we know is true about vectors. They
						have both a magnitude and direction. In this case our
						direction is to the left or in the negative direction,
						and our magnitude is 10 m/s. Velocity is often confused
						for speed, but speed is just the magnitude of velocity
						and is a scalar value while velocity is a vector. In the
						context of the problem, it is crucial to understand that
						we have traveled 10 meters to the left (the negative
						direction).{" "}
						<strong className="text-blue-500">
							Try moving the sliders to understand the
							relationship between displacement and time and how
							they relate to average velocity.{" "}
						</strong>
						<strong className="font-bold">
							Note that if you travel further in the same amount
							or a shorter amount of time, the magnitude of your
							average velocity is increasing.
						</strong>{" "}
						This makes logical sense as we physically would have had
						to move faster in order to cover the same distance in
						equal or less time.
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
						as constant. That is, the rate at which our velocity is
						changing over a time interval will always be the same.{" "}
						<strong>
							Note that if our change in velocity (&#916;v) is
							greater in the same amount or shorter amount of
							time, our acceleration will increase!
						</strong>{" "}
						<strong className="text-blue-500">
							Try moving the sliders for the velocity and time to
							see how they interact with our average acceleration.{" "}
						</strong>
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
						remember our trigonometric rules and what we know is
						true about vectors. We have a right triangle, thus we
						can use the sin, cos, and tan properties. Given that v
						is our hypotenuse of the triangle with the y component
						vector as the opposite side and the x component vector
						as the adjacent side, we can then apply these
						trigonometric ratios to derive the x and y components of
						v.
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
						<strong className="text-blue-500">
							Try to edit the angle (&theta;) for a set velocity
							of 50 m/s.{" "}
						</strong>
						Notice how these components change. Notice how when
						&theta; is 0&deg; our v<sub>y</sub> becomes 0.{" "}
						<strong>
							This is because we are moving horizontally!
						</strong>{" "}
						What do you think happens when &theta; is 90&deg;?
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
					<h2>Projectile Motion</h2>
					<p>
						Projectile motion is frequently discussed when talking
						about 2D Kinematics as it is simply the motion of an
						object that is launched into the air and is ONLY
						influenced by gravity. Thus, the projectile is in free
						fall. Think of a ball being thrown in the air or a
						cannon ball shooting off from a hill. There is no
						acceleration in the x direction if we ignore air
						resistance. What does this mean? If we ignored air
						resistance, what do you think would happen if we threw a
						baseball exactly horizontal at the same time that we
						dropped a baseball from our hand?{" "}
					</p>
					<p>
						<strong>
							They would hit the ground at the exact same time.
						</strong>{" "}
						Both objects are only under the influence of gravity in
						the y direction.{" "}
						<strong>
							Our kinematic equations for projectile motion are
							below, however, remember the key points about
							vectors and 2 dimensions: each equation should be
							broken into components (x is just used as an
							example).
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
					<h2>Circular Motion</h2>
					<h3>Uniform Circular Motion</h3>
					<p>
						Uniform Circular motion is motion where the object is
						spinning about an axis at a constant speed.{" "}
						<strong>
							If we are moving around a circle, our displacement
							no longer relates to the distance that we traveled
							such as in linear or projectile motion, but the
							difference in the angle of where we ended relative
							to where we started. This is angular displacement
							(measured in radians).{" "}
						</strong>{" "}
						This then applies to our velocity and acceleration as we
						move around a circle. Our average angular velocity can
						be found similar to the methods before, but with our new
						angular displacement instead. It is simply the angular
						displacement over the change in time now. Additionally,
						although slightly confusing, the velocity in rotational
						motion is tangent to the circular path. How do we stay
						in a circle then? We are able to stay on a circular path
						due to Centripetal Acceleration. Centripetal
						Acceleration roughly translates to "center seeking,"
						implying that our acceleration is always a vector that
						points toward the center of the circle; thus, if we have
						a velocity vector that is tangent to the circle but a
						centripetal acceleration, it is clear to see how we move
						in a circular path because our velocity vector is
						essentially constantly changing direction. However, this
						can be confusing because even if we are moving at a
						constant <em>speed</em>, we technically do have
						acceleration because the direction of the centripetal
						acceleration vector is always changing to point toward
						the center of the circle. We may even technically have
						"negative acceleration," but in the case of uniform
						circular motion, this does not necessarily mean we are
						slowing down.
					</p>
					<h3>Nonuniform Circular Motion</h3>
					<p>
						Nonuniform Circular Motion is simply circular motion
						with a changing speed -- thus there is angular
						acceleration. Again, our acceleration is now simply just
						the change in angular velocity over the change in time.
						However, if we ALWAYS have centripetal acceleration in
						circular motion problems, then what is this new
						acceleration?{" "}
						<strong>
							This acceleration is simply our tangential
							acceleration, the vector is tangent to the curve.
						</strong>{" "}
						However, something interesting happens here. Recall what
						we know is true about vectors -- they have components.
						Therefore, because we now have two accelerations,
						centripetal and tangential, our acceleration vector no
						longer points directly toward the center of the circle
						as it did in uniform circular motion. We must use
						Pythagorean theorem to find our actual acceleration.
					</p>
					<p>
						{" "}
						<strong>
							Here are our given equations for circular motion.
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
							necessarily given to us. We will sometimes have to
							remember pieces of information, such as the fact
							that our object is only subject to gravity in terms
							of acceleration (denoted by g).
						</li>
						<li>
							Based on the information given to us in the problem,
							we can solve for another variable that we need to
							find.
						</li>
					</ul>
					<h3>The Problem</h3>
					<div className="pb-8">
						Your city is under siege by a fleet of pirate ships!
						Your defenses are running low on cannonballs, so you
						need to ensure that every shot is a guaranteed hit. Your
						cannons shoot off from a wall that is 100 meters high.
						The cannons shoot the cannon balls at a velocity of 20
						m/s at 30&deg; counter clockwise from the horizontal. If
						a pirate ship is 10 meters long who's center point is
						100 meters from the wall, will you hit a part of the
						ship? Reference the drawing below.
						<div className="w-full flex justify-center items-center">
							<Image
								src={"/physics1-project-image1.png"}
								alt="Problem drawn out, if you are seeing this the image failed to load"
								width={500}
								height={500}
								className="rounded-2xl shadow-md"
							></Image>
						</div>
						<strong>Click on the steps to see my work.</strong>
					</div>
					<div className="flex flex-col gap-16">
						{stepsToSolve.map(
							(step: JSX.Element, index: number) => {
								return (
									<StepBlock
										key={index}
										stepNumber={index + 1}
									>
										{step}
									</StepBlock>
								);
							}
						)}
					</div>
					<h2>Conclusion</h2>
					<p>
						In this interactive paper/article I discussed what
						vectors are, how to break them into their components,
						and how this relates to displacement, velocity, and
						acceleration — as these are all vectors themselves.
						Therefore, when solving 2D Kinematics problems, we must
						break every vector into its components when solving for
						a certain parameter. I also described the difference
						between projectile and circular motion and some
						confusing aspects of mainly circular motion such as
						centripetal acceleration. Finally, I further explained
						the concept of projectile motion through solving an
						original example problem where you could check your
						answer and work by clicking through the steps of the
						problem.
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
						for the project. I made this with TypeScript, Tailwind,
						and Next.js (web programming libraries).
					</p>
				</main>
			</article>
		</>
	);
}
