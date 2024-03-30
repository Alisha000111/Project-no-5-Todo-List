import inquirer from "inquirer";
let todos=[];
while(true) {
    let input = await inquirer.prompt([
{
    name:"Todoitem",
    type:"input",
    message:'add todo item in listing'
},
{
name:"addMore",
type:'list',
choices:["yes","no"]
}
    ]);
    const{Todoitem,addMore}=input;
    todos.push(Todoitem);
    if (addMore == "no"){
        console.log("Todolist:");
        for(let i=0;i<todos.length; i++)
        {console.log(todos[i])}
        break;
    }
}
