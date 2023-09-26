'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faVolumeHigh,
  faWallet,
  faClover
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

export const NavBar = () => {

    function DepositButton() {
        window.focus();
        confirm('1000$ deposited');
    }

    return (
        <div className="flex flex-row justify-between items-center p-2.5 border border-astronaut border-solid">
            <div className="flex items-center w-2/5 space-x-5 ">
                <div>
                    <h1 className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">HumblyGambly</h1>
                    <FontAwesomeIcon icon={faClover} />
                </div>
                <div className="flex items-center">
                        <ul className="flex items-center uppercase space-x-4">
                            <li>
                                <Link href="/">Deposit</Link>
                            </li>
                        </ul>
                </div>
            </div>
            <div className="flex items-center space-x-7 h-full">
                <div className="flex flex-row space-x-4 flex items-center justify-between space-x-5">
                    <h2>DropKing</h2>
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-offset-base-100 ring-offset-2">
                            <Image 
                                src="/happy-arabian-man.png"
                                width={50}
                                height={50}
                                alt="test"
                            />
                        </div>
                    </div>
                    <h2 className="text-jaffa">5,56 $</h2>
                    <button className="btn" onClick={DepositButton}>
                    Deposit
                    <FontAwesomeIcon icon={faWallet} />
                    </button>
                </div>
                <div className='border border-l-astronaut border-solid h-full w-1'>

                </div>
                <div className="flex items-center space-x-2">
                    <div className='space-x-5'>
                        <FontAwesomeIcon icon={faVolumeHigh} />
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn m-1">ENG</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>English</a></li>
                                    <li><a>Polish</a></li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
