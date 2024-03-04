"use client";
import { HoverEffect } from "../ui/card-hover-effect";

const cardsStack = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-4xl md:text-7xl mb-12 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Nos compétences
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
};
export const projects = [
  {
    title: "React",
    description:
    "Une bibliothèque JavaScript développée par Facebook pour construire des interfaces utilisateur interactives.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export default cardsStack;
