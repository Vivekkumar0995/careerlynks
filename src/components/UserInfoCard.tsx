import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span>User Information</span>
        <Link href="/" className="text-blue-500 text-xs cursor-pointer">
          See All
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Will Smith</span>
          <span className="text-sm">@willsmith</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui
          eos perferendis modi, consectetur, magni a dolore?
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="Map" width={16} height={16} />
          <span>
            Living in <b>New York</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="Map" width={16} height={16} />
          <span>
            Went to <b>xyz High School</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="Map" width={16} height={16} />
          <span>
            Works at <b>Apple Inc.</b>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="Map" width={16} height={16} />
            <Link
              href="https://example.com"
              className="text-blue-500 font-medium"
            >
              example.com
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="Map" width={16} height={16} />
            <span>
              Joined <b>January 2026</b>
            </span>
          </div>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm cursor-pointer">
          Follow
        </button>
        <span className="text-red-500 self-end text-sm cursor-pointer">
          Block User
        </span>
        
      </div>
    </div>
  );
};

export default UserInfoCard;
