import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/29746470/pexels-photo-29746470.jpeg"
            alt="userName"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Harmaine Granger</span>
        </div>
        <Image src="/more.png" alt="more Options" width={16} height={16} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/34973502/pexels-photo-34973502.jpeg"
            alt="DescriptionImage"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quis
          accusantium ratione sint reprehenderit fugit natus perferendis
          blanditiis voluptates, illo, architecto pariatur aut dolorem nostrum,
          doloremque commodi nulla repellendus. Aliquid.
        </p>
      </div>
      <div className="flex items-center justify-between text-sm my-1">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt="Like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Likes</span>
            </span>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt="Comment"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                <Image
                src="/share.png"
                alt="Share"
                width={16}
                height={16}
                className="cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">
                45<span className="hidden md:inline "> Shares</span>
                </span>
            </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
