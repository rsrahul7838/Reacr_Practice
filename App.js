// const parent = React.createElement(
//     "div",{id:"parent"},
//     React.createElement(
//         "div", {id:"child"},
//         React.createElement("h2", {id:"dd"}, "hello Parent element")
    
//     )

// );


const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div", {id:"child"},[
        React.createElement("h2", {id:"dd"}, "hello Parent element"),
        React.createElement("h1", {id:"dddd"}, "hello cc element"),
    
]),
React.createElement("div", {id:"child"},[
    React.createElement("h2", {id:"dd"}, "hello Parent element"),
    React.createElement("h1", {id:"dddd"}, "hello cc element"),
])

]);

// const header = React.createElement(
//     "h1", 
// {id:"heading" ,xyz:"dd"},
//  "Hello 8888World!"
//  );

//  console.log(header); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(header);
root.render(parent);