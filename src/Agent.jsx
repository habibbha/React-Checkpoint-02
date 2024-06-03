import React from 'react';

import Card from 'react-bootstrap/Card';
import "./App.css"


const Agent = ({ name, role, nationality , ultimate, imageUrl }) => {
    
    
        return (
          <Card style={{ width: '18rem' }}>
          
            <Card.Body>
              <Card.Title className="title">{name}</Card.Title>
              <Card.Text>
              <strong className="nat">Role:</strong> {role} <br />
                    <strong className="nat">Nationality:</strong> {nationality} <br />
                    <strong className="nat">Ultimate:</strong> {ultimate} <br />
                     <img  src={imageUrl} alt="pic" />
              </Card.Text>
           
            </Card.Body>
          </Card>
        );
      }
      Agent.defaultProps = {
        name: "Unknown Agent",
        role: "Unknown Role",
        nationality: "Unknown Nationality",
        ultimate: "Unknown Ultimate",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl4c5XlLup48PMpmxuYEkrEIhvkgCZcHbcjQ&s"
    };






      export default Agent;