import React from 'react';
import './ModelsCmpStyles.css';
import male from '../../../../assets/models/model_2.jpg';
import female from '../../../../assets/models/model_1.jpg';

const ModelsCmp = () => {
    return (
        <div className="models-cmp-container">
            <div className="mpcmp-title-container">
                <h1 className="mcmp-title">Models</h1>
            </div>
            <div className="mcmp-content-container">
                <div className="mcmp-row">
                    <div className="mcmp-img1-container">
                        <img src={female} alt="" className="female-model-img" />
                    </div>
                    <div className="mcmp-img2-container">
                        <img src={male} alt="" className="male-model-img" />
                    </div>
                </div>
                <div className="mcmp-row">
                    <div className="mcmp-model1-desc-container">
                        <div className="model1-desc">
                            <span className="model1-name">John Doe</span>
                            <span className="model1-height">Height - 6ft</span>
                            <span className="model1-build">Body Type - Athletic</span>
                        </div>
                    </div>
                    <div className="mcmp-model2-desc-container">
                        <div className="model2-desc">
                            <span className="model2-name">John Doe</span>
                            <span className="model2-height">Height - 6ft</span>
                            <span className="model2-build">Body Type - Athletic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelsCmp;