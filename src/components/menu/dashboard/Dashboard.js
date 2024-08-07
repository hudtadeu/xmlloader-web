import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import Sidebar from '../sidebar/Sidebar'; // Certifique-se de que o caminho está correto
import './styleDashboard.css';

const Dashboard = () => {
  const [selectedChart, setSelectedChart] = useState(null);

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
          formatter: (val, opts) => {
            return opts.w.globals.series[opts.seriesIndex];
          },
          style: {
            colors: ['#FFF']
          },
        },
        donut: {
          size: '73%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '14px',
              fontWeight: 600,
            },
            value: {
              show: true,
              fontSize: '18px',
              fontWeight: 500,
            },
            total: {
              show: true,
              fontSize: '14px',
              fontWeight: 600,
              label: 'Total',
            },
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
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '10px',
      markers: {
        width: 8,
        height: 8,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 2,
      },
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
        return opts.w.globals.series[opts.seriesIndex];
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
  ];

  const handleChartClick = (chartIndex) => {
    setSelectedChart(data[chartIndex]);
  };

  return (
    <div className="dashboard-container">
      <Sidebar onSelectChart={handleChartClick} />
      <div id="dashboard">
        {selectedChart ? (
          <div key={selectedChart.title} className="chart-container">
            <div className="chart-header">
              <h2 className="chart-title">{selectedChart.title}</h2>
            </div>
            <div className="chart-wrapper">
              <Chart options={selectedChart.options} series={selectedChart.series} type="donut" height="400" />
            </div>
          </div>
        ) : (
          <div className="no-chart">
            <p>Selecione um gráfico no menu ao lado para visualizar.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
