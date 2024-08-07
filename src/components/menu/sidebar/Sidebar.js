import React from 'react';
import './styleSidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const data = [
    {
      status: 'success',
      time: '20 MIN',
      name: 'C.JR. - CONSTRUTORA LTDA.',
      location: 'SP',
      certificate: 'Associado',
      consultation: 'Automática',
    },
    {
      status: 'error',
      time: 'Nunca consultado',
      name: 'ELEICAO 2012',
      location: 'AM',
      certificate: 'Não Associado',
    },
    {
      status: 'error',
      time: 'Nunca consultado',
      name: 'Empresa 3.1',
      location: 'AP',
      certificate: 'Não Associado',
    },
    {
      status: 'success',
      time: '1 HORA',
      name: 'Filial C.Jr Teste',
      location: 'SP',
      certificate: 'Associado',
      consultation: 'Automática',
    },
    {
      status: 'error',
      time: 'Nunca consultado',
      name: 'XPTO',
      location: 'AL',
      certificate: 'Não Associado',
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="search-container">
          <input type="text" placeholder="Buscar Empresa" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="account-summary">
        <h3>Resumo da conta</h3>
      </div>
      <div className="company-list">
        {data.map((item, index) => (
          <div key={index} className={`company-item ${item.status}`}>
            <div className="company-status">
              <span>{item.time}</span>
            </div>
            <div className="company-info">
              <h4>{item.name}</h4>
              <p>{item.location}</p>
              <p>Certificado: {item.certificate}</p>
              {item.consultation && <p>Consulta: {item.consultation}</p>}
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
