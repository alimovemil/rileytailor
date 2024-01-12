import React, { FC, useState } from 'react';
import Star from "../../../container/icons/Star";
import Person from "../../../container/icons/Person";

const DashboardCenter: FC = () => {

    const [ isRevenue, setIsRevenue ] = useState<any[]>([
        {
            title: 'Выручка',
            key: 'revenue',
            percent: '+2,4%',
            icon: <Star color={ '#003166' }/>,
            span: '5 690',
            style: {background: 'rgba(0, 171, 87, 0.05)', color: '#00AB57'}
        },
        {
            title: 'Средний чек',
            key: 'revenue1',
            percent: '-0,1%',
            icon: <Star color={ '#003166' }/>,
            span: '150',
            style: {background: 'rgba(255, 0, 0, 0.05)', color: '#FF0000'}
        },
        {
            title: 'Активные пользователи',
            key: 'revenue2',
            percent: '+0,7%',
            icon: <Person color={ '#000000' }/>,
            span: '145',
            style: {background: 'rgba(0, 171, 87, 0.05)', color: '#00AB57'}
        },
    ])

    return (
        <div className="sidebar-content-center">
            { isRevenue.map((item, idx) => (
                <>
                    <div className="sidebar-content-center-top"
                         key={ `sidebar-content-center-top-top-${ idx }` }
                    >
                        <div className="sidebar-content-center-top-percent">
                            <h3>{ item.title }</h3>
                            <p style={ {...item.style} }>{ item.percent }</p>

                        </div>
                        <div className="sidebar-content-center-top-number">
                            { item.icon }
                            <span>{ item.span }</span>
                        </div>
                    </div>

                </>
            )) }
        </div>
    );
};

export default DashboardCenter;