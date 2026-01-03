import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-8">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/29746470/pexels-photo-29746470.jpeg"
          alt="big"
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/34989842/pexels-photo-34989842.jpeg"
          alt="small"
          width={48}
          height={48}
          className="rounded-full w-12 h-12 absolute left-0 right-0 object-cover m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>

      <div className="h-21 flex flex-col items-center gap-2">
        <span className="font-semibold">Matilda Rose</span>
        <div className="flex items-center gap-4">
            <div className="flex">
                <Image
                    src="https://images.pexels.com/photos/34989842/pexels-photo-34989842.jpeg"
                    alt="small"
                    width={12}
                    height={12}
                    className="rounded-full object-cover w-3 h-3"
                />
                <Image
                    src="https://images.pexels.com/photos/34989842/pexels-photo-34989842.jpeg"
                    alt="small"
                    width={12}
                    height={12}
                    className="rounded-full object-cover w-3 h-3"
                />
                <Image
                    src="https://images.pexels.com/photos/34989842/pexels-photo-34989842.jpeg"
                    alt="small"
                    width={12}
                    height={12}
                    className="rounded-full object-cover w-3 h-3"
                />
            </div>
            <span className="text-sm text-gray-500" >5000 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md" >My Profile</button>
      </div>

    </div>
  );
};

export default ProfileCard;