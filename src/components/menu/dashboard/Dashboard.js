import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar'; 
import './styleDashboard.css';

const Dashboard = () => {
  const [dashboardTitle, setDashboardTitle] = useState('');

  const handleChartClick = (chartIndex, chartTitle) => {
    setDashboardTitle(chartTitle);
  };

  return (
    <div className="dashboard-container">
      <Sidebar onSelectChart={handleChartClick} />
      <div id="dashboard-content">
        {dashboardTitle && (
          <div className="dashboard-title-container">
            <h1 className="dashboard-title">{dashboardTitle}</h1>
            <div className="title-line"></div>
          </div>
        )}
        <div className="account-summary-container">
          <div className="header">
            <h2>Resumo da conta</h2>
            <p>Compilado de todos os CNPJs</p>
            <div className="date-filter">
              <button className="filter-button">Hoje</button>
              <button className="filter-button active">Mês Atual</button>
              <button className="filter-button">Mês Anterior</button>
            </div>
          </div>
          <div className="notification">
            <button className="notification-button">CONSULTE NFES</button>
            <p className="notification-message">
              Sua conta pode ter novas NFEs. Consulte para atualizar suas informações <span>🤔</span>
            </p>
          </div>
          <div className="data-period">
            <p>Dados referentes ao período de 1 a 27 de September</p>
          </div>
          <div className="summary">
            <div className="summary-column">
              <div className="summary-section">
                <h3>NFes Recebidas</h3>
                <div className="summary-details">
                  <div className="summary-item">
                    <span>Total de Notas:</span>
                    <span>64</span>
                  </div>
                  <div className="summary-item">
                    <span>Autorizadas:</span>
                    <span>64</span>
                  </div>
                  <div className="summary-item">
                    <span>Canceladas:</span>
                    <span>0</span>
                  </div>
                </div>
              </div>
              <div className="summary-section">
                <h3>NFes Emitidas</h3>
                <div className="summary-details">
                  <div className="summary-item">
                    <span>Total de Notas:</span>
                    <span>0</span>
                  </div>
                  <div className="summary-item">
                    <span>Autorizadas:</span>
                    <span>0</span>
                  </div>
                  <div className="summary-item">
                    <span>Não Autorizadas:</span>
                    <span>0</span>
                  </div>
                  <div className="summary-item">
                    <span>Canceladas:</span>
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="summary-section division-notes">
              <h3>Divisão de Notas</h3>
              <div className="chart-placeholder">
                {/* Chart content here */}
              </div>
              <div className="note-summary">
                <div className="note-item">
                </div>
                <div className="note-item">
                </div>
                <div className="note-item total">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-placeholder">
          {/* Centralized content here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
