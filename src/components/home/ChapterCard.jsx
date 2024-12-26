import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

function ChapterCard(props) {
  const navigate = useNavigate();
  function goToChapter() {
    navigate(`/chapter/${props.number}`);
  }
  console.log(navigate)
  return (
    <div
      className="bg-white rounded-lg shadow-md p-8 cursor-pointer  "
      onClick={ goToChapter }
    >
      <p className="font-bold text-[rgb(245,121,3)] text-base">
        Chapter {props.number}
      </p>
      <p className="font-bold text-xl">{props.name}</p>
      <p className="text-slate-500 my-3">{props.summary}</p>
      <p>
    
        <FontAwesomeIcon icon={faList} className="mr-4" />
        {props.verse}Verses
      </p>
    </div>
  );
}

export default ChapterCard;
