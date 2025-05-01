import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const JobCard = ({ job, onView, onEdit, onDelete }) => (
  <div className="card mb-4 shadow-lg border-0">
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div>
          <h6 className="card-title fw-bold mb-1">{job.title}</h6>
          <h6 className="card-subtitle text-muted">
            {job.company} &bull; {job.location}
          </h6>
        </div>
        <span className="badge bg-secondary">{job.type || "Full-Time"}</span>
      </div>
      <p className="card-text text-muted" style={{ maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {job.description}
      </p>
      <div className="d-flex justify-content-end gap-2 mt-3">
        <button className="btn btn-outline-primary btn-sm" onClick={() => onView(job.id)}>
          <FaEye className="me-1" /> View
        </button>
        <button className="btn btn-outline-warning btn-sm" onClick={() => onEdit(job.id)}>
          <FaEdit className="me-1" /> Edit
        </button>
        <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(job.id)}>
          <FaTrash className="me-1" /> Delete
        </button>
      </div>
    </div>
  </div>
);

export default JobCard;
  