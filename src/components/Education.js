import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const [results, setResults] = useState([
    { id: 1, courseCode: 'CSC 1101', courseTitle: 'Essential Hardware and Software Concepts', mark: 84, creditUnits: 4, grade: 5 },
    { id: 2, courseCode: 'CSC 1102', courseTitle: 'Fundamentals of Computing', mark: 74, creditUnits: 4, grade: 4 },
    { id: 3, courseCode: 'CSC 1103', courseTitle: 'Structured Programming', mark: 82, creditUnits: 4, grade: 5 },
    { id: 4, courseCode: 'MAT 1101', courseTitle: 'Discrete Mathematics', mark: 81, creditUnits: 3, grade: 5 },
    { id: 5, courseCode: 'ENG 1101', courseTitle: 'Writing and Study Skills', mark: 86, creditUnits: 3, grade: 5 },
    { id: 6, courseCode: 'BIB 1101', courseTitle: 'Understanding the Old Testament', mark: 88, creditUnits: 3, grade: 5 }
  ]);

  const [newResult, setNewResult] = useState({
    courseCode: '',
    courseTitle: '',
    mark: '',
    creditUnits: '',
    grade: ''
  });

  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewResult(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const validateForm = () => {
    if (!newResult.courseCode.trim()) {
      setError('Course Code is required');
      return false;
    }
    if (!newResult.courseTitle.trim()) {
      setError('Course Title is required');
      return false;
    }
    if (!newResult.mark || newResult.mark < 0 || newResult.mark > 100) {
      setError('Mark must be between 0 and 100');
      return false;
    }
    if (!newResult.creditUnits || newResult.creditUnits < 1 || newResult.creditUnits > 5) {
      setError('Credit Units must be between 1 and 5');
      return false;
    }
    if (!newResult.grade || newResult.grade < 1 || newResult.grade > 5) {
      setError('Grade must be between 1 and 5');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    const newId = Math.max(...results.map(r => r.id), 0) + 1;
    const resultToAdd = {
      id: newId,
      courseCode: newResult.courseCode.trim(),
      courseTitle: newResult.courseTitle.trim(),
      mark: parseInt(newResult.mark),
      creditUnits: parseInt(newResult.creditUnits),
      grade: parseInt(newResult.grade)
    };

    setResults(prev => [...prev, resultToAdd]);
    setNewResult({
      courseCode: '',
      courseTitle: '',
      mark: '',
      creditUnits: '',
      grade: ''
    });
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this result?')) {
      setResults(prev => prev.filter(result => result.id !== id));
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="education">
      <div className="education-container" data-aos="fade-up" data-aos-duration="1500">
        <h2>Year 1 Semester 1 Results</h2>
        
        {/* Add New Result Form */}
        {isAdding && (
          <form onSubmit={handleSubmit} className="add-result-form">
            {error && <div className="error-message">{error}</div>}
            <div className="form-row">
              <input
                type="text"
                name="courseCode"
                placeholder="Course Code"
                value={newResult.courseCode}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="courseTitle"
                placeholder="Course Title"
                value={newResult.courseTitle}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="mark"
                placeholder="Mark (0-100)"
                value={newResult.mark}
                onChange={handleInputChange}
                min="0"
                max="100"
                required
              />
              <input
                type="number"
                name="creditUnits"
                placeholder="Credit Units (1-5)"
                value={newResult.creditUnits}
                onChange={handleInputChange}
                min="1"
                max="5"
                required
              />
              <input
                type="number"
                name="grade"
                placeholder="Grade (1-5)"
                value={newResult.grade}
                onChange={handleInputChange}
                min="1"
                max="5"
                required
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="add-btn">Add Result</button>
              <button type="button" className="cancel-btn" onClick={() => {
                setIsAdding(false);
                setError('');
              }}>Cancel</button>
            </div>
          </form>
        )}

        {/* Results Table */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Mark</th>
                <th>Credit Units</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {results.map(result => (
                <tr key={result.id}>
                  <td>{result.courseCode}</td>
                  <td>{result.courseTitle}</td>
                  <td>{result.mark}</td>
                  <td>{result.creditUnits}</td>
                  <td>{result.grade}</td>
                  <td>
                    <button 
                      className="delete-btn"
                      onClick={() => handleDelete(result.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Result Button */}
        <button 
          className="add-result-btn"
          onClick={() => setIsAdding(true)}
        >
          Add New Result
        </button>

        {/* Back Button */}
        <div className="back-btn-container">
          <button className="back-btn" onClick={scrollToTop}>
            Back to Top
          </button>
        </div>
      </div>
    </section>
  );
};

export default Education; 