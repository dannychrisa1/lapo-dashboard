import React, { useEffect, useRef } from 'react';
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement, Legend } from 'chart.js';

Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Legend);

const LineChart = () => {
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
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Income',
                        data: [45, 40, 50, 40, 40, 25, 60],
                        borderColor: '#4DAF01',
                        backgroundColor: 'transparent',
                        borderWidth: 3,
                        pointRadius: 5,
                        pointBackgroundColor: '#014DAF',
                        pointBorderColor: '#4DAF01',
                        pointBorderWidth: 2,
                        tension: 0.4
                    }]
                };

                chartInstance.current = new Chart(ctx, {
                    type: 'line',
                    data: data,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: "This Week's Income",
                                position: 'top',
                                align: 'start',
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
                                        family: 'Satoshi'
                                    }
                                },
                                grid: {
                                    color: '#E5E7EB'
                                },
                                border: {
                                    display: false
                                }
                            },
                            x: {
                                grid: {
                                    display: false
                                },
                                border: {
                                    display: false
                                },
                                ticks: {
                                    font: {
                                        family: 'Satoshi'
                                    }
                                }
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
        <div className="bg-white relative border border-gray-light-910 py-6 px-6 rounded-lg shadow-sm w-full h-[300px]">
            <canvas ref={chartRef} className="w-full h-full"></canvas>
            <div className='absolute z-30 -top-[1%] font-semibold text-lg'>This Week’s Income</div>
        </div>
    );
};

export default LineChart;