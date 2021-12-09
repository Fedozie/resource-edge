import React from 'react';
import './DashboardMain.css';

const DashboardMain = () => {
    return (
        <main>
            <div className = "main-text">
                <h1>Hello, Ositadinma Nwangwu</h1>
                <p>Welcome and Good to have you back.</p>
            </div>
            <div className = "main-tabs">
                <h3>Things to do</h3>
                <div className = "dashboard-tab">
                    <div>
                        <div className = "empty"></div>
                        <p>
                            Upload your employee performance agreement
                        </p>
                    </div>
                    <button className = "begin">Begin</button>
                </div>
                <div className = "dashboard-tab">
                    <div>
                        <div className = "empty"></div>
                        <p>Start quarterly self review</p>
                    </div>
                    <button className = "resume">Resume </button>
                </div>
            </div>
        </main>
    );
}
 
export default DashboardMain;