import Image from "next/image"

const Hero = () => {
    return (
        <div className="flex-shrink-0 bg-no-repeat px-64">
            <div className="flex flex-row items-center">
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
            <div className="w-2/5 flex justify-between items-center flex-row m-auto">
                <div>
                    <h1 className="text-jaffa text-5xl">20%</h1>
                    <p>bonus on first deposit</p>
                </div>
                <div>
                    <h1 className="text-white text-5xl">86.7 k</h1>
                    <p>cases opened in the last month</p>
                </div>
                <div>
                    <h1 className="text-white text-5xl">13.5 k</h1>
                    <p>new users in the last month</p>
                </div>
                <div>
                    <h1 className="text-white text-5xl">934</h1>
                    <p>users online on the site</p>
                </div>
                
                
            </div>
        </div>
    )
}

export default Hero