import React from 'react'
import { Navbar } from '../components/ui/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
return(
    <>
        <Navbar />
        <div className="container mt-2">
            <Routes>
                <Route exact path="/marvel" element={<MarvelScreen />}/>
                <Route exact path="/hero/:heroId/*" element={<HeroScreen />}/>
                <Route exact path="/dc" element={<DcScreen />}/>
                <Route exact path="/search" element={<SearchScreen />}/>
                <Route path='*' element={<main>
                    <h1>ERR 404</h1>
                </main>} />
            </Routes>
        </div>
    </>
)
}
