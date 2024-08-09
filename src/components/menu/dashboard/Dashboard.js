import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Chart from 'react-apexcharts';
import './styleDashboard.css';

const commonOptions = {
  chart: {
    type: 'pie',
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 5,
      blur: 5,
      opacity: 0.2,
    },
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -5,
        style: {
          colors: ['#FFF']
        },
      },
      donut: {
        size: '73%',
        labels: {
          show: false,
        },
      },
    },
  },
  labels: [],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200,
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
      },
    },
  }],
  legend: {
    show: false,
  },
  grid: {
    padding: {
      bottom: 1,
    },
  },
  fill: {
    type: 'solid',
  },
  stroke: {
    show: false,
  },
  dataLabels: {
    enabled: true,
    formatter: (val, opts) => {
      return val.toFixed(1) + '%';
    },
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      colors: ['#fff'],
    },
  },
};

const data = [
  {
    series: [70, 22, 28, 45],
    options: {
      ...commonOptions,
      labels: ['Até 1 dia', 'Até 3 dias', 'Até 7 dias', 'Acima 7 dias'],
      colors: ['#375a7f', '#00a65a', '#f39c12', '#dd4b39'],
    },
    title: "XML's Recebidos a (x Dias)"
  },
  {
    series: [34, 23, 3],
    options: {
      ...commonOptions,
      labels: ['Fiscal', 'Suprimentos', 'PCP'],
      colors: ['#375a7f', '#00a65a', '#f39c12'],
    },
    title: "Ocorrências por Área de Negócio"
  },
  {
    series: [23, 16, 9, 9, 15, 9, 17],
    options: {
      ...commonOptions,
      labels: ['Falta Pedido Compra', 'Aprovação', 'Diferença Valor', 'Diferença Quantidade', 'Conversao Un. Medida', 'Falta Ordem Produção', 'Cadastro ERP Datasul'],
      colors: ['#375a7f', '#00a65a', '#f39c12', '#dd4b39', '#00c0ef', '#f39c12', '#8a8f98'],
    },
    title: "Auditoria"
  },
  {
    series: [180, 120, 45],
    options: {
      ...commonOptions,
      labels: ['Nfe', 'CTe', 'NFs'],
      colors: ['#375a7f', '#00a65a', '#f39c12'],
    },
    title: "Ocorrências por Tipo de Doctos Fiscais"
  },
  {
    series: [66, 20, 10, 14, 3, 24],
    options: {
      ...commonOptions,
      labels: ['Matéria Prima', 'Uso e Consumo', 'Aplicação Direta', 'Manutenção', 'Facility', 'Embalagens'],
      colors: ['#375a7f', '#00a65a', '#f39c12', '#dd4b39', '#00c0ef', '#8a8f98'],
    },
    title: "Ocorrências por Linhas de Produtos"
  },
  {
    series: [80, 35, 60],
    options: {
      ...commonOptions,
      labels: ['Contagem', 'Betim', 'Curitiba'],
      colors: ['#375a7f', '#00a65a', '#f39c12'],
    },
    title: "Fluxo Doc. Fiscais por Estabelecimento"
  },
  {
    series: [80, 12, 20],
    options: {
      ...commonOptions,
      labels: ['Em Trânsito', 'Na Empresa', 'Dentro da Fábrica'],
      colors: ['#375a7f', '#00a65a', '#f39c12'],
    },
    title: "Controle Chegada na Empresa"
  },
  {
    series: [80, 12, 20],
    options: {
      ...commonOptions,
      labels: ['Nfe', 'CTe', 'NFSe'],
      colors: ['#375a7f', '#00a65a', '#f39c12'],
    },
    title: "Documentos Atualizados no Dia"
  },
  {
    series: [80, 12, 20],
    options: {
      ...commonOptions,
      labels: ['Nfe', 'CTe', 'NFSe'],
      colors: ['#375a7f', '#00a65a', '#f39c12'],
    },
    title: "Documentos Corrigidos e Não Atualizados"
  },
];

