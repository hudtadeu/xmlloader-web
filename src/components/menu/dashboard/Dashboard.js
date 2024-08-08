import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './styleDashboard.css';

const Dashboard = () => {
  const [dashboardTitle, setDashboardTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChartClick = (chartIndex, chartTitle) => {
    setDashboardTitle(chartTitle);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            <h2>Resumo dos Documentos</h2>
            <div className="date-filter">
              <button className="filter-document-button" onClick={openModal}>
                Filtrar Documento
              </button>
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
                <h3>Total:</h3>
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
                <h3>Legenda:</h3>
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
              <h3>Gráfico</h3>
              <div className="chart-placeholder">
                {/* Chart content here */}
              </div>
              <div className="note-summary">
                <div className="note-item"></div>
                <div className="note-item"></div>
                <div className="note-item total"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-placeholder">
          {/* Centralized content here */}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className="chart-title-modal">Filtrar Documento</h2>
            <div className="modal-body">
              <div className="filters">
                <div className="filter">
                  <label>Estabelecimento:</label>
                  <select>
                    <option value="estab1">Estabelecimento 1</option>
                    <option value="estab2">Estabelecimento 2</option>
                    <option value="estab3">Estabelecimento 3</option>
                  </select>
                </div>
                <div className="filter">
                  <label>Tipo Documento Fiscal:</label>
                  <select>
                    <option value="nfe">NFe</option>
                    <option value="nf3e">NF3e</option>
                    <option value="cte">CTe</option>
                    <option value="cteos">CT-e OS</option>
                    <option value="nfse">NFS-e</option>
                  </select>
                </div>
                <div className="filter">
                  <label>Código Fornecedor:</label>
                  <input type="text" />
                </div>
                <div className="filter">
                  <label>Dias Pendentes:</label>
                  <input type="number" />
                </div>
                <div className="filter">
                  <label>Localização:</label>
                  <select>
                    <option value="local1">Localização 1</option>
                    <option value="local2">Localização 2</option>
                    <option value="local3">Localização 3</option>
                  </select>
                </div>
                <div className="filter">
                  <label>Linha de Produtos:</label>
                  <select>
                    <option value="linha1">Linha 1</option>
                    <option value="linha2">Linha 2</option>
                    <option value="linha3">Linha 3</option>
                  </select>
                </div>
                <div className="filter">
                  <label>Área de Negócio:</label>
                  <select>
                    <option value="suprimento">Suprimento</option>
                    <option value="fiscal">Fiscal</option>
                    <option value="pcp">PCP</option>
                    <option value="qualidade">Qualidade</option>
                  </select>
                </div>
              </div>
              <button className="button-save">Salvar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
