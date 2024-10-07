import { Route, Routes } from "react-router-dom"
import { Header } from "../components/screens/login/ui/Header/Header"
import { Home } from "../components/screens/login/Home/Home"
import { Search } from "../components/screens/login/Search/Search"
import { DcHeroes } from "../components/screens/login/DcHeroes/DcHeroes"
import { MarvelHeroes } from "../components/screens/login/MarvelHeroes/MarvelHeroes"
import { HeroPage } from "../components/screens/HeroPage/HeroPage"


export const ProtectedRoutes = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/dcHeroes" element={<DcHeroes/>}/>
        <Route path="/marvelHeroes" element={<MarvelHeroes/>}/>
        <Route path="/hero/:id" element={<HeroPage/>}/>
    </Routes>
    </>
  )
}
