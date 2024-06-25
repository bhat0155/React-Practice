


const parent=React.createElement("div", {id: "parent"},
[React.createElement("div", {id: "child"}, 
[React.createElement("h1", {}, "I am a h1 tag"), 
React.createElement("h2", {}, "I am an h2 tag")
])], [React.createElement("div", {id: "child2"}, 
[React.createElement("h3", {}, "I am a h3 tag"), 
React.createElement("h4", {}, "I am an h4 tag")
])])

const root= ReactDOM.createRoot(document.getElementById("header"));
console.log(parent)
root.render(parent)