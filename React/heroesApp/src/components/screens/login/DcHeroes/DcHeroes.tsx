import { useEffect, useState } from "react"
import { IHeroes } from "../../../../types/IHeroes"
import { heroesData } from "../../../../data/heroes"
import { ListHeroes } from "../ui/ListHeroes/ListHeroes"


export const DcHeroes = () => {
    const[hero,setHero]=useState<IHeroes[]>([])
    const handleGetHeroesDc=()=>{
        const result=heroesData.filter((hero)=> hero.publisher=="DC Comics");
        setHero(result)
    }
    useEffect(()=>{
        handleGetHeroesDc();
    },[])
  return (
    <ListHeroes heroes={hero} title="Heroes DC Comics"/>
  )
}


