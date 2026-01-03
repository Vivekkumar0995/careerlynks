import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
    return(
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            <div className="flex justify-between items-center font-medium">
                <span>Birthdays</span>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                <Image
                    src="https://images.pexels.com/photos/35445912/pexels-photo-35445912.jpeg"
                    alt="person"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-lg font-normal">Eleven</span>
                </div>

                <div className="flex gap-3 justify-end">
                    <button className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md" >Celebrate</button>
                </div>
            </div>

            <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
                <Image src="/gift.png" alt="gift" width={24} height={24} />
                <Link href="/" className="flex flex-col gap-1 text-xs">
                    <span className="text-gray-700 font-semibold">See all Upcoming birthdays</span>
                    <span className="text-gray-500">You have 3 birthdays coming up</span>
                </Link>
            </div>

        </div>
    )
}

export default Birthdays;