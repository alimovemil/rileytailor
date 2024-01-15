import React, { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePeckerModal: FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    return (
        <DatePicker
            selected={selectedDate}
            onChange={(date) => {
                setSelectedDate(date);
            }}
            withPortal
            dateFormat="dd.MM.yy"
            selectsRange={false}
        />
    );
};

export default DatePeckerModal;
