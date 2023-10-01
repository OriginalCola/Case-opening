'use client';
import WinButtons from "./WinButtons";
import Wins from "./Wins";
const Cards = () => {
    return (
        // karta z wartosciami z elementu Wins
        <div className="flex flex-row justify-start ml-5 w-full items-center space-x-5">
            <WinButtons/>
            <Wins/>
            <Wins/>
            <Wins/>
            <Wins/>
            <Wins/>
            <Wins/>
            <Wins/>
            <Wins/>
            <Wins/>
            <Wins/>
            <Wins/>
            <Wins/>

        </div>
    )
}

export default Cards