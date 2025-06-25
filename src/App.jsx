import React, { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/Accordion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [showMain, setShowMain] = useState(false);
  const mainContentRef = useRef(null);

  useGSAP(() => {
        const heroSplit = new SplitText(".title" , {type: 'chars, words'}   )


         gsap.from(heroSplit.chars, {
            yPercent: 1000,
            duration: 2,
            ease: "expo.out",
            stagger: 0.1,
            onComplete: () => {
              gsap.to(".title", {
                opacity: 0,
                duration: 1,
                ease: "power2.out",
              }),
              setShowMain(true);
            },
        })

    
  }, []);

  useEffect(() => {
  if (showMain && mainContentRef.current) {
    gsap.from(mainContentRef.current.children, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    });
  }
}, [showMain]);

  return (
    <main className="min-h-screen bg-[#5e4113] p-4 font-serif relative overflow-hidden">
      {!showMain ? (
        <div className="flex items-center justify-center h-[90vh]">
          <h1 className="title  text-8xl md:text-[20vw] leading-none font-bold text-[#e7c47d]">Ugochi</h1>
        </div>
      ) : (
        <div ref={mainContentRef} >
          <div className="flex items-center justify-center mb-4 bg-[#6F6134] p-4 rounded-3xl h-[8vh] transition-opacity duration-700">
            <div className=" text-4xl tracking-wider font-normal title text-[#e7c47d] text-center">
              Ugochi
            </div>
          </div>

          <div className="flex flex-col lg:flex-row relative gap-4">
            <div className="lg:w-[65vw] gap-4 relative flex flex-col">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Animated Image Div */}
                {/* Only show the rest of the hero if showMain is true */}
                <div
                  className={`lg:w-2/3 bg-[#6F6134] text-[#e7c47d] h-[45vh] rounded-3xl flex flex-col justify-end transition-opacity duration-700 `}
                >
                  <p className="p-4 text-2xl lg:text-4xl lg:mr-28 pb-6">
                    Let&apos;s create beautiful and responsive websites for you.{" "}
                    <i>You'd love it.</i>
                  </p>
                </div>
                <div
                  id="image"
                  className="bg-[#e7c47d] h-[45vh] rounded-3xl overflow-hidden transition-all duration-1000 relative lg:w-1/3  "
                >
                  {/* Optional: Add your image here */}
                  {/* <img src='/me.jpg' alt='me' className='bg-cover w-full h-full transition-transform duration-1000 hover:scale-105 overflow-hidden' /> */}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="lg:w-1/2 bg-[#6F6134] h-[60vh] lg:h-[38vh] rounded-3xl flex flex-col justify-end">
                  <p className="p-4 text-lg lg:text-sm text-[#e7c47d] lg:mr-8">
                    Ugochi is a passionate software developer, acclaimed for
                    creating and building pixel perfect websites with great
                    expertise and up-to-date skills. Based in Nigeria, he crafts
                    personalized websites that gives you, your brand or your
                    product the pride that it deserves in the digital world.
                  </p>
                </div>
                <div className="lg:w-1/2 bg-[#e7c47d] h-[38vh] rounded-3xl hidden lg:flex flex-col justify-between p-4">
                  <div className="flex flex-row justify-between text-[#6F6134] items-center gap-2 pt-6 mr-8">
                    <p className="line-clamp-2 text-lg">Have some questions?</p>
                    {/* <MdOutlineArrowOutward size={26} />*/}
                  </div>
                  <p className="text-5xl text-[#6F6134] pb-5">
                    Contact <i>me</i>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-[35vw] flex flex-col gap-4">
              <div className=" bg-[#6F6134] h-[75vh] rounded-3xl text-[#e7c47d] flex flex-col justify-between p-4 overflow-scroll scrollbar-hide ">
                <Accordion>
                  <AccordionItem value="one">
                    <AccordionTrigger value="one">
                      Velvet Pour
                    </AccordionTrigger>
                    <AccordionContent value="one">
                      <a className="cursor-pointer" href="https://gsap-drink-psi.vercel.app" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/mojito.png"
                        alt="keep"
                        className="w-full h-full object-cover  overflow-hidden rounded-3xl"
                      />
                      </a>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="two">
                    <AccordionTrigger value="two">
                      PrepWise
                    </AccordionTrigger>
                    <AccordionContent value="two">
                      <a className="cursor-pointer" href="https://interview-prep-five-indol.vercel.app" target="_blank" rel="noopener noreferrer">
                        <img
                        src="/prepwise.png"
                        alt="keep"
                        className="w-full h-full object-cover  overflow-hidden rounded-3xl"
                      />
                      </a>
                      
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="three">
                    <AccordionTrigger value="three">
                     Ore's restaurant
                    </AccordionTrigger>
                    <AccordionContent value="three">
                      <a className="cursor-pointer" href="https://food-recipe-app-inky.vercel.app/" target="_blank" rel="noopener noreferrer">
                       <img
                        src="/ore.png"
                        alt="keep"
                        className="w-full h-full object-cover  overflow-hidden rounded-3xl"
                      /> 
                      </a>
                      
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="four">
                    <AccordionTrigger value="four">
                      Crown Shop
                    </AccordionTrigger>
                    <AccordionContent value="four">
                      <a className="cursor-pointer" href="https://crownn-shop.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img
                        src="/crown.png"
                        alt="keep"
                        className="w-full h-full object-cover  overflow-hidden rounded-3xl"
                      />
                      </a>
                      
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="five">
                    <AccordionTrigger value="five">
                      Coinz
                    </AccordionTrigger>
                    <AccordionContent value="five">
                      <a className="cursor-pointer" href="https://coinz-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">

                      </a>
                      <img
                        src="/coinz.png"
                        alt="keep"
                        className="w-full h-full object-cover  overflow-hidden rounded-3xl"
                      />
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="six">
                    <AccordionTrigger value="six">
                      Store It
                    </AccordionTrigger>
                    <AccordionContent value="six">
                      <a className="cursor-pointer" href="https://keep-lemon-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img
                        src="/storeit.png"
                        alt="keep"
                        className="w-full h-full object-cover  overflow-hidden rounded-3xl"
                      />
                      </a>
                      
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="seven">
                    <AccordionTrigger value="seven">
                      Board games
                    </AccordionTrigger>
                    <AccordionContent value="seven">
                      <a className="cursor-pointer" href="https://board-games-snowy.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img
                        src="/boardgames.png"
                        alt="keep"
                        className="w-full h-full object-cover  overflow-hidden rounded-3xl"
                      />
                      </a>
                      
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="lg:w-1/2 bg-[#e7c47d] h-[38vh] rounded-3xl flex lg:hidden flex-col justify-end p-4">
                <div className="flex flex-row justify-stretch text-[#6F6134] items-center gap-2 mr-28 ">
                  <p className="text-lg">Have some questions?</p>
                  {/* <FaArrowRight size={20} /> */}
                </div>
                <p className="text-5xl text-[#6F6134] pb-5">
                  Contact <i>me</i>
                </p>
              </div>
              <div className=" bg-[#6F6134] h-[8vh] rounded-3xl flex flex-row justify-evenly items-center text-[#E1C68F] text-lg">
                <a className='cursor-pointer' href="https://github.com/hugochooqu" target="_blank" rel="noopener noreferrer">Github</a>
                <a className='cursor-pointer' href="https://instagram.com/the.ugochi" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a className='cursor-pointer' href="https://x.com/UgochiVictor" target="_blank" rel="noopener noreferrer">Twitter</a>

                
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default App;
