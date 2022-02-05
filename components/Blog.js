import Image from "next/image";
import Link from "next/link";

const Blog = ({ blog }) => {
  const blogTitle = blog?.title.slice(0, 30);
  const blogDesc = blog?.description.slice(0, 150);
  return (
    <Link href={`/blog/${blog._id}`}>
      <a
        //   onClick={() => history.push(`/blogs/${blog._id}`)}
        className="grid cursor-pointer   grid-cols-1 transition-shadow duration-300 items-center hover:shadow-xl py-2 px-4 m-3 rounded group "
      >
        <div>
          <Image
            className="rounded w-full 2xl:h-56 lg:h-44 md:h-48 h-56 transition duration-300 transform group-hover:scale-125 group-hover:animate-pulse"
            width="400"
            height="300"
            src={blog?.imageUrl}
            alt=""
          />
        </div>
        <div className="lg:px-3 md:py-0 md:mt-0 mt-3">
          <h1 className="text-xl font-serif pb-4">{blogTitle}...</h1>
          <p className="text-sm leading-6 text-gray-500">{blogDesc}...</p>
        </div>
      </a>
    </Link>
  );
};

export default Blog;
