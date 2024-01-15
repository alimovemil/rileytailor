import React, { FC } from 'react';
import Button from "../../../components/form/Button";
import Pen from "../../../container/icons/Pen";

const Setting: FC = () => {
    return (
        <div className="setting">
            <div className="setting-header">
                <h1>Общие настройки</h1>
            </div>
            <div className="setting-content">
                <div className="setting-content-item">
                    <p>Оформление</p>
                    <Button
                        text={<Pen color={'#007BFF'}/>}
                        className="btn-setting"
                    />
                </div>
            </div>
        </div>
    );
};

export default Setting;