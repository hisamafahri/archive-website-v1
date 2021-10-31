import Header from "../components/Head";
import { useState } from "react";

function About() {
  const [drawer, setDrawer] = useState("hidden");

  return (
    <div>
      <Header title="About" />
      <div className="bg-hisam-blue md:grid-rows-2 flex flex-row 2xl:w-3/4 2xl:mx-auto">
        <div className="hidden md:inline">
          <div className="ml-16 mt-32">
            <div className="ml-2 mt-0">
              <a href="/" className="">
                <h3 className="font-serif text-white font-normal text-base transition duration-500 ease-in-out transform hover:translate-x-3">
                  Home
                </h3>
              </a>
            </div>
            <div className="ml-2 mt-24">
              <a href="/about" className="">
                <h3 className="font-serif text-white font-normal text-base transition duration-500 ease-in-out transform hover:translate-x-3">
                  About
                </h3>
              </a>
            </div>
            <div className="ml-2 mt-24">
              <a href="/works" className="">
                <h3 className="font-serif text-white font-normal text-base transition duration-500 ease-in-out transform hover:translate-x-3">
                  Works
                </h3>
              </a>
            </div>
            <div className="ml-2 mt-24">
              <a href="/contact" className="">
                <h3 className="font-serif text-white font-normal text-base transition duration-500 ease-in-out transform hover:translate-x-3">
                  Contact
                </h3>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex w-full pl-16 pt-16">
            <div className="p-6 pl-0 md:hidden">
              <button
                onClick={() => {
                  if (drawer == "hidden") {
                    setDrawer("block");
                  } else {
                    setDrawer("hidden");
                  }
                }}
              >
                <img className="h-6" src="/burger.svg" alt="Burger Icon" />
              </button>
            </div>
            <div className="items-stretch justify-end ml-auto pr-16">
              <a href="/">
                <img
                  className="h-10 lg:h-14 m-4"
                  src="/logo.svg"
                  alt="Hisam's Logo"
                />
              </a>
            </div>
          </div>

          <div id="myLinks" className={drawer}>
            <div className="bg-hisam-green w-full p-16 mt-12">
              <div className="ml-2 mt-0">
                <a href="/" className="">
                  <h3 className="font-serif text-hisam-blue font-black text-3xl transition duration-500 ease-in-out transform hover:translate-x-3">
                    Home
                  </h3>
                </a>
              </div>
              <div className="ml-2 mt-24">
                <a href="/about" className="">
                  <h3 className="font-serif text-hisam-blue font-black text-3xl transition duration-500 ease-in-out transform hover:translate-x-3">
                    About
                  </h3>
                </a>
              </div>
              <div className="ml-2 mt-24">
                <a href="/works" className="">
                  <h3 className="font-serif text-hisam-blue font-black text-3xl transition duration-500 ease-in-out transform hover:translate-x-3">
                    Works
                  </h3>
                </a>
              </div>
              <div className="ml-2 mt-24">
                <a href="/contact" className="">
                  <h3 className="font-serif text-hisam-blue font-black text-3xl transition duration-500 ease-in-out transform hover:translate-x-3">
                    Contact
                  </h3>
                </a>
              </div>
            </div>
          </div>

          <div className="pl-16 pr-16 md:pl-36 lg:pl-48 lg:pr-0 w-11/12 mt-20">
            <h1 className="text-6xl lg:text-8xl font-serif font-black text-white leading-normal lg:leading-loose">
              About Me
            </h1>
          </div>

          <div className="my-24 md:pl-36 lg:pl-48">
            <img className="w-full" src="/profile.jpeg" alt="My image" />
          </div>
          <div className="mb-48 pl-16 md:pl-36 lg:pl-48 pr-16 lg:grid-rows-2 lg:flex lg:flex-row">
            <div className="mt-28 lg:w-1/2 lg:pr-12">
              <p className="text-white font-mono">
                Born and raised in Indonesia, made me believe that this world is
                HUGE, but also have a HUGE amount of problems to solve. Every
                single I am wondering,{" "}
                <a className="italic">
                  "What should I do to bring meaningful impact to other peoples
                  live, today?"
                </a>
              </p>
            </div>

            <div className="mt-20 lg:mt-28 lg:w-1/2 lg:pr-12">
              <p className="text-white font-mono">
                With those spirit in mind, every single day, I am trying to
                learn, understand, and help solving --not just mine, bu also
                other peoples-- problems.
                <br />
                <br />
                My works focuses on three things:{" "}
                <a className="font-bold">works great</a>,{" "}
                <a className="font-bold">looks beautiful</a>, and{" "}
                <a className="font-bold">beneficial</a>.
              </p>
            </div>
          </div>

          <div className="h-24 flex pb-16 mt-72 pl-16 pr-16 md:pl-36 lg:pl-48">
            <p className="text-white font-mono m-auto text-center">
              (c) <span id="year">2021</span> Hisam A Fahri. &lt;/&gt; with
              &lt;3 on Earth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
