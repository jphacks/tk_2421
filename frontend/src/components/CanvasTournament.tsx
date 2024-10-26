import React from 'react';
import '../assets/style/CanvasTournament.css';

const CanvasTournament: React.FC = () => {
    return (
        <div className="canvas-tournament-container">
            <div className="left-match">
                <div className="dot-line">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div>
                <div className="dot-line">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div>
                <div className="vertical-line"></div>
            </div>
            <div className="left-match">
                <div className="dot-line">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div>
                <div className="dot-line">
                    <div className="dot"></div>
                    <div className="line"></div>
                </div>
                <div className="vertical-line"></div>
            </div>
        </div>
    );
};

export default CanvasTournament;
