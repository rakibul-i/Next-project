import Link from "next/link";
import { useRouter } from "next/router";

const DashboardRoutes = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  return (
    <div className="md:w-9/12 w-11/12 mx-auto grid grid-cols-12">
      {/* // sidebar for dashboard */}
      <div className="col-span-3">
        {params[0] === "admin" && (
          <>
            <Link href={`/dashboard/admin`}>
              <a className="block py-2 font-bold">Dashboard</a>
            </Link>
            <Link href={`/dashboard/admin/blogs`}>
              <a className="block py-2 font-bold">Blogs</a>
            </Link>
            <Link href={`/dashboard/admin/Users`}>
              <a className="block py-2 font-bold">Users</a>
            </Link>
            <Link href={`/dashboard/admin/posts`}>
              <a className="block py-2 font-bold">posts</a>
            </Link>
          </>
        )}

        {params[0] === "user" && (
          <>
            <Link href={`/dashboard/user/`}>
              <a className="block py-2 font-bold">Dashboard</a>
            </Link>
            <Link href={`/dashboard/user/jobs`}>
              <a className="block py-2 font-bold">Jobs</a>
            </Link>
            <Link href={`/dashboard/user/companies`}>
              <a className="block py-2 font-bold">Companies</a>
            </Link>
            <Link href={`/dashboard/user/skills`}>
              <a className="block py-2 font-bold">skill set</a>
            </Link>
          </>
        )}
      </div>

      {/* // response for dashboard sidebar */}
      <div className="col-span-9">
        {params.length === 1 && <h1>Welcome to the dashboard</h1>}
        {params[1] === "jobs" && (
          <div>
            <h1>Here you can find all the jobs</h1>
          </div>
        )}
        {params[1] === "companies" && (
          <div>
            <h1>Here you can find all the companies</h1>
          </div>
        )}
        {params[1] === "skills" && (
          <div>
            <h1>Here you can find all the skills</h1>
          </div>
        )}
        {params[1] === "blogs" && (
          <div>
            <h1>Here you can find all the Blogs</h1>
          </div>
        )}
        {params[1] === "Users" && (
          <div>
            <h1>Here you can find all the Users</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardRoutes;
