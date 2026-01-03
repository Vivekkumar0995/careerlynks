import Image from "next/image";
import Link from "next/link";

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span>User Media</span>
        <Link href="/" className="text-blue-500 text-xs cursor-pointer">
          See All
        </Link>
      </div>

      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/34955547/pexels-photo-34955547.jpeg"
            alt="media1"
            fill
            className="object-cover rounded-md"
          />
          
        </div>
        
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/31374567/pexels-photo-31374567.jpeg"
            alt="media1"
            fill
            className="object-cover rounded-md"
          />
          
        </div>
        
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/28355031/pexels-photo-28355031.jpeg"
            alt="media1"
            fill
            className="object-cover rounded-md"
          />
          
        </div>
        
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/34955547/pexels-photo-34955547.jpeg"
            alt="media1"
            fill
            className="object-cover rounded-md"
          />
          
        </div>
        
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/31400272/pexels-photo-31400272.jpeg"
            alt="media1"
            fill
            className="object-cover rounded-md"
          />
          
        </div>
        
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/34517836/pexels-photo-34517836.jpeg"
            alt="media1"
            fill
            className="object-cover rounded-md"
          />
          
        </div>
        
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/33237631/pexels-photo-33237631.jpeg"
            alt="media1"
            fill
            className="object-cover rounded-md"
          />
          
        </div>
        
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/33325745/pexels-photo-33325745.jpeg"
            alt="media1"
            fill
            className="object-cover rounded-md"
          />
            
        </div>

      </div>
    </div>
  );
};

export default UserMediaCard;
