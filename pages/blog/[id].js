import Head from "next/head";
import BlogDetails from "../../components/BlogDetails";
import Header from "../../components/Header";

const Details = ({ blog }) => {
  console.log(blog);
  return (
    <div className="md:w-9/12 w-11/12 mx-auto ">
      <Head>
        <title>{blog?.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* // blog details */}
      <BlogDetails blog={blog} />
    </div>
  );
};

export default Details;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://fathomless-dawn-94067.herokuapp.com/blogs/${context.params.id}`
  );
  const blog = await res.json();

  return {
    props: {
      blog,
    },
  };
};
