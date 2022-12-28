import emptyTodo from '../assets/images/todo-empty-state.png'
const EmptyTodoLists = () => {
    return (
        <div data-cy="todo-empty-state" className='d-flex align-item-center justify-content-center'>
            <img className='empty-todo-image' src={emptyTodo} alt="emptytodo" />
        </div>
    )
}

export default EmptyTodoLists