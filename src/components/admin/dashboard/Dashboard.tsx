import React, { FC, useState } from 'react';
import DatePeckerModal from "../../form/DatePeckerModal";
import Calendar from "../../../container/icons/Calendar";
import ReactApexChart from 'react-apexcharts';
import DashboardCenter from "./DashboardCenter";
import DashboardBottom from "./DashboardBottom";

const Dashboard: FC = () => {
    const [activeWeek, setActiveWeek] = useState<string>('today');

    const isWeeks = [
        {
            weeks: 'Сегодня',
            key: 'today'
        },
        {
            weeks: 'Неделя',
            key: 'week'
        },
        {
            weeks: 'Месяц',
            key: 'month'
        },
        {
            weeks: 'Квартал',
            key: 'quarter'
        },
        {
            weeks: 'Год',
            key: 'year'
        },
        {
            weeks: 'Период',
            key: 'period'
        }
    ];

    const chartData = [
        {
            title: "Всего заказов",
            text: 'Заказы',
            span: '17',
            class: 'txt',
            options: {
                chart: {
                    type: 'line' as const,
                    toolbar: {
                        show: false,
                    },
                },
                colors: ['#8BC554'],
                stroke: {
                    width: 2,
                },
                yaxis: {
                    min: 25,
                    max: 50,
                    tickAmount: 1,
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
            },
            series: [
                {
                    name: "Заказы",
                    data: [25, 30, 50],
                },
            ],
        },
        {
            title: "Заказов завершено",
            text: 'Завершено',
            span: '37',
            class: 'txt-item',
            options: {
                chart: {
                    type: 'line' as const,
                    toolbar: {
                        show: false,
                    },
                },
                colors: ['#FDCC35'],
                stroke: {
                    width: 2,
                },
                yaxis: {
                    min: 15,
                    max: 30,
                    tickAmount: 1,
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
            },
            series: [
                {
                    name: "завершено",
                    data: [15, 30],
                },
            ],
        },
        {
            title: "Товаров продано",
            text: 'Продано',
            span: '47',
            class: 'txt-inline',
            options: {
                chart: {
                    type: 'line' as const,
                    toolbar: {
                        show: false,
                    },
                },
                colors: ['#8BC554'],
                stroke: {
                    width: 2,
                },
                yaxis: {
                    min: 35,
                    max: 70,
                    tickAmount: 1,
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
                toolbar: null,
            },
            series: [
                {
                    name: "Продано",
                    data: [55, 40, 35],
                },
            ],
        },
    ];

    return (
        <div className="sidebar-content">
            <div className="sidebar-content-header">
                <h1>Статистика</h1>
            </div>
            <div className="sidebar-content-block">
                <div className="sidebar-content-block-weeks">
                    <div className="sidebar-content-block-weeks-date">
                        {isWeeks.map((item, idx) => (
                            <div
                                key={idx}
                                className={`sidebar-content-block-weeks-date-item ${activeWeek === item.key ? 'active' : ''}`}
                                onClick={() => setActiveWeek(item.key)}
                            >
                                <p>{item.weeks}</p>
                            </div>
                        ))}
                    </div>
                    <div className="sidebar-content-block-weeks-btn">
                        <div className="sidebar-content-block-weeks-btn-right">
                            <Calendar color={'#007BFF'} />
                            <DatePeckerModal />
                        </div>
                        <span>-</span>
                        <div className="sidebar-content-block-weeks-btn-right">
                            <DatePeckerModal />
                        </div>
                    </div>
                </div>
                <div className="sidebar-content-block-order">
                    {chartData.map((chart, index) => (
                        <div key={index} className="sidebar-content-block-order-graph">
                            <h3>{chart.title}</h3>
                            <div className="sidebar-content-block-order-graph-chart">
                                <ReactApexChart
                                    options={chart.options}
                                    series={chart.series}
                                    type="line"
                                    height={185}
                                    width={370}
                                />
                            </div>
                            <div className="sidebar-content-block-order-graph-span">
                                <span>08.10.2023</span>
                                <span>08.10.2023</span>
                            </div>

                            <div className="sidebar-content-block-order-graph-inner">
                                <p className={`${chart.class}`}>{chart.text}</p>
                                <span>{chart.span}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <DashboardCenter/>
            <DashboardBottom/>
        </div>
    );
};

export default Dashboard;
