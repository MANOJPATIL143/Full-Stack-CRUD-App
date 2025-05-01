const db = require('../db');

// Implement each function:
exports.getAllJobs = (req, res) => {
  db.query('SELECT * FROM jobs', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.getJobById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM jobs WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result[0]);
  });
};

exports.createJob = (req, res) => {
  const { title, company, location, description } = req.body;
  db.query(
    'INSERT INTO jobs (title, company, location, description) VALUES (?, ?, ?, ?)',
    [title, company, location, description],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, ...req.body });
    }
  );
};

exports.updateJob = (req, res) => {
  const { id } = req.params;
  const { title, company, location, description } = req.body;
  db.query(
    'UPDATE jobs SET title=?, company=?, location=?, description=? WHERE id=?',
    [title, company, location, description, id],
    err => {
      if (err) return res.status(500).send(err);
      res.sendStatus(200);
    }
  );
};

exports.deleteJob = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM jobs WHERE id=?', [id], err => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
};
