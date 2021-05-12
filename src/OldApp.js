import {Component} from "react";
import listStudent from "./components/listStudent";

class App extends Component {
  render() {
  //   const backEnd = [ 
  //     {
  //     fullname: "john",
  //     address: "Manado",
  //     },
  //     {
  //       fullname: "Jane",
  //       address:"Airmadidi",
  //     },
  //     {
  //       fullname: "Bob", 
  //       address: "Tondano",
  //     },
  // ];
  //   const webPro = [
  //     {
  //       fullname: "Smith",
  //       address: "Manado",
  //       },
  //       {
  //         fullname: "Peter",
  //         address:"Airmadidi",
  //       },
  //       {
  //         fullname: "Mayra",
  //         address: "Tondano",
  //       },
  //   ];
    return (
      <>
      <listStudent />
      </>  
    );
  }
}

export default App;