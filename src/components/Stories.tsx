import Image from "next/image";

const Stories = () => {
    return(
        <div className="p-4 bg-white rounded-lg shadow-md overflow-x-auto scrollbar-hide text-sm">
            <div className="flex gap-8 w-max">
                {/* stories */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/29611437/pexels-photo-29611437.jpeg" alt="Story" width={72} height={72} className="w-18 h-18 rounded-full ring-2" />
                    <span className="font-medium" >Ronaldo</span>
                </div>
                {/* stories */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/29611437/pexels-photo-29611437.jpeg" alt="Story" width={72} height={72} className="w-18 h-18 rounded-full ring-2" />
                    <span className="font-medium" >Ronaldo</span>
                </div>
                {/* stories */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/29611437/pexels-photo-29611437.jpeg" alt="Story" width={72} height={72} className="w-18 h-18 rounded-full ring-2" />
                    <span className="font-medium" >Ronaldo</span>
                </div>
                {/* stories */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/29611437/pexels-photo-29611437.jpeg" alt="Story" width={72} height={72} className="w-18 h-18 rounded-full ring-2" />
                    <span className="font-medium" >Ronaldo</span>
                </div>
                {/* stories */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/29611437/pexels-photo-29611437.jpeg" alt="Story" width={72} height={72} className="w-18 h-18 rounded-full ring-2" />
                    <span className="font-medium" >Ronaldo</span>
                </div>
                {/* stories */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/29611437/pexels-photo-29611437.jpeg" alt="Story" width={72} height={72} className="w-18 h-18 rounded-full ring-2" />
                    <span className="font-medium" >Ronaldo</span>
                </div>
                {/* stories */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/29611437/pexels-photo-29611437.jpeg" alt="Story" width={72} height={72} className="w-18 h-18 rounded-full ring-2" />
                    <span className="font-medium" >Ronaldo</span>
                </div>
                {/* stories */}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/29611437/pexels-photo-29611437.jpeg" alt="Story" width={72} height={72} className="w-18 h-18 rounded-full ring-2" />
                    <span className="font-medium" >Ronaldo</span>
                </div>
            </div>
        </div>
    )
}

export default Stories;