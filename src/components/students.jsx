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
          <>
            <p style={{fontWeight: 'bold'}} className='text-center'>Students List</p>
            <div className='conatiner d-flex justify-content-center'>
              <div className="row justify-content-center w-75 " >
                {this.state.cardInfo.map(student=> (
                    <Student className="" key={student.image} student={student}/> 
                ))}
              </div>
            </div>

          </>
        );
    }
}

export default Students;