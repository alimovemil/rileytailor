import React, { FC } from 'react';
import Main from "../pages/main/Main";

const DefaultLayout: FC = () => {

    return (
        <div className="admin-header">
            <Main/>
        </div>
    );
};

export default DefaultLayout;