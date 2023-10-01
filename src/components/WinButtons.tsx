import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar,
    faRotateLeft,
    faThumbsUp
} from '@fortawesome/free-solid-svg-icons'

const WinButtons = () => {
    return (
        <div className="flex flex-col mt-auto">
            <button className="btn mb-3 bg-astronaut">
                <FontAwesomeIcon icon={faStar} />
            </button>
            <button className="btn mb-3 bg-astronaut">
                <FontAwesomeIcon icon={faRotateLeft} />
            </button>
            <button className="btn mb-3 bg-astronaut">
                <FontAwesomeIcon icon={faThumbsUp} />
            </button>
        </div>
    )
}

export default WinButtons