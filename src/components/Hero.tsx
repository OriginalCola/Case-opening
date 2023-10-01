import Image from "next/image"

const Hero = () => {
    return (
        <div className="flex-shrink-0 bg-no-repeat px-64 mb-8 mt-14 bg-[url('/dbg.png')] bg-top">
            <div className="flex flex-row items-center mb-8">
                <div>
                    <Image
                    src="/casehero.svg"
                    width={648}
                    height={627}
                    alt="Case Hero"
                    />
                </div>
                <div className="w-1/2">
                    <h2 className="text-jaffa mb-3">20% bonus on first deposit</h2>
                    <h1 className="text-6xl text-white mb-3">CS:GO cases that you want to open</h1>
                    <p className="text-white">with the highest probability of dropping fatty items</p>
                </div>
            </div>
        </div>
        
    )
}

export default Hero