import { Component } from "react";


class listStudent extends Component {
    render () {
        const backEnd = [ 
            {
            fullname: "john",
            address: "Manado",
            },
            {
              fullname: "Jane",
              address:"Airmadidi",
            },
            {
              fullname: "Bob",
              address: "Tondano",
            },
        ];
          const webPro = [
            {
              fullname: "Smith",
              address: "Manado",
              },
              {
                fullname: "Peter",
                address:"Airmadidi",
              },
              {
                fullname: "Mayra",
                address: "Tondano",
              },
          ];
        return (
            <div>
            <h3>backEnd Prog</h3>
            <ul>
              {backEnd.map((student) => {
                  return <li>{student.fullname}</li>;
                })
              }
              </ul>
              </div>
        )
    }
}

export default listStudent;