import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getParticularVerses } from "../services/apiServices";
import { data } from "../components/data/data";
import LoadingComponent from "../styles/common/loadingcomponents/LoadingComponent";

function Verse() {
  const [verses, setVerses] = useState(null);
  const params = useParams();
useEffect(()=>{
  getParticularVerses(params.chapterId, params.verseId).then((data) => {
    setVerses(data);
  });
},[params.chapterId, params.verseId])
  console.log(params);
 
  console.log("Particular verses", verses);
  if (!verses) return <LoadingComponent/>;

  const englishTranslation = verses.translations.find((value) => {
    return value.language === "english";
  });
  const englishCommentary = verses.translations.find((value) => {
    return value.language === "hindi";
  });
  function perviousLink() {
    if (params.verseId > 1) {
      return `/chapter/${params.chapterId}/verse/${Number(params.verseId) - 1}`;
    } else {
      if (params.chapterId > 1) {
        return `/chapter/${Number(params.chapterId) - 1}/verse/${1}`;
      }
    }
  }
  function nextLink() {
    if (params.verseId < data[params.chapterId]) {
      return `/chapter/${params.chapterId}/verse/${Number(params.verseId) + 1}`;
    } else {
      if (params.chapterId < 18) {
        return `/chapter/${Number(params.chapterId) + 1}/verse/${1}`;
      }
    }
  }
  return (
    <>
      <div class="relative z-10">
        <a
          class="fixed left-3 top-1/2 flex h-10 w-10 items-center justify-center rounded-full border bg-white  hover:cursor-pointer hover:brightness-90 dark:border-gray-600 dark:bg-dark-100 dark:hover:bg-dark-bg"
          href={perviousLink()}
        >
          <svg
            width="6"
            height="10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="dark:text-gray-50"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.707.293a1 1 0 0 1 0 1.414L2.414 5l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
        <a
          class="fixed right-3 top-1/2 flex h-10 w-10 items-center justify-center rounded-full border bg-white  hover:cursor-pointer hover:brightness-90 dark:border-gray-600 dark:bg-dark-100 dark:hover:bg-dark-bg"
          href={nextLink()}
        >
          <svg
            width="6"
            height="10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="dark:text-gray-50"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M.293 9.707a1 1 0 0 1 0-1.414L3.586 5 .293 1.707A1 1 0 0 1 1.707.293l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <p className="font-bold text-3xl text-center">
          BG:{verses.chapter_number}.{verses.verse_number}
        </p>
        <p
          className="font-bold text-3xl text-center text-[#f57903] mt-4 w-[550px] items-center
        "
        >
          {verses.text}
        </p>
        <p className="text-center text-xl w-[600px]">
          {verses.transliteration}
        </p>

        <p className="text-center mt-5 mx-w-[500px] w-auto ">
          {verses.word_meanings}
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        <h2 className="text-center text-3xl font-bold text-black">
          Translation
        </h2>
        <p className=" text-xl mx-w-[500px] items-center  text-center">
          {englishTranslation.description}
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        <h2 className="text-center text-3xl font-bold text-black">
          Commentary
        </h2>
        <p className=" text-xl mx-w-[500px] items-center  text-center">
          {englishCommentary.description}
        </p>
      </div>
    </>
  );
}

export default Verse;
