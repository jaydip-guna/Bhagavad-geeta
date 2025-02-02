import React from "react";
import ChapterCard from "./ChapterCard";
// const data = [
//   {
//     number: 1,
//     name: "Arjuna Visada Yoga",
//     summary: `The first chapter of the Bhagavad Gita  Arjuna Vishada Yoga
//         introduces the setup, the setting, the characters and the circumstances
//         that led to the epic battle of Mahabharata, fought between the Pandavas
//         and the Kauravas. It outlines the reasons that led to the revelation of
//         the of Bhagavad Gita. As both armies stand ready for the battle, the
//         mighty warrior Arjuna, on observing the warriors on both sides becomes
//         increasingly sad and depressed due to the fear of losing his relatives
//         and friends and the consequent sins attributed to killing his own
//         relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus,
//         follows the wisdom of the Bhagavad Gita.`,
//     verses: 47,
//   },
//   {
//     number: 1,
//     name: "Arjuna Visada Yoga",
//     summary: `The first chapter of the Bhagavad Gita  Arjuna Vishada Yoga
//         introduces the setup, the setting, the characters and the circumstances
//         that led to the epic battle of Mahabharata, fought between the Pandavas
//         and the Kauravas. It outlines the reasons that led to the revelation of
//         the of Bhagavad Gita. As both armies stand ready for the battle, the
//         mighty warrior Arjuna, on observing the warriors on both sides becomes
//         increasingly sad and depressed due to the fear of losing his relatives
//         and friends and the consequent sins attributed to killing his own
//         relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus,
//         follows the wisdom of the Bhagavad Gita.`,
//     verses: 47,
//   },
//   {
//     number: 1,
//     name: "Arjuna Visada Yoga",
//     summary: `The first chapter of the Bhagavad Gita  Arjuna Vishada Yoga
//         introduces the setup, the setting, the characters and the circumstances
//         that led to the epic battle of Mahabharata, fought between the Pandavas
//         and the Kauravas. It outlines the reasons that led to the revelation of
//         the of Bhagavad Gita. As both armies stand ready for the battle, the
//         mighty warrior Arjuna, on observing the warriors on both sides becomes
//         increasingly sad and depressed due to the fear of losing his relatives
//         and friends and the consequent sins attributed to killing his own
//         relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus,
//         follows the wisdom of the Bhagavad Gita.`,
//     verses: 47,
//   },
//   {
//     number: 1,
//     name: "Arjuna Visada Yoga",
//     summary: `The first chapter of the Bhagavad Gita  Arjuna Vishada Yoga
//         introduces the setup, the setting, the characters and the circumstances
//         that led to the epic battle of Mahabharata, fought between the Pandavas
//         and the Kauravas. It outlines the reasons that led to the revelation of
//         the of Bhagavad Gita. As both armies stand ready for the battle, the
//         mighty warrior Arjuna, on observing the warriors on both sides becomes
//         increasingly sad and depressed due to the fear of losing his relatives
//         and friends and the consequent sins attributed to killing his own
//         relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus,
//         follows the wisdom of the Bhagavad Gita.`,
//     verses: 47,
//   },
//   {
//     number: 1,
//     name: "Arjuna Visada Yoga",
//     summary: `The first chapter of the Bhagavad Gita  Arjuna Vishada Yoga
//         introduces the setup, the setting, the characters and the circumstances
//         that led to the epic battle of Mahabharata, fought between the Pandavas
//         and the Kauravas. It outlines the reasons that led to the revelation of
//         the of Bhagavad Gita. As both armies stand ready for the battle, the
//         mighty warrior Arjuna, on observing the warriors on both sides becomes
//         increasingly sad and depressed due to the fear of losing his relatives
//         and friends and the consequent sins attributed to killing his own
//         relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus,
//         follows the wisdom of the Bhagavad Gita.`,
//     verses: 47,
//   },
//   {
//     number: 1,
//     name: "Arjuna Visada Yoga",
//     summary: `The first chapter of the Bhagavad Gita  Arjuna Vishada Yoga
//         introduces the setup, the setting, the characters and the circumstances
//         that led to the epic battle of Mahabharata, fought between the Pandavas
//         and the Kauravas. It outlines the reasons that led to the revelation of
//         the of Bhagavad Gita. As both armies stand ready for the battle, the
//         mighty warrior Arjuna, on observing the warriors on both sides becomes
//         increasingly sad and depressed due to the fear of losing his relatives
//         and friends and the consequent sins attributed to killing his own
//         relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus,
//         follows the wisdom of the Bhagavad Gita.`,
//     verses: 47,
//   },
//   {
//     number: 1,
//     name: "Arjuna Visada Yoga",
//     summary: `The first chapter of the Bhagavad Gita  Arjuna Vishada Yoga
//         introduces the setup, the setting, the characters and the circumstances
//         that led to the epic battle of Mahabharata, fought between the Pandavas
//         and the Kauravas. It outlines the reasons that led to the revelation of
//         the of Bhagavad Gita. As both armies stand ready for the battle, the
//         mighty warrior Arjuna, on observing the warriors on both sides becomes
//         increasingly sad and depressed due to the fear of losing his relatives
//         and friends and the consequent sins attributed to killing his own
//         relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus,
//         follows the wisdom of the Bhagavad Gita.`,
//     verses: 47,
//   },
//   {
//     number: 1,
//     name: "Arjuna Visada Yoga",
//     summary: `The first chapter of the Bhagavad Gita  Arjuna Vishada Yoga
//         introduces the setup, the setting, the characters and the circumstances
//         that led to the epic battle of Mahabharata, fought between the Pandavas
//         and the Kauravas. It outlines the reasons that led to the revelation of
//         the of Bhagavad Gita. As both armies stand ready for the battle, the
//         mighty warrior Arjuna, on observing the warriors on both sides becomes
//         increasingly sad and depressed due to the fear of losing his relatives
//         and friends and the consequent sins attributed to killing his own
//         relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus,
//         follows the wisdom of the Bhagavad Gita.`,
//     verses: 47,
//   },
// ];
function Chapters(props) {
  return (
    <div className="p-8 bg-[#fff5dd] ">
      <h2 className="text-4xl font-bold">Chapters</h2>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {props.chapters.map((value) => {
          return (
            <ChapterCard
              number={value.chapter_number}
              name={value.name_meaning}
              summary={value.chapter_summary}
              verse={value.verses_count}
            />
          );
        })}
      </div>
    </div>
  );
}
// console.log(chapters)
export default Chapters;
