import TodoItem from "./TodoItem"


const TodoLists = ({ todos, refetch, sortBy }) => {
    // console.log(sortBy)
    return (
        <>
            {todos?.sort(sortBy === "newest" ? (a, b) => b.created_at - a.created_at : sortBy === "latest" ? (a, b) => a.created_at - b.created_at : (a, b) => b.id - a.id).map((todo) => (

                <TodoItem
                    key={todo.id}
                    todo={todo}
                    refetch={refetch}

                />
            ))}


        </>

    )
}

export default TodoLists