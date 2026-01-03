import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-4">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center">
                
                <div className="w-full h-64 relative">
                    <Image src="https://images.pexels.com/photos/34608529/pexels-photo-34608529.jpeg" alt="Profile Cover" fill className="object-cover rounded-lg" />
                    <Image src="https://images.pexels.com/photos/34485724/pexels-photo-34485724.jpeg" alt="Profile Cover" width={128} height={128} className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover" />
                </div>
                
                <h1 className="mt-20 mb-4 text-2xl font-medium">Matilda Rose</h1>
                
                <div className="flex items-center justify-center gap-12 mb-4">
                    <div className="flex flex-col items-center">
                        <span className="font-medium text-lg">150</span>
                        <span className="text-gray-500 text-sm">Posts</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-medium text-lg">300K</span>
                        <span className="text-gray-500 text-sm">Followers</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-medium text-lg">180</span>
                        <span className="text-gray-500 text-sm">Following</span>
                    </div>
                </div>
            
            </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
};

export default ProfilePage;
