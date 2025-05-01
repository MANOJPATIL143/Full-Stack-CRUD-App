import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../axiosConfig";

const AddEditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    if (isEdit) {
      api.get(`/jobs/${id}`)
        .then(res => setFormData(res.data))
        .catch(err => console.error("Load Error:", err));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await api.put(`/jobs/${id}`, formData);
      } else {
        await api.post("/jobs", formData);
      }
      navigate("/");
    } catch (err) {
      console.error("Submit Error:", err);
    }
  };

  return (
    <div className="container mt-5">
    <div className="card shadow-lg border-0 p-4">
      <h5 className="mb-4 text-primary fw-semibold">
        {isEdit ? "Edit Job Posting" : "Create New Job"}
      </h5>
      <form onSubmit={handleSubmit}>
        {["title", "company", "location"].map((field) => (
          <div className="mb-2" key={field}>
            <label className="form-label fw-small">
              {field[0].toUpperCase() + field.slice(1)}
            </label>
            <input
              type="text"
              required
              className="form-control form-control-md"
              placeholder={`Enter ${field}`}
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
            />
          </div>
        ))}
  
        <div className="mb-4">
          <label className="form-label fw-small">Description</label>
          <textarea
            required
            className="form-control form-control-lg"
            rows="3"
            placeholder="Enter job description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>
  
        <button className="btn btn-primary btn-md w-100">
          {isEdit ? "Update Job" : "Post Job"}
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default AddEditJob;
