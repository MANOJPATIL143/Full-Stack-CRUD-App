import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/JobCard";
import api from "../axiosConfig";
import "../assets/common.css";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    api.get("/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.error(err)).finally(disableLoader());
  }, []);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await api.delete(`/jobs/${id}`);
      setJobs(jobs.filter(job => job.id !== id));
    } catch (err) {
      console.error("Delete Error:", err);
    } finally {
      disableLoader();
    }
  };

  const disableLoader = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }


  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Job Available</h2>
        <button className="btn btn-success" onClick={() => navigate("/add")}>Post Job</button>
      </div>

      {loading ? (
        <div className="text-center">
          <span className="loader"></span>
        </div>
      ) : (
        jobs.length > 0 ? (
          jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onView={() => navigate(`/job/${job.id}`)}
              onEdit={() => navigate(`/edit/${job.id}`)}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <h3 className="text-center">No Job Found</h3>
        )
      )}

    </div>
  );
};

export default JobList;
