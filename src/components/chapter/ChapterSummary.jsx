import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getParticularChapter } from '../../services/apiServices';
import LoadingComponent from '../../styles/common/loadingcomponents/LoadingComponent';


function ChapterSummary() {
const[chapter,setChapetr]=useState(null);
const params=useParams();
useEffect(()=>{
  getParticularChapter(params.id).then((data)=>{
    setChapetr(data);
  })
},[])
console.log(params) ;

if(!chapter) return <LoadingComponent/>;
  return (
    <div className='max-w-4xl flex flex-col mx-auto'>
      <p className='text-[#f57903] text-center font-bold'>CHAPTER {chapter.chapter_number}</p>
      <p className='mt-2 mb-8 text-3xl font-bold text-center'>{chapter.name_translated}</p>
      <p className='text-lg mx-auto '>{chapter.chapter_summary}</p>

    </div>
  )
}

export default ChapterSummary
