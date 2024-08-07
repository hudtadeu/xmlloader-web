import React from 'react';
import './styleSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEllipsisH, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const data = [
    {
      title: "XML's Recebidos a (x Dias)",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: '20 MIN',
      timeColor: '#28a745'
    },
    {
      title: "Ocorrências por Área de Negócio",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: 'Sem atividade',
      timeColor: '#dc3545'
    },
    {
      title: "Auditoria",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: '1 HORA',
      timeColor: '#28a745'
    },
    {
      title: "Ocorrências por Tipo de Doc. Fiscais",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: '2 HORAS',
      timeColor: '#28a745'
    },
    {
      title: "Ocorrências por Linhas de Produtos",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: 'Sem atividade',
      timeColor: '#dc3545'
    },
    {
      title: "Fluxo Doc. Fiscais por Estabelecimento",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: '25 MIN',
      timeColor: '#28a745'
    },
    {
      title: "Controle Chegada na Empresa",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: '30 MIN',
      timeColor: '#28a745'
    },
    {
      title: "Documentos Atualizados no Dia",
      statusIcon: faCheckCircle,
      lastActivity: "Última atividade:",
      time: '10 MIN',
      timeColor: '#28a745'
    },

    // Adicione mais dados conforme necessário
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
        <h3>Resumo dos Gráficos</h3>
        <p>Compilado de todos os Gráficos</p>
      </div>
      <div className="company-list">
        {data.map((item, index) => (
          <div key={index} className="chart-item">
            <div className="chart-info">
              <FontAwesomeIcon icon={item.statusIcon} className="status-icon" />
              <span className="last-activity">{item.lastActivity}</span>
              <div className="time" style={{ backgroundColor: item.timeColor }}>
                {item.time}
              </div>
            </div>
            <div className="chart-header">
              <h4>{item.title}</h4>
              <FontAwesomeIcon icon={faEllipsisH} className="chart-menu-icon" />
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
