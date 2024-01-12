import React, { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePeckerModal: FC = () => {
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(), null]);
    const [startDate, endDate] = dateRange;

    return (
        <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
                setDateRange(update);
            }}
            withPortal
            dateFormat="dd.MM.yyyy"
        />
    );
};

export default DatePeckerModal;
