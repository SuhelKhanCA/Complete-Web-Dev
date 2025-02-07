const fs = require("fs");

const filePath = "./tasks.json";

// load the file
const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// save tasks
const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({task});
  // save task
    saveTasks(tasks);
    console.log("Task added", task);
};

// list task
const listTasks = () => {
    const tasks = loadTasks();
    tasks.forEach(task => {
        console.log(task);
    });
}
// remove task
const removeTask = (index) => {
    console.log(typeof index)
    let tasks = loadTasks();
    tasks = tasks.filter((task, i) => {
        return i !== index;
    })
    saveTasks(tasks);
    console.log(tasks);
};


const command = process.argv[2];
const arg = process.argv[3];

if (command === "add") {
  // add task
  addTask(arg);
} else if (command === "list") {
  // list task
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(arg));
} else {
  console.log("Command not found");
}
