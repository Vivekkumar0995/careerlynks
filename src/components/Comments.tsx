import Image from "next/image";

const Comments = () => {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/19052074/pexels-photo-19052074.jpeg"
          alt="comments"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full ">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt="Emoji"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          <Image
            src="https://images.pexels.com/photos/26052411/pexels-photo-26052411.jpeg"
            alt="comments"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-bold">Lucifer</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nesciunt, blanditiis, voluptatum fuga hic laudantium corporis
              accusamus impedit quia deleniti, harum quibusdam. Quae veritatis
              placeat suscipit labore, nulla dignissimos odit. Eveniet.
            </p>
            <div className="flex items-center gap-8 text-sm text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                    src="/like.png"
                    alt="like"
                    width={16}
                    height={16}
                    className="w-4 h-4 cursor-pointer"
                />
                <span className="text-gray-300" >|</span>
                <span className="text-gray-500" >123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          <Image
            src="/more.png"
            alt="More Options"
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
