import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  // console.log(typeof id);
  // console.log(id, jobs);
  const job = jobs.find((job) => job.id == parseInt(id));
  console.log(job);
  return (
    <div >
      <h2>Job details</h2>
      <div className="grid md:grid-cols-4">
        <div className="grid md:col-span-3 border">
            <h2>part 3</h2>
        </div>
        <div className="grid md:col-span-1 border bg-slate-200 ml-8">
            <h3>part 1</h3>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
