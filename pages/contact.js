
import Header from "../components/Head";
import { useState } from "react";

function Contact() {
  const [drawer, setDrawer] = useState("hidden");

  return (
    <div>
      <Header title="Contact Me" />
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
            {/* <div className="items-stretch justify-end ml-auto pr-16">
              <a href="/">
                <img
                  className="h-10 lg:h-14 m-4"
                  src="/logo.svg"
                  alt="Hisam's Logo"
                />
              </a>
            </div> */}
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

<div >
          <div className="pl-16 pr-16 md:pl-36 lg:pl-48 lg:pr-0 w-11/12 mt-20">
            <h1 className="text-6xl lg:text-8xl font-serif font-black text-white leading-normal lg:leading-loose ">
              Contact Me
            </h1>
          </div>



          <div className="mb-48 pl-16 md:pl-36 lg:pl-48 pr-16 md:grid-rows-2 md:flex md:flex-row md:auto-rows-max lg:grid-rows-2 lg:flex lg:flex-row lg:auto-rows-max ">
            <div className="mt-20 lg:mt-28 lg:w-1/2 lg:pr-12">
              <div className="pr-16">
                <div className="mt-20">
                  <p className="text-white font-mono font-bold text-xl">
                    <a
                      className="myUnderline hover:bg-hisam-green hover:text-hisam-blue hover:no-underline leading-loose"
                      href="https://instagram.com/hisamafahri"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </p>
                  <p className="text-white font-mono text-sm mt-5">
                    @hisamafahri
                  </p>
                </div>
              </div>

              <div className="pr-16">
                <div className="mt-20">
                  <p className="text-white font-mono font-bold text-xl">
                    <a
                      className="myUnderline hover:bg-hisam-green hover:text-hisam-blue hover:no-underline leading-loose"
                      href="https://twitter.com/hisamafahri"
                      target="_blank"
                    >
                      Twitter
                    </a>
                  </p>
                  <p className="text-white font-mono text-sm mt-5">
                    @hisamafahri
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
                      GitHub
                    </a>
                  </p>
                  <p className="text-white font-mono text-sm mt-5">
                    /hisamafahri
                  </p>
                </div>
              </div>

              <div className="pr-16">
                <div className="mt-20">
                  <p className="text-white font-mono font-bold text-xl">
                    <a
                      className="myUnderline hover:bg-hisam-green hover:text-hisam-blue hover:no-underline leading-loose"
                      href="https://stackoverflow.com/users/13540349/hisam"
                      target="_blank"
                    >
                      StackOverflow
                    </a>
                  </p>
                  <p className="text-white font-mono text-sm mt-5">
                    /users/13540349/hisam
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 lg:mt-28 lg:w-1/2 lg:pr-12">
              <div className="pr-16">
                <div className="mt-20">
                  <p className="text-white font-mono font-bold text-xl">
                    <a
                      className="myUnderline hover:bg-hisam-green hover:text-hisam-blue hover:no-underline leading-loose"
                      href="https://dribbble.com/hisamafahri"
                      target="_blank"
                    >
                      Dribbble
                    </a>
                  </p>
                  <p className="text-white font-mono text-sm mt-5">
                    /hisamafahri
                  </p>
                </div>
              </div>

              <div className="pr-16">
                <div className="mt-20">
                  <p className="text-white font-mono font-bold text-xl">
                    <a
                      className="myUnderline hover:bg-hisam-green hover:text-hisam-blue hover:no-underline leading-loose"
                      href="https://behance.net/hisamafahri"
                      target="_blank"
                    >
                      Behance
                    </a>
                  </p>
                  <p className="text-white font-mono text-sm mt-5">
                    /hisamafahri
                  </p>
                </div>
              </div>

              <div className="pr-16">
                <div className="mt-20">
                  <p className="text-white font-mono font-bold text-xl">
                    <a
                      className="myUnderline hover:bg-hisam-green hover:text-hisam-blue hover:no-underline leading-loose"
                      href="mailto:hisamafahri@gmail.com"
                      target="_blank"
                    >
                      Email
                    </a>
                  </p>
                  <p className="text-white font-mono text-sm mt-5">
                    hisamafahri@gmail.com
                  </p>
                </div>
              </div>
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

export default Contact;
