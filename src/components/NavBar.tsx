import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faVolumeHigh
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'


export const NavBar = () => {
    return (
        <div className="flex flex-row justify-between items-center p-2.5 border border-astronaut border-solid">
            <div className="flex items-center w-2/5 space-x-5">
                <div>
                    <h1>HumblyGambly</h1>
                </div>
                <div className="border-red-600 border-2 border-solid flex items-center">
                        <ul className="flex items-center uppercase space-x-4">
                            <li className="">cases</li>
                            <li className="">upgrader</li>
                            <li className="">roulette</li>
                        </ul>
                </div>
            </div>
            <div className="flex items-center space-x-7 h-full">
                <div className="border-green-600 border-2 border-solid flex flex-row space-x-4 flex items-center justify-between space-x-5">
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
                    <button>deposit</button>
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
