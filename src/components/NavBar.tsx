import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faVolumeHigh
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'


export const NavBar = () => {
    return (
        <div className="flex flex-row justify-between items-center p-2.5">
            <div>
                <h1>HumblyGambly</h1>
            </div>
            <div className="flex justify-between">
                <div className="border-red-600 border-2 border-solid flex items-center">
                    <ul className="flex items-center uppercase space-x-4">
                        <li className="">cases</li>
                        <li className="">upgrader</li>
                        <li className="">roulette</li>
                    </ul>
                </div>
                <div className="border-green-600 border-2 border-solid flex flex-row space-x-4">
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
                    <h2>5,56 $</h2>
                    <button>deposit</button>
                </div>
            </div>
            <div className="flex flex-row">
                <FontAwesomeIcon icon={faVolumeHigh} />
            </div>
        </div>
    )
}

export default NavBar
