import React from 'react';
import './ModelsCmpNewStyles.css';
import male from '../../../../assets/models/model_2.jpg';
import female from '../../../../assets/models/model_1.jpg';

const ModelsCmpNew = () => {
    return (
        <div className="models-new-container">
            <div className="mNew-title-container">
                <h1 className="mNew-title">Models</h1>
            </div>
            <div className="mNew-models-container">
                <div className="mNew-model1">
                    <div className="mNew-model1-img-container">
                        <img src={female} alt="" className="mNew-model1-img" />
                    </div>
                    <div className="mNew-model1-desc-container">
                        <span className="model1-name-container"><p className="model1-name">John Doe</p></span>
                        <span className="model1-height-container"><p className="model1-height">Height - 6ft</p></span>
                        <span className="model1-build-container"><p className="model1-build">Body Type - Athletic</p></span>
                    </div>
                </div>
                <div className="mNew-model2">
                    <div className="mNew-model2-img-container">
                        <img src={male} alt="" className="mNew-model2-img" />
                    </div>
                    <div className="mNew-model2-desc-container">
                        <span className="model2-name-container"><p className="model2-name">John Doe</p></span>
                        <span className="model2-height-container"><p className="model2-height">Height - 6ft</p></span>
                        <span className="model2-build-container"><p className="model2-build">Body Type - Athletic</p></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelsCmpNew;