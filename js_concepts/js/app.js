import { taskManager } from "./task.js"

const manager = new  taskManager() ;
manager.addtask('JavaScript MOdules');
console.log(manager.tasks);