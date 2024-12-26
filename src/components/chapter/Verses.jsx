import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { getAllVerses } from "../../services/apiServices";
import LoadingComponent from "../../styles/common/loadingcomponents/LoadingComponent";

function Verses() {

  const [verses, setVerses] = useState(null);
  const params = useParams();
  const navigate=useNavigate();
useEffect(()=>{

  getAllVerses(params.id).then((data) => {
    setVerses(data);
  });
},[])
  // if (!verses) {
   
  // }
function goToVerseDetail(verseId){
  navigate(`/chapter/${params.id}/verse/${verseId}`);
}
  if (!verses) return <LoadingComponent/>;
  console.log("verses", verses)
  console.log("verses", verses.length);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mt-8 py-4 border-t border-b">
        <p className="font-bold text-xl">{verses.length} Verses</p>
      </div>
      <div>
        <ul className="flex flex-col gap-4 my-8">
          {verses.map((verse) => {
            const englishTranslation = verse.translations.find((value) => {
              return value.language === "english";
            });
            return (
              <li
                className="flex items-center gap-8 border-b py-4 cursor-pointer"
                onClick={()=>{
                  goToVerseDetail(verse.verse_number);
                }}
              >
                <p className="shrink-0 text-[#f57903]">
                  verse {verse.verse_number}
                </p>
                <p>{englishTranslation.description}</p>
              </li>
            );
          })}
        </ul>
        
      <div>
      </div>
      </div>
        
    </div>
  );
}

export default Verses;
