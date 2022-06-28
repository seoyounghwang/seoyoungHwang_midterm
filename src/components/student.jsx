import React, { Component } from 'react';

import { Card } from 'react-bootstrap';

class Student extends Component {
    render() {
        const {image, name, gpa} = this.props.student;
        return (
            <Card className='col-5  m-1 ' >
                <div className='d-flex justify-content-center'>
                <Card.Img src={"./image/"+image}  style={{width:'150px'}} alt='profile'/>
                </div>
            
            <Card.Body className="">
                
                <Card.Title className="student-name text-center">{name}</Card.Title>
                <Card.Text className="student-gpa text-center">{gpa}</Card.Text>
                <div className='d-flex justify-content-center'>
                <button className="student-grade">Grade</button>
                </div>
                

            </Card.Body>
            </Card>
        );
    }
}

export default Student;