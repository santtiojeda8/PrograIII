import { useEffect, useState } from "react"
import { IHeroes } from "../../../../types/IHeroes"
import { heroesData } from "../../../../data/heroes"
import { ListHeroes } from "../ui/ListHeroes/ListHeroes"


export const MarvelHeroes = () => {
  const[hero,setHero]=useState<IHeroes[]>([])
  const handleGetHeroesDc=()=>{
      const result=heroesData.filter((hero)=> hero.publisher=="Marvel Comics");
      setHero(result)
  }
  useEffect(()=>{
      handleGetHeroesDc();
  },[])
return (
  <ListHeroes heroes={hero} title="Heroes Marvel Comics"/>
)
}


