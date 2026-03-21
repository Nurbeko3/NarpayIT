import React from 'react';
import { FaUserTie, FaHourglassHalf, FaBriefcase } from 'react-icons/fa';
import '../css/Teachers.css';

function Teachers() {
  const skeletons = [1, 2, 3];

  return (
    <section id="teachers" className="teachers-section">
      <div className="teachers-container">
        <div className="teachers-header">
          <div className="badge-wrap">
            <span className="teachers-badge"><FaBriefcase style={{marginRight: '8px'}} /> Bizning Jamoa</span>
          </div>
          <h2 className="teachers-title">Narpay IT <span className="highlight-text">Ustozlari</span></h2>
          <p className="teachers-subtitle">
            Akademiyamizning barcha yo'nalishlaridagi tajribali va malakali mutaxassislar haqida ma'lumotlar ayni paytda tayyorlanmoqda. Tez orada barcha ustozlarimiz bilan shu sahifada tanishishingiz mumkin!
          </p>
        </div>

        <div className="teachers-grid">
          {skeletons.map((item) => (
            <div key={item} className="teacher-card-placeholder">
              <div className="teacher-avatar-pulse">
                <FaUserTie className="avatar-icon" />
                <div className="pulse-ring"></div>
              </div>
              <div className="teacher-info-skeleton">
                <div className="skeleton-line title-line"></div>
                <div className="skeleton-line desc-line"></div>
                <div className="skeleton-line short-line"></div>
              </div>
              <div className="teacher-badge-loading">
                <FaHourglassHalf className="spin-icon" /> Ma'lumot tayyorlanmoqda...
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teachers;
