import Image from "next/image";
import Link from "next/link";

// advertisement component ke liye
const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex justify-between items-center text-gray-500 font-medium">
        <span>Sponsored Ads </span>
        <Image src="/more.png" alt="more" width={16} height={16} />
      </div>

      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-34" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg"
            alt="ad"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg"
            alt="ad-logo"
            width={24}
            height={24}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-blue-500 font-medium">Blue Lens</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Discover the world through our lens. Capturing moments, one click at a time."
            : size === "md"
            ? "Discover the world through our lens. Capturing moments, one click at a time. Explore stunning visuals and stories that inspire."
            : "Discover the world through our lens. Capturing moments, one click at a time. Explore stunning visuals and stories that inspire. Join us on a journey of creativity and imagination."}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-sm rounded-lg hover:bg-blue-500 hover:text-white">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
