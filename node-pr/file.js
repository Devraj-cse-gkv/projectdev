const fs = require("fs");
// fs.writeFileSync('./index.html' , 'Hello World!');

// fs.writeFile('./index.html' , 'Hello World by devraj!', (err) => {})
// const result = fs.readFileSync("./nav-bar/nav1/index.html" , "utf-8");
// console.log(result);

// fs.writeFileSync('./text.txt', "I am devraj \nI am DEVRAJ");
// fs.readFile('./text.txt', "utf-8", (err, result) => {
//     if (err){
//         console.log("Error : ", err)
//     }else{
//         console.log(result)
//     }
// })

fs.appendFileSync(
    "./text.txt",
    `{"name":"devraj",\n"work":"a atudent"}\n`
)