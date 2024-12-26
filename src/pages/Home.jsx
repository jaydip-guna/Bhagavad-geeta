import React, { useState } from "react";
import Hero from "../components/home/Hero";
import VerswofTheDay from "../components/home/VerswofTheDay";
import { getAllChapters } from "../services/apiServices";
import Chapters from "../components/home/Chapters";

function Home() {
const[chapters,setchapetr]=useState(null);
if(!chapters){
getAllChapters().then((data)=>{
  setchapetr(data);
});
}
console.log("chapters",chapters)
if (!chapters) return null;
  return (
  <div>
    <Hero url="https://bhagavadgita.io/_next/image?url=%2Fbanner2.png&w=1920&q=75" />
    <VerswofTheDay/>
    <Chapters chapters={chapters}/>
    

  
  </div>
 
  );
}

export default Home;
