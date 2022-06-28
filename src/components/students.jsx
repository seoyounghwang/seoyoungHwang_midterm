import React, { Component } from 'react';
import Student from './student';

class Students extends Component {

    state = {
        cardInfo : [
            {
              image:
                "s1.png",
              name: "Mike",
              gpa: 3.8
            },
            {
              image:
                "s2.png",
                name: "Manal",
                gpa: 3.6
            },
            {
              image:
                "s3.png",
                name: "Moe",
                gpa: 3.2
            },
            {
              image:
                "s4.png",
                name: "Mary",
                gpa: 2.6
            }
          ],
        
    }
    render() {
        return (
            <div>
                {this.state.cardInfo.map(student=> (
                    <Student key={student.image} student={student}/> 
                ))}
            </div>
        );
    }
}

export default Students;