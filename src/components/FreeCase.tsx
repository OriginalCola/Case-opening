import Image from "next/image"

const FreeCase = () => {
    return (
        <div className="bg-astronaut w-5/6 m-auto rounded-3xl flex flex-row items-center p-12 justify-between mt-24">
            <div className="w-1/3">
                <h1 className="text-white uppercase text-3xl mb-4">free Case</h1>
                <p className="text-white">Register on our service and receive a free case upon the first replenishment of the balance</p>
            </div>
            <img className="absolute left-2/4" src="/case-free.png"></img>
            <div>
                <button className="btn">
                    get a free case
                </button>
            </div>
        </div>
    )
}

export default FreeCase