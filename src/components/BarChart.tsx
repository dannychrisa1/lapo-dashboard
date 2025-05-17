import React, { useEffect, useRef } from 'react';
import { Chart, BarController, CategoryScale, LinearScale, BarElement, Legend } from 'chart.js';

Chart.register(BarController, CategoryScale, LinearScale, BarElement, Legend);

const BarChart = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                const data = {
                    labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
                    datasets: [
                        {
                            label: 'Personalized',
                            data: [5, 20, 4, 4, 5, 18, 62],
                            backgroundColor: '#014DAF',
                            borderWidth: 0,
                            barThickness: 20,
                            borderRadius: 4
                        },
                        {
                            label: 'Instant',
                            data: [45, 75, 28, 58, 45, 79, 5],
                            backgroundColor: '#CCE2FF',
                            borderWidth: 0,
                            barThickness: 20,
                            borderRadius: 4
                        }
                    ]
                };
                chartInstance.current = new Chart(ctx, {
                    type: 'bar',
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
                                        family: 'Satoshi'
                                    }
                                }
                            },
                            title: {
                                display: true,
                                text: 'Monthly Issuance',
                                font: {
                                    size: 16,
                                    family: 'Satoshi',
                                    weight: 'bold'
                                },
                                padding: {
                                    bottom: 20
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: {
                                    stepSize: 20,
                                    font: {
                                        family: 'satoshi'
                                    }
                                },
                                grid: {
                                    drawOnChartArea: true,
                                    color: '#E5E7EB'
                                },
                                border: {
                                    display: false
                                }
                            },
                            x: {
                                grid: {
                                    display: false,
                                    drawOnChartArea: false
                                },
                                border: {
                                    display: false
                                },
                                ticks: {
                                    font: {
                                        family: 'sans-serif'
                                    }
                                }
                            }
                        },
                        datasets: {
                            bar: {
                                categoryPercentage: 0.8,
                                barPercentage: 0.9
                            }
                        }
                    }
                });
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="relative bg-white border border-gray-light-910 p-6 rounded-lg shadow-sm w-full h-[310px]">
            <canvas ref={chartRef} className="w-full h-full"></canvas>
            <div className='absolute z-30 -top-[1%] font-semibold text-lg'>Monthly Issuance</div>
        </div>
    );
};

export default BarChart;