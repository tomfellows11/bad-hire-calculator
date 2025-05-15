
import React, { useState } from "react";

export default function BadHireCalculator() {
  const [role, setRole] = useState("");
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [salary, setSalary] = useState("");
  const [cost, setCost] = useState(null);

  const calculateCost = () => {
    const salaryNum = parseFloat(salary);
    if (isNaN(salaryNum)) return;

    let multiplier = 0.3;
    if (role === "Executive") multiplier = 2.0;
    else if (role === "Senior-level") multiplier = 0.75;
    else if (role === "Mid-level") multiplier = 0.5;
    else multiplier = 0.3;

    const estimatedCost = salaryNum * multiplier;
    setCost(estimatedCost);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
        🎯 What’s a Bad Hire Costing You?
      </h1>
      <p style={{ marginBottom: '2rem', color: '#4b5563', textAlign: 'center' }}>
        Use this quick calculator to estimate the impact of a bad hire — and
        learn how Criteria can help you reduce that risk.
      </p>

      <div style={{ display: 'grid', gap: '1rem' }}>
        <div>
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} style={{ width: '100%', padding: '0.5rem' }}>
            <option value="">Select</option>
            <option>Entry-level</option>
            <option>Mid-level</option>
            <option>Senior-level</option>
            <option>Executive</option>
          </select>
        </div>

        <div>
          <label>Industry</label>
          <select value={industry} onChange={(e) => setIndustry(e.target.value)} style={{ width: '100%', padding: '0.5rem' }}>
            <option value="">Select</option>
            <option>Tech / SaaS</option>
            <option>Healthcare</option>
            <option>Finance</option>
            <option>Retail</option>
            <option>Manufacturing</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label>Company Size</label>
          <select value={companySize} onChange={(e) => setCompanySize(e.target.value)} style={{ width: '100%', padding: '0.5rem' }}>
            <option value="">Select</option>
            <option>1–50</option>
            <option>51–200</option>
            <option>201–1,000</option>
            <option>1,001+</option>
          </select>
        </div>

        <div>
          <label>Average Salary for Role ($)</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <button onClick={calculateCost} style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '0.75rem',
          borderRadius: '0.5rem',
          border: 'none',
          cursor: 'pointer'
        }}>
          Calculate
        </button>

        {cost !== null && (
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem' }}>
            <h2 style={{ color: '#16a34a', fontSize: '1.25rem' }}>Estimated Cost of a Bad Hire:</h2>
            <p style={{ fontSize: '1.125rem' }}>💸 ${cost.toLocaleString()}</p>
            <p style={{ marginTop: '1rem' }}>
              Criteria helps reduce this risk by providing science-backed
              assessments to make better hiring decisions, faster.
            </p>
            <a href="#" style={{ marginTop: '1rem', display: 'inline-block', color: '#2563eb' }}>
              Book a 15-min demo →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
