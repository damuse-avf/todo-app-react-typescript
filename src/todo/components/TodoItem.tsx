//import { useContext } from "react"
import { Todo } from "../interfaces/interfaces"
//import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"

interface todoItemProps {
    todo: Todo
}

export const TodoItem = ({todo} : todoItemProps) => {

    //const { toggleTodo} = useContext(TodoContext)
    const {toggleTodo} = useTodos();
    // const handleDbClick = () => {
    //    toggleTodo(todo.id)
    // }

  return (
    <li style={{cursor: 'pointer',
                textDecoration: todo.completed? 'line-through': ''
    }} 
      //onDoubleClick={ handleDbClick}>
      onDoubleClick={ () => toggleTodo(todo.id)}>
      { todo.desc}
    </li>
  )
}

export default TodoItem
