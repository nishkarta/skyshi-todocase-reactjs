import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { IconContext } from 'react-icons';
import { GoPrimitiveDot } from 'react-icons/go';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { API } from '../config/api';
import ConfirmDeleteTodo from './modalalert/ConfirmDeleteTodo';
import EditTodo from './modalform/EditTodo';


const TodoItem = ({ todo, refetch }) => {
    const [showConfirmDeleteTodo, setShowConfirmDeleteTodo] = useState(false)
    const [idDeleteTodo, setIdDeleteTodo] = useState()
    const [nameDeleteTodo, setNameDeleteTodo] = useState()

    const [showEdit, setShowEdit] = useState(false)

    const [isChecked, setIsChecked] = useState(!todo.is_active)

    const [checkForm] = React.useState({
        is_active: isChecked,
    });


    const checkResponse = async () => {
        try {
            const response = await API.patch(`todo-items/${todo.id}`, checkForm)
            return response
        } catch (err) {
            console.error(err)
        }

    }

    const handleCheckboxChange = () => {
        try {
            setIsChecked(!isChecked)
            checkResponse()
        } catch (err) {
            console.log(err)
        }
    };

    const [formEdit, setFormEdit] = useState({
        "title": "",
        "priority": "",
    })

    useEffect(() => {
        if (todo) {
            setFormEdit(formEdit => ({
                ...formEdit,
                title: todo.title,
                priority: todo.priority,

            }))
        }
    }, [todo])

    const handleEditChange = (e) => {
        setFormEdit({
            ...formEdit,
            [e.target.name]: e.target.value
        })
    }

    const handleEdit = async (e) => {
        try {
            e.preventDefault()

            const response = await API.patch(`todo-items/${todo.id}`, formEdit)

            refetch()
            setShowEdit(false)
            return response
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Card data-cy="activity-item" className="p-4 mb-3 shadow-sm">
                <div className='d-flex justify-content-between'>
                    <div className="d-flex align-items-center">
                        <div className="form-check me-2 d-flex align-items-center">

                            <input data-cy="todo-item-checkbox" className='form-check-input' type="checkbox" name="is_active" value={todo.is_active} checked={isChecked}
                                onChange={handleCheckboxChange}
                                style={{ width: '20px', height: '20px' }}
                            />

                        </div>
                        <div className="d-flex align-items-center me-2">
                            <IconContext.Provider value={{ color: todo.priority === "very-high" ? "#ED4C5C" : todo.priority === "high" ? "#FFCE31" : todo.priority === "normal" ? "#00A790" : todo.priority === "low" ? "#43C4E3" : "#B01AFF", size: "20px", className: "global-class-name" }}>
                                <GoPrimitiveDot data-cy="todo-item-priority-indicator"
                                />
                            </IconContext.Provider>
                        </div>

                        <div className="d-flex align-items-center me-2" style={{
                            textDecoration: isChecked ? 'line-through' : 'none',
                            color: isChecked ? '#888' : '#000',
                            fontWeight: 500, fontSize: '18px', lineHeight: '27px'
                        }}>
                            {todo.title}
                        </div>
                        <div className="d-flex align-items-center">
                            <IconContext.Provider value={{ color: "#C4C4C4", size: "15px", className: "global-class-name" }}>
                                <HiOutlinePencil data-cy="todo-item-edit-button" onClick={() => setShowEdit(true)} />
                            </IconContext.Provider>

                        </div>
                    </div>
                    <div>
                        <IconContext.Provider
                            value={{ color: "#888", size: "15px", className: "global-class-name" }}
                        >
                            <HiOutlineTrash data-cy="todo-item-delete-button" onClick={
                                () => {
                                    setShowConfirmDeleteTodo(true)
                                    setIdDeleteTodo(todo.id)
                                    setNameDeleteTodo(todo.title)
                                }
                            } />
                        </IconContext.Provider>

                    </div>
                </div>

                <ConfirmDeleteTodo
                    showConfirmDeleteTodo={showConfirmDeleteTodo}
                    setShowConfirmDeleteTodo={setShowConfirmDeleteTodo}
                    idDeleteTodo={idDeleteTodo}
                    nameDeleteTodo={nameDeleteTodo}
                    refetch={refetch}
                />

            </Card>
            <EditTodo showEdit={showEdit} setShowEdit={setShowEdit} formEdit={formEdit} handleEditChange={handleEditChange} handleEdit={handleEdit} />
        </>
    )
}

export default TodoItem