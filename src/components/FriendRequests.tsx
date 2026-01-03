import Image from "next/image";
import Link from "next/link";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        
      <div className="flex justify-between items-center font-medium">
        <span>Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs cursor-pointer">
          See All
        </Link> 
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://images.pexels.com/photos/34955547/pexels-photo-34955547.jpeg"
            alt="person"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-lg font-normal">Bruce Wayne</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt="accept"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt="reject"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://images.pexels.com/photos/34955547/pexels-photo-34955547.jpeg"
            alt="person"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-lg font-normal">Bruce Wayne</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt="accept"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt="reject"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://images.pexels.com/photos/34955547/pexels-photo-34955547.jpeg"
            alt="person"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-lg font-normal">Bruce Wayne</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt="accept"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt="reject"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="https://images.pexels.com/photos/34955547/pexels-photo-34955547.jpeg"
            alt="person"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-lg font-normal">Bruce Wayne</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt="accept"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt="reject"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