const Dashboard = () => {
  const [dashboardTitle, setDashboardTitle] = useState(data[0].title);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChart, setSelectedChart] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleChartClick = (chartIndex, chartTitle) => {
    setDashboardTitle(chartTitle);
    setSelectedChart(chartIndex);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveFilters = (filters) => {
    setSelectedFilters(filters);
    closeModal();
  };

  const renderSummaryDetails = () => {
    if (selectedChart !== null) {
      const total = data[selectedChart].series.reduce((acc, val) => acc + val, 0);
      return (
        <>
          <div className="summary-item">
            <span>Total de Documentos:</span>
            <span>{total}</span>
          </div>
          {data[selectedChart].series.map((value, index) => (
            <div key={index} className="summary-item">
              <span>{data[selectedChart].options.labels[index]}:</span>
              <span>{value}</span>
            </div>
          ))}
        </>
      );
    }
    return null;
  };

  const renderLegendDetails = () => {
    if (selectedChart !== null) {
      return data[selectedChart].options.labels.map((label, index) => (
        <div key={index} className="summary-item">
          <span style={{ backgroundColor: data[selectedChart].options.colors[index], padding: '0 5px', marginRight: '5px' }}></span>
          <span>{label}</span>
        </div>
      ));
    }
    return null;
  };

  const renderSelectedFilters = () => {
    return Object.entries(selectedFilters).map(([key, value], index) => (
      <div key={index} className="summary-filtros">
        <span>{key}:</span>
        <span>{value}</span>
      </div>
    ));
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
            <h2>Documentos:</h2>
            <div className="date-filter">
              <button className="filter-document-button" onClick={openModal}>
                Filtrar Documento
              </button>
            </div>
          </div>
          <div className="data-period">
            <h3>Filtros Aplicados:</h3>
            <div className="summary-fil">
              {renderSelectedFilters()}
            </div>
          </div>
          <div className="summary">
            <div className="summary-column">
              <div className="summary-section">
                <h3>Valores:</h3>
                <div className="summary-details">
                  {renderSummaryDetails()}
                </div>
              </div>
              <div className="summary-section">
                <h3>Legenda:</h3>
                <div className="summary-details">
                  {renderLegendDetails()}
                </div>
              </div>
            </div>
            {selectedChart !== null && (
              <div className="summary-section division-notes">
                <h3>Gráfico:</h3>
                <div className="chart-placeholder">
                  <Chart
                    options={data[selectedChart].options}
                    series={data[selectedChart].series}
                    type="pie"
                    height="380px"  
                    width="400px"
                  />
                </div>
              </div>
            )}
          </div>
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
                  <select id="filter-estabelecimento">
                    <option value="estab1">Estabelecimento 1</option>
                    <option value="estab2">Estabelecimento 2</option>
                    <option value="estab3">Estabelecimento 3</option>
                  </select>
                </div>
                <div className="filter">
                  <label>Tipo Documento Fiscal:</label>
                  <select id="filter-tipo-doc">
                    <option value="nfe">NFe</option>
                    <option value="nf3e">NF3e</option>
                    <option value="cte">CTe</option>
                    <option value="cteos">CT-e OS</option>
                    <option value="nfse">NFS-e</option>
                  </select>
                </div>
                <div className="filter">
                  <label>Código Fornecedor:</label>
                  <input type="text" id="filter-fornecedor" />
                </div>
                <div className="filter">
                  <label>Dias Pendentes:</label>
                  <input type="number" id="filter-dias-pendentes" />
                </div>
                <div className="filter">
                  <label>Localização:</label>
                  <select id="filter-localizacao">
                    <option value="local1">Localização 1</option>
                    <option value="local2">Localização 2</option>
                    <option value="local3">Localização 3</option>
                  </select>
                </div>
                <div className="filter">
                  <label>Linha de Produtos:</label>
                  <select id="filter-linha-prod">
                    <option value="linha1">Linha 1</option>
                    <option value="linha2">Linha 2</option>
                    <option value="linha3">Linha 3</option>
                  </select>
                </div>
                <div className="filter">
                  <label>Área de Negócio:</label>
                  <select id="filter-area-negocio">
                    <option value="suprimento">Suprimento</option>
                    <option value="fiscal">Fiscal</option>
                    <option value="pcp">PCP</option>
                    <option value="qualidade">Qualidade</option>
                  </select>
                </div>
              </div>
              <button
                className="button-save"
                onClick={() => handleSaveFilters({
                  'Estabelecimento': document.getElementById('filter-estabelecimento').value,
                  'Tipo Documento Fiscal': document.getElementById('filter-tipo-doc').value,
                  'Código Fornecedor': document.getElementById('filter-fornecedor').value,
                  'Dias Pendentes': document.getElementById('filter-dias-pendentes').value,
                  'Localização': document.getElementById('filter-localizacao').value,
                  'Linha de Produtos': document.getElementById('filter-linha-prod').value,
                  'Área de Negócio': document.getElementById('filter-area-negocio').value,
                })}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
