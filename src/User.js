// import "./App.css";
// import React, { useEffect } from "react";
// function User(props) {
//   useEffect(() => {
//     console.log("useEffect is called");
//   }, []);
//   return (
//     <div className="App">
//       <h1>User Component {props.countProps}</h1>
//     </div>
//   );
// }
// export default User;

////////////// #30 useEffect with condition | Part 2 | like component did Mount ////////////////

// import "./App.css";
// import React, { useEffect } from "react";
// function App(props) {
//   useEffect(() => {
//     alert("count. is " + props.count);
//   }, [props.count, props.data]);
//   return (
//     <div className="App">
//       <h1>Count Props: {props.count}</h1>
//       <h1>Data Props: {props.data}</h1>
//     </div>
//   );
// }
// export default App;

//////////////// #36 Reuse Component in loop ///////////////

// function User(props) {
//   return (
//     <div>
//       <span>{props.data.name}</span>
//       <span>{props.data.email}</span>
//       <button>Hello {props.data.contact}</button>
//     </div>
//   );
// }
// export default User;

//////////////// #38 Send Data Child to Parent Component ////////////////

function User(props) {
  const data = { name: "shivam singh", email: "shivam@test.com" };
  return (
    <>
      <h2>User Name : </h2>
      <button onClick={() => props.alert(data)}>Click Me</button>
    </>
  );
}

export default User;
