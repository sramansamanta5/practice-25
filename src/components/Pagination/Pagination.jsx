import React, { useEffect, useState } from 'react'

const Pagination = () => {
  const nopages=[];

  const[games,setGames]=useState([])
  const[currentpageindex,setCurrentpageindex]=useState(1)
  const[postsperpage,setPostsperpage]=useState(15)

  const lastpost=currentpageindex*postsperpage;
  const firstpost=lastpost-postsperpage;

  async function fetchGames() {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games`;
   const options = {
   method: 'GET',
   headers: {
  'X-RapidAPI-Key': 'b3b5ee5fc9msh45189837fb4a082p1dbc11jsnabe1a94e2280',
  'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
 }
 
try {
const response = await fetch(url, options);
const result = await response.json();
//	console.log(result);
 setGames(result)
} catch (error) {
console.error(error);
}
   }

 useEffect(()=>{
     fetchGames();  
 },[])


  for(let i=1;i<=Math.ceil(games.length/postsperpage);i++){
    nopages.push(i)
  }
  /*
  adavanced pagination---
   
  const [container,setContainer]=useState(5)   ----->to show 5 page btns at a time

  const nextbtns=()=>{
    const isfirstpageindex=currentpageindex===0
    const newpagebtns=conatiner+2
    setContainer(newpagebtns)
  }

  {nopages.slice(page-2,page+2).map((page,index)=>{return <button key={index} style={currentpageindex===page?{backgroundColor:'orange'}:{backgroundColor:"yellow"}} onClick={()=>setCurrentpageindex(page)} className='p-2 bg-yellow-400 rounded-lg'>{page}</button>})}
  
  */

  return (
    <div className='m-5'>
    <div className='bg-red-500 p-3'>App</div>
    <div className='p-4 my-2 grid grid-cols-3'>
    {games.slice(firstpost,lastpost).map((game)=>{return <div key={game.id} className='flex flex-col gap-1 justify-center items-center'>
        <img src={game.thumbnail}/>
        <h1>{game.title}</h1>
      </div>})}
    </div>
    {console.log(games)}
    <div className='flex flex-row items-center justify-center gap-2'>
      {nopages.map((page,index)=>{return <button key={index} style={currentpageindex===page?{backgroundColor:'orange'}:{backgroundColor:"yellow"}} onClick={()=>setCurrentpageindex(page)} className='p-2 bg-yellow-400 rounded-lg'>{page}</button>})}
      </div>
    </div>
  )
}

export default Pagination