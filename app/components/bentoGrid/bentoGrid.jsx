"use client";
import { cn } from "../../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiNestjs } from "react-icons/si";

const Bento = () => {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-neutral-500 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent bg-neutral-100"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonThree = () => {
  const first = {
    initial: {
      x: 20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-neutral-500 flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col items-center justify-center"
      >
        <FaNodeJs
          alt="logo React"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 text-neutral-700"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-red-500 bg-red-100 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>

      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col items-center justify-center">
        <SiMongodb
          alt="logo Nextjs"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 text-neutral-700"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>

      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col items-center justify-center"
      >
        <SiNestjs
          alt="logo tailwind"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 text-neutral-700"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-neutral-500 flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col items-center justify-center"
      >
        <FaReact
          alt="logo React"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 text-neutral-700"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-red-500 bg-red-100 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col items-center justify-center">
        <SiNextdotjs
          alt="logo Nextjs"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 text-neutral-700"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col items-center justify-center"
      >
        <SiTailwindcss
          alt="logo tailwind"
          height="100"
          width="100"
          className="rounded-full h-10 w-10 text-neutral-700"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-neutral-500 flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 p-2  items-start space-x-2 bg-white"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Accompagnement",
    description: (
      <span className="text-sm">
        Faites évoluer votre site web grâce à nos conseils et recommandations.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
  },

  {
    title: "Développement back-end",
    description: (
      <span className="text-sm">
        Avec nos technologies choisies, nous vous assurons un back-end robuste et sécurisé.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-2",
  },

  {
    title: "Développement front-end",
    description: (
      <span className="text-sm">
        Nous développons votre site web avec les dernières technologies en vogue.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
  },

  {
    title: "La communication",
    description: (
      <span className="text-sm">
        Échanges réguliers pour comprendre vos besoins et fournir des solutions adaptées.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
  },
];


export default Bento;