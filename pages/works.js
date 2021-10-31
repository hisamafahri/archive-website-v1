import Header from "../components/Head";
import { useState } from "react";

function Works() {
  const [drawer, setDrawer] = useState("hidden");

  return (
    <div>
      <Header title="Works" />
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
              Works
            </h1>
          </div>

          <div className="pl-16 pr-16 md:pl-36 md:pr-36 lg:pl-48 md:pr-48">
          <div className="pr-16">
              <div className="mt-20">
                <p className="text-white font-mono font-bold text-xl">
                  <a
                    className="myUnderline hover:bg-hisam-green hover:text-hisam-blue hover:no-underline leading-loose"
                    href="https://editr.hisamafahri.com"
                    target="_blank"
                  >
                    Editr
                  </a>
                </p>
                <p className="text-white font-mono text-sm mt-5">
                  Another simple rich text editor. Built using Next.js and Slate.
                </p>
              </div>
            </div>

            <div className="pr-16">
              <div className="mt-20">
                <p className="text-white font-mono font-bold text-xl">
                  <a
                    className="myUnderline hover:bg-hisam-green hover:text-hisam-blue hover:no-underline leading-loose"
                    href="https://relectr.com"
                    target="_blank"
                  >
                    TNKB
                  </a>
                </p>
                <p className="text-white font-mono text-sm mt-5">
                  An NPM package to validate and decode Indonesian's vehicle's plate/registration number.
                </p>
              </div>
            </div>

            <div className="pr-16">
              <div className="mt-28">
                <p className="text-white font-mono font-bold text-xl">
                  <a
                    className="myUnderline hover:bg-hisam-green hover:text-hisam-blue hover:no-underline leading-loose"
                    href="https://github.com/hisamafahri/sandisam"
                    target="_blank"
                  >
                    SandiSam - Personal Password Manager for Mobile
                  </a>
                </p>
                <p className="text-white font-mono text-sm mt-5">
                  Build on top of Dart programming language, and Flutter
                  framework make it compatible with android and iOS.
                </p>
              </div>
            </div>

            <div className="pr-16">
              <div className="mt-20">
                <p className="text-white font-mono font-bold text-xl">
                  <a
                    className="myUnderline hover:bg-hisam-green hover:text-hisam-blue hover:no-underline leading-loose"
                    href="https://relectr.com"
                    target="_blank"
                  >
                    Relectr
                  </a>
                </p>
                <p className="text-white font-mono text-sm mt-5">
                  Tools to help teacher and lecturers to get works done!
                </p>
              </div>
            </div>

            <div className="pr-16">
              <div className="mt-20">
                <p className="text-white font-mono font-bold text-xl">
                  <a
                    className="myUnderline hover:bg-hisam-green hover:text-hisam-blue hover:no-underline leading-loose"
                    href="https://hisamafahri.com"
                    target="_blank"
                  >
                    Hisam's Personal Website
                  </a>
                </p>
                <p className="text-white font-mono text-sm mt-5">
                  Designed with Figma, and created with TailwindCSS and
                  accompanied with NextJS.
                </p>
              </div>
            </div>

            <div className="pr-16">
              <div className="mt-20">
                <p className="text-white font-mono font-bold text-xl">
                  <a
                    className="myUnderline hover:bg-hisam-green hover:text-hisam-blue hover:no-underline leading-loose"
                    href="https://github.com/hisamafahri/Ask-Mee"
                    target="_blank"
                  >
                    Ask-Mee
                  </a>
                </p>
                <p className="text-white font-mono text-sm mt-5">
                  A simple desicion making app, inspired by Angela Yu's Flutter
                  Project. Build wih Dart programming language and Flutter.
                </p>
              </div>
            </div>

            <div className="pr-16">
              <div className="mt-20">
                <p className="text-white font-mono font-bold text-xl">
                  <a
                    className="myUnderline hover:bg-hisam-green hover:text-hisam-blue hover:no-underline leading-loose"
                    href="https://www.behance.net/gallery/106137831/kitalulus-Rebranding-Concept"
                    target="_blank"
                  >
                    KitaLulus Redesign Concept
                  </a>
                </p>
                <p className="text-white font-mono text-sm mt-5">
                  Logo redesign and rebranding concept for KitaLulus
                </p>
              </div>
            </div>

            <div className="pr-16">
              <div className="mt-20">
                <p className="text-white font-mono font-bold text-xl">
                  <a
                    className="myUnderline hover:bg-hisam-green hover:text-hisam-blue hover:no-underline leading-loose"
                    href="https://github.com/hisamafahri"
                    target="_blank"
                  >
                    [Under Development] Unila Maps
                  </a>
                </p>
                <p className="text-white font-mono text-sm mt-5">
                  Designed with Figma, and created with with Dart programming
                  language, an app for directions in University of Lampung area.
                </p>
              </div>
            </div>

            <div className="pr-16">
              <div className="my-20">
                <p className="text-white font-mono font-bold text-xl">
                  More Soon...
                </p>
              </div>
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

export default Works;
