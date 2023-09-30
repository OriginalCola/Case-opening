'use client';
import Wins from "./Wins";
const Cards = () => {
    return (
        // karta z wartosciami z elementu Wins
        <div className="flex flex-row justify-center items-center space-x-5">
            <Wins />
            <Wins />
            <Wins />
        </div>
    )
}

export default Cards