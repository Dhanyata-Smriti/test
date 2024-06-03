import {formatDate} from "./utils.js" ;

export class taskManager{
    constructor(){
        this.tasks =[];
    }
    addtask(description){
        const task={
            description,
            date:formatDate(new Date()),
            completed:false,
        };
        this.tasks.push(task);

    }
}