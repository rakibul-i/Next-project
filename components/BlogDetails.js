import Image from "next/image";

const BlogDetails = ({ blog }) => {
  return (
    <div>
      <h1 className="text-center py-4 font-bold md:text-4xl text-xl">
        {blog?.title}
      </h1>
      <p className="capitalize text-center py-2">
        {blog?.traveler} {new Date(blog?.date).toDateString()}
      </p>
      <div className="flex justify-center">
        <Image width="500" height="400" src={blog?.imageUrl} alt="" />
      </div>
      <p className="capitalize text-center py-2 font-bold flex justify-around">
        <span>{blog?.location}</span> <span>${blog?.cost}</span>
      </p>
      <p className="py-5">{blog?.description}</p>
    </div>
  );
};

export default BlogDetails;
