import Task from "./Task"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
export default function TaskList(){

    const data = [{
        className: 'completed',
        value: 'Completed Task',
        id: 1,
    },
    {
        className: 'editing',
        value: 'Editing Task',
        id: 2,
    },
    {
        value: 'Active Task',
        id: 3,
    }];
    const elements = data.map((item)=>{
        return (
            <Task className = {item.className} value = {item.value} date = {formatDistanceToNow(new Date(), { addSuffix: true })} />
        )
    })
    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}