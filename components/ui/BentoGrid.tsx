"use client"

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import ClientOnly from "../ClientOnly";

import dynamic from "next/dynamic";
let Lottie;

if (process.env.NODE_ENV === "development") {
  Lottie = require("react-lottie").default;
} else {
  Lottie = dynamic(() => import("react-lottie"), { ssr: false });
}

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Next.js", "React", "TypeScript"];
  const rightLists = ["Node.js", "PostgreSQL", "AWS"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "ps@psteger.com";
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-2xl border border-white/[0.1] group/bento hover:shadow-2xl hover:border-white/[0.2] transition-all duration-300 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 backdrop-blur-sm",
        className
      )}
      style={{
        background: "linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.8) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-medium md:text-sm lg:text-base text-sm text-blue-300/80 z-10 mb-2">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-2xl xl:text-3xl max-w-96 font-bold z-10 text-white leading-tight`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && (
            <ClientOnly fallback={<div className="w-full h-full bg-blue-500/10 rounded-full animate-pulse" />}>
              <GridGlobe />
            </ClientOnly>
          )}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-4 py-2 px-3 text-xs lg:text-sm font-medium text-white/90 rounded-lg text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-4 py-2 px-3 text-xs lg:text-sm font-medium text-white/90 rounded-lg text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                <ClientOnly fallback={null}>
                  <Lottie options={defaultOptions} height={200} width={400} />
                </ClientOnly>
              </div>

              <MagicButton
                title={copied ? "E-Mail kopiert!" : "E-Mail-Adresse kopieren"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};