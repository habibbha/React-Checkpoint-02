import React from 'react';
import Agent from "./Agent";
import agents from "./agents";

const AgentsList = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {agents.map((agent, index) => (
                <Agent key={index} {...agent} />
            ))}
        </div>
    );
};

export default AgentsList;