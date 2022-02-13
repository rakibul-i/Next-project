import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

const Jobs = (props) => {
  const [jobs, setJobs] = useState(props.jobs);
  const [category, setCategory] = useState();

  const router = useRouter();

  const filterJobs = async (e) => {
    setCategory(e.target.value);
    const response = await fetch(
      `http://localhost:4030/jobs?jobType=${e.target.value}`
    );
    const data = await response.json();
    setJobs(data.data);
    router.push(`/jobs?jobType=${e.target.value}`, undefined, {
      shallow: true,
    });
  };
  return (
    <>
      <Header />

      <section className="w-9/12 mx-auto py-10">
        {/* filterBy job type */}
        <div className="flex justify-between py-3">
          <h1 className="text-center  text-3xl font-bold">
            Jobs {jobs.length}
          </h1>
          <select
            name=""
            id=""
            value={category}
            className="text-black  px-2 focus:outline-none rounded"
            onChange={filterJobs}
          >
            <option value="all">All Jobs</option>
            <option value="intern">Intern</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
          </select>
        </div>
        {/* jobs/ */}
        <div className="">
          {jobs.map((job) => {
            return (
              <div
                key={job._id}
                className="bg-white text-black py-4 px-2 my-3 text-center rounded "
              >
                <h2 className="text-xl">{job.jobTitle}</h2>
                <p className="font-bold py-2 capitalize">
                  salary: {job.salary}
                </p>
                <p className="font-bold pb-4 capitalize"> {job.jobType}</p>
                <button className="bg-slate-700 text-white py-2 px-3 rounded">
                  Read Details
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Jobs;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { jobType } = query;
  if (jobType) {
    const response = await fetch(
      `http://localhost:4030/jobs?jobType=${jobType}`
    );
    const data = await response.json();

    return {
      props: {
        jobs: data.data,
        count: data.count,
      },
    };
  } else {
    const response = await fetch(`http://localhost:4030/jobs`);
    const data = await response.json();

    return {
      props: {
        jobs: data.data,
        count: data.count,
      },
    };
  }
};
