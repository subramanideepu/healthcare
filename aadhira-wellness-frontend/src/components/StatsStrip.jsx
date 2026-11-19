import React from 'react';

export default function StatsStrip() {
  const stats = [
    { number: '7,000', suffix: '+', label: 'Successful Patient Rehabilitations' },
    { number: '98.4', suffix: '%', label: 'Mobility Restoration Success' },
    { number: '8', suffix: '+', label: 'Years of Clinical Excellence' },
    { number: '100', suffix: '%', label: 'Evidence-Based Treatment' },
  ];

  return (
    <section className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div className="stat-item" key={idx}>
              <div className="stat-number">
                {stat.number}<span className="highlight">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
