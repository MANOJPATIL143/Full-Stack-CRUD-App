import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import api from "../axiosConfig";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    api.get(`/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => console.error("Fetch Error:", err));
  }, [id]);

  if (!job) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-5">
    <div className="card shadow-lg border-0 p-4">
      <div className="mb-3">
        <span className="badge bg-primary px-2 py-1 fs-8">{job.type || "Full-Time"}</span>
      </div>
      <h6 className="fw-bold mb-1">{job.title}</h6>
      <h6 className="text-muted mb-4">{job.company} &mdash; {job.location}</h6>
      <hr />
      <p className="text-secondary" style={{ lineHeight: '1.6' }}>{job.description}</p>
      <button className="btn btn-outline-secondary mt-4" onClick={() => navigate("/")}>
        <FaArrowLeft className="me-2" />
        Back to Jobs
      </button>
    </div>
  </div>
  );
};

export default JobDetails;
