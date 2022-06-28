import React, { Component } from 'react';

class Student extends Component {
    render() {
        const {image, name, gpa} = this.props.student;
        return (
            <div>
            <img src={"./image/"+image} alt='profile'/>
            <p className="student-name">{name}</p>
            <p className="student-gpa">{gpa}</p>
            <button className="student-grade">Grade</button>
            </div>
        );
    }
}

export default Student;