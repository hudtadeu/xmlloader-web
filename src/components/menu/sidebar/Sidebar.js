import React from 'react';
import './styleSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEllipsisH, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ onSelectChart }) => {
  const data = [
    {
      title: "XML's Recebidos a (x Dias)",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: '20 MIN',
      timeColor: '#32b957',
      chartIndex: 0
    },
    {
      title: "Ocorrências por Área de Negócio",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: 'Sem atividade',
      timeColor: '#e55361',
      chartIndex: 1
    },
    {
      title: "Auditoria",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: '1 HORA',
      timeColor: '#32b957',
      chartIndex: 2
    },
    {
      title: "Ocorrências por Tipo de Documento Fiscais",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: '2 HORAS',
      timeColor: '#32b957',
      chartIndex: 3
    },
    {
      title: "Ocorrências por Linhas de Produtos",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: 'Sem atividade',
      timeColor: '#e55361',
      chartIndex: 4
    },
    {
      title: "Fluxo Doc. Fiscais por Estabelecimento",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: '25 MIN',
      timeColor: '#32b957',
      chartIndex: 5
    },
    {
      title: "Controle Chegada na Empresa",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: '30 MIN',
      timeColor: '#32b957',
      chartIndex: 6
    },
    {
      title: "Documentos Atualizados no dia",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: '10 MIN',
      timeColor: '#32b957',
      chartIndex: 7
    },
    {
      title: "Documentos Corrigidos e Não Atualizados",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: '5 MIN',
      timeColor: '#32b957',
      chartIndex: 8
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="search-container">
          <input type="text" placeholder="Buscar atividades" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="account-summary">
        <h3>Resumo de Atividades</h3>
        <p>Compilado com os Gráficos</p>
      </div>
      <div className="company-list">
        {data.map((item, index) => (
          <div key={index} className="chart-item" onClick={() => onSelectChart(item.chartIndex, item.title)}>
            <div className="chart-info">
              <FontAwesomeIcon icon={item.statusIcon} className="status-icon" />
              <span className="last-activity">{item.lastActivity}</span>
              <div className="time" style={{ backgroundColor: item.timeColor }}>
                {item.time}
              </div>
            </div>
            <div className="chart-header">
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="no-more-companies">
      </div>
    </aside>
  );
};

export default Sidebar;
