export function getAllChapters() {
  const promise = fetch(
    "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18",
    {
      method: "GET",
      headers: {
          "x-rapidapi-key": "7b37131338msh1eb4cee3bc26714p10773ajsnbcc9008e9b38",
          "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
      },
    }
  ).then((response) => {
    return response.json();
  });

  return promise;
}
export function getParticularChapter(chapterId) {
  return fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "7b37131338msh1eb4cee3bc26714p10773ajsnbcc9008e9b38",
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
    });
}
export function getAllVerses(chapterId) {
  return fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/verses/`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "7b37131338msh1eb4cee3bc26714p10773ajsnbcc9008e9b38",
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
export function getParticularVerses(chapterId,verseId){
  return fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterId}/verses/${verseId}/`,{
      method: 'GET',
      headers: {
        'x-rapidapi-key': '7b37131338msh1eb4cee3bc26714p10773ajsnbcc9008e9b38',
        'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
      }
    }
  ).then((response)=>{
    return response.json();
  })
  .catch(()=>{})
}