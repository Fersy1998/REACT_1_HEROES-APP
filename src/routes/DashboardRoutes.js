import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { DCScreen } from "../components/dc/DCScreen";
import { HeroScreen } from "../components/hero/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/NavBar";
export const DashboardRoutes = () => {
  return (
    <>
    <Navbar />
    
    <div className="container">
    <Routes>
        <Route path="/" element={<MarvelScreen/>} />
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DCScreen/>} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="hero/:heroeId" element={<HeroScreen />} />
      </Routes>
    </div>
    </>
     
  )
}
