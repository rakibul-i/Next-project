import Blog from "./Blog";

const Blogs = ({ blogs }) => {
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold text-white">Blogs</h1>
      <div className=" py-4  rounded grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
