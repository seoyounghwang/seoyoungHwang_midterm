import React, { Component } from 'react';

class Student extends Component {
    render() {
        const {image, name, gpa} = this.props.student;
        return (
            <>
            <img src={"./image/"+image} alt='profile'/>
            <p className="student-name">{name}</p>
            <p className="student-gpa">{gpa}</p>
            </>
        );
    }
}

export default Student;