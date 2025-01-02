const Job = ({ job }) => {
  const { id, job_title, logo, job_description, location,salary } = job;
  return (
    <div>
      <div>
        <div className="card glass w-96 p-5">
          <figure>
            <img src={logo} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{job_title}</h2>
            <p>{job_description}</p>
            <span>Salary: {salary}</span>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
