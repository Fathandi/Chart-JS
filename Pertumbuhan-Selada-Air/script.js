const data = {
  labels: ['Hari 1', 'Hari 2', 'Hari 3', 'Hari 4', 'Hari 5', 'Hari 6', 'Hari 7'],
  datasets: [
    {
      label: 'Panjang Tanaman (cm)',
      data: [0, 1, 1.3, 1.8, 2.8, 3, 3],
      borderColor: '#2563eb',
      backgroundColor: 'rgba(37, 99, 235, 0.2)',
      yAxisID: 'y',
      tension: 0.4
    },
    {
      label: 'Jumlah Helai Daun',
      data: [0, 0, 2, 2, 2, 2, 3],
      borderColor: '#16a34a',
      backgroundColor: 'rgba(22, 163, 74, 0.2)',
      yAxisID: 'y1',
      tension: 0.4
    }
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Grafik Pertumbuhan Selada Air'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Panjang Tanaman (cm)'
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Jumlah Helai Daun'
        },
        grid: {
          drawOnChartArea: false
        }
      }
    }
  }
};

const ctx = document.getElementById('growthChart');
new Chart(ctx, config);
