import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Dashboard from './components/menu/dashboard/Dashboard';
import XmlRecebidos from './components/menu/xmlloader/XmlRecebidos';
import DetalhesXml from './components/menu/xmlloader/DetalhesXml';
import OcorrenciasNegocio from './components/menu/xmlloader/OcorrenciasNegocio';
import Auditoria from './components/menu/xmlloader/Auditoria';
import OcorrenciasTipoDocFiscais from './components/menu/xmlloader/OcorrenciasTipoDocFiscais';
import OcorrenciasLinhasProdutos from './components/menu/xmlloader/OcorrenciasLinhasProdutos';
import FluxoDocFiscaisEstabelecimento from './components/menu/xmlloader/FluxoDocFiscaisEstabelecimento';
import ControleChegadaEmpresa from './components/menu/xmlloader/ControleChegadaEmpresa';
import DocumentosAtualizadosDia from './components/menu/xmlloader/DocumentosAtualizadosDia';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/xml-recebidos/:chartType/:dataPointIndex" element={<XmlRecebidos />} />
            <Route path="/detalhes-xml/:id" element={<DetalhesXml />} /> {/* Nova rota para detalhes */}
            <Route path="/ocorrencias-negocio/:chartType/:dataPointIndex" element={<OcorrenciasNegocio />} />
            <Route path="/auditoria/:chartType/:dataPointIndex" element={<Auditoria />} />
            <Route path="/ocorrencias-tipo-doc-fiscais/:chartType/:dataPointIndex" element={<OcorrenciasTipoDocFiscais />} />
            <Route path="/ocorrencias-linhas-produtos/:chartType/:dataPointIndex" element={<OcorrenciasLinhasProdutos />} />
            <Route path="/fluxo-doc-fiscais-estabelecimento/:chartType/:dataPointIndex" element={<FluxoDocFiscaisEstabelecimento />} />
            <Route path="/controle-chegada-empresa/:chartType/:dataPointIndex" element={<ControleChegadaEmpresa />} />
            <Route path="/documentos-atualizados-dia/:chartType/:dataPointIndex" element={<DocumentosAtualizadosDia />} />
            {/* Adicione mais rotas conforme necessário */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;