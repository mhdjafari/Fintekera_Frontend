"use client";
import Image from "next/image";
import { useState } from "react";
import Reveal from "../Common/Reveal";
import Link from "next/link";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
                <div
                  className="wow fadeInUp mx-auto max-w-[800px] text-center"
                  data-wow-delay=".2s"
                >
                  <Reveal y={15}>
                    <h1 className="mb-5 font-bold leading-tight text-black dark:text-white text-2xl sm:text-1xl md:text-3xl lg:text-4xl xl:text-4xl">
                      Cutting-Edge AI-Powered Solutions for Income and Ability-to-Pay Verifications{" "}
                    </h1>
                  </Reveal>
                  <Reveal y={5}>
                    <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-md md:text-lg lg:text-xl xl:text-xl">
                      Discover the transformative potential of our technology, <br />
                      redefining the customer verification process
                    </p>
                  </Reveal>
                </div>

              <Reveal y={15}>
              <div className="flex justify-center mt-10">
                <form onSubmit={handleSubmit}>
                 <Link
                  href="/contact-demo"
                  className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                  Sign Up for Demo
                </Link>
                </form>
              </div>
              </Reveal>

            </div>

                <div className="animate_right md:w-1/2 lg:block">
                  <div className="relative 2xl:-mr-7.5">
                    <Image
                      src="/images/shape/shape-01.png"
                      alt="shape"
                      width={46}
                      height={246}
                      className="absolute -left-11.5 top-0"
                    />
                    <Image
                      src="/images/shape/shape-02.svg"
                      alt="shape"
                      width={36.9}
                      height={36.7}
                      className="absolute bottom-0 right-0 z-10"
                    />
                    <Image
                      src="/images/shape/shape-03.svg"
                      alt="shape"
                      width={21.64}
                      height={21.66}
                      className="absolute -right-6.5 bottom-0 z-1"
                    />
                    <div className=" relative aspect-[700/444] w-full">
                      <Image
                        className="shadow-solid-l"
                        src="/images/hero/hero-light.svg"
                        alt="Hero"
                        fill
                      />
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
