import { Inter } from "next/font/google";
import Link from "next/link";
import { NextFont } from "@next/font";

// If loading a variable font, you don't need to specify the font weight
const inter: NextFont = Inter({ subsets: ["latin"] });

export default function Home(): JSX.Element {
	return (
		<>
			<article
				className={`mx-auto w-full max-w-3xl my-16 ${inter.className}`}
			>
				<div className="bg-slate-800 p-8 mb-12 flex flex-col gap-2 rounded-2xl">
					<h2 className="text-5xl text-white font-bold">
						2D Kinematics
					</h2>
					<p className="text-slate-200">By Jaxon Hill</p>
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
						west in 10 seconds (with no twists or turns, it was just
						displacement). If we divide 10 meters by 10 seconds, we
						are traveling at -1 m/s. This perplexed me at first, but
						remember what we stated about vectors. In the context of
						the problem, it is crucial to understand that we have
						gone 10 meters to the left (the negative direction). Try
						moving the sliders for both the displacement and the
						time to see how they interact.{" "}
						<strong className="font-bold">
							Note that if you travel further in a shorter amount
							of time, the magnitude of your velocity is getting
							bigger and bigger.
						</strong>{" "}
						This makes logical sense as we physically have to be
						moving faster in order to cover the same distance in
						less time.
					</p>
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
					<h2>1D vs. 2D</h2>
					<p>
						Now, you’re probably thinking, that’s great — but
						where’s the two dimensions? Think of everything
						discussed so far: vectors have an x and y component, and
						displacement, velocity, and acceleration are all
						vectors. Therefore, we can solve problems relating to
						each one of these portions of kinematics if we simply
						<strong className="font-bold">
							break the problem down into the two dimensions and
							break every vector down into its components.
						</strong>
					</p>
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
						air, or a cannonball being shot off a wall.
					</p>
					<img src="" alt="" />
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
						centripetal acceleration vector are always changing.
					</p>
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
