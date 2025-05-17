import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, PieController, Legend, Tooltip } from 'chart.js';

Chart.register(ArcElement, PieController, Legend, Tooltip);

const PieChart = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const totalCardsRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current && totalCardsRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }
                const data = {
                    labels: ['Active', 'Expired', 'Inactive', 'Blocked', 'Lost'],
                    datasets: [{
                        data: [40, 20, 15, 15, 10],
                        backgroundColor: [
                            '#01A4AF',
                            '#FFBA24',
                            '#014DAF',
                            '#8020E7',
                            '#FF4457'
                        ],
                        borderWidth: 0,
                        borderRadius: 0
                    }]
                };
                chartInstance.current = new Chart(ctx, {
                    type: 'pie',
                    data: data,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    boxWidth: 12,
                                    padding: 20,
                                    usePointStyle: true,
                                    pointStyle: 'circle',
                                    font: {
                                        family: 'Satoshi',
                                        size: 12
                                    }
                                }
                            },
                            title: {
                                display: true,
                                text: 'Card Status Distribution',
                                position: 'top',
                                align: 'start',
                                font: {
                                    size: 16,
                                    family: 'Satoshi',
                                    weight: 'bold'
                                },
                                padding: {
                                    bottom: 10
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function (context) {
                                        return `${context.label}: ${context.raw}%`;
                                    }
                                }
                            }
                        },
                        cutout: '90%'
                    }
                });

                const centerText = `
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="text-center">
              <div class="text-sm text-gray-600">Total Cards</div>
              <div class="text-xl font-semibold">2,450</div>
            </div>
          </div>
        `;
                totalCardsRef.current.innerHTML = centerText;
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="bg-white relative p-6 rounded-lg shadow-sm w-full border border-gray-light-910 h-[300px] flex flex-col">
            <div className="flex-1 relative">
                <canvas ref={chartRef} className="absolute inset-0 w-full h-full"></canvas>
                <div ref={totalCardsRef} className="absolute inset-0"></div>
                <div className='absolute z-50 -top-6 font-semibold text-lg'>Card Status Distribution</div>
            </div>
        </div>
    );
};

export default PieChart;