import { useEffect, useState } from "react";
import HeadSubhead from "../HeadSubhead/HeadSubhead";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength,setDatalength]= useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <h2>jobs are {jobs.length}</h2>
      <HeadSubhead
        heading={"THis is jobs section"}
        subHeading={"this is subheading"}
      ></HeadSubhead>
      <div className="flex flex-column flex-wrap gap-8 justify-center">
        {
            jobs.slice(0,dataLength).map((job) => (
                <Job key={job.id} job={job}></Job>
              ))
        }
      </div>
      <div>
        <button onClick={()=>setDatalength(jobs.length)} className="btn">
            Show all
        </button>
      </div>
    </div>
  );
};

export default Jobs;
