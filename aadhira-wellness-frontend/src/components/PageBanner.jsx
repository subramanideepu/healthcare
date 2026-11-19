import React from 'react';
import { Link } from 'react-router-dom';

export default function PageBanner({ title, subtitle, breadcrumb }) {
  return (
    <section className="page-header-banner">
      <div className="container">
        <div className="page-banner-content">
          <div className="page-breadcrumbs">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span>{breadcrumb || title}</span>
          </div>
          <h1 className="page-banner-title">{title}</h1>
          {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
