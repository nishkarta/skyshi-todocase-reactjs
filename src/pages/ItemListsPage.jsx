import { useEffect, useState } from "react"
import { IconContext } from "react-icons"
import { AiOutlinePlus } from "react-icons/ai"
import { HiArrowDown, HiArrowUp, HiOutlinePencil } from 'react-icons/hi'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { RiSortDesc, RiSortAsc } from 'react-icons/ri'
import { ImSortAlphaAsc, ImSortAlphaDesc } from 'react-icons/im'
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import EmptyTodoLists from "../components/EmptyTodoLists"
import TodoLists from "../components/TodoLists"
import AddTodo from "../components/modalform/AddTodo"
import { API } from "../config/api"
import { Dropdown } from "react-bootstrap"


const ItemListsPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [sortBy, setSortBy] = useState()

    const [showAdd, setShowAdd] = useState(false)


    const [isEditing, setIsEditing] = useState(false)


    const [form, setForm] = useState({
        title: "",
    })



    let { data: selectedGroup, refetch: refetchGroup } = useQuery('groupCache', async () => {
        const response = await API.get(`activity-groups/${params.id}`)
        return response.data
    })


    useEffect(() => {
        if (selectedGroup) {
            setForm(form => ({
                ...form,
                title: selectedGroup.title,
            }))
        }
    }, [selectedGroup])


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            const response = await API.patch(`activity-groups/${params.id}`, form)

            refetchGroup()

            setIsEditing(false)
            return response
        } catch (err) {
            console.log(err)
        }
    }

    const enterEditMode = () => {
        setIsEditing(true)
    }

    const [formAdd, setFormAdd] = useState({
        activity_group_id: params.id,
        title: "",
        is_active: 1,
        priority: ''
    })

    // console.log(formAdd)

    const handleAddChange = (e) => {
        setFormAdd({
            ...formAdd,
            [e.target.name]: e.target.value,
        })
    }

    const handleAdd = async (e) => {
        try {
            e.preventDefault()

            const response = await API.post('todo-items', formAdd)

            refetch()

            setShowAdd(false)

            return response
        } catch (err) {
            console.error(err)
        }
    }







    let { data: todos, refetch } = useQuery('todoListCache', async () => {
        const response = await API.get(`/todo-items?activity_group_id=${params.id}`)
        return response.data.data
    })




    useEffect(() => {
        refetch()
        refetchGroup()
    }, [refetch, refetchGroup])


    return (
        <div >
            <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: "55px" }}>
                <div className="d-flex align-items-center">
                    <h1 className="me-3">
                        <MdOutlineKeyboardArrowLeft data-cy="todo-back-button" onClick={() => navigate('/')} />

                    </h1>
                    <h1 data-cy="todo-title" className="group-title me-3">

                        {!isEditing &&
                            <>
                                {selectedGroup?.title !== undefined ? selectedGroup.title : "Activity Title"}
                            </>


                        }

                        {isEditing && <form onSubmit={handleSubmit}>
                            <input type="text" name="title" value={form?.title} onChange={handleChange} placeholder="masuk edit mode" className="bg-transparent group-edit-mode" autoFocus />
                        </form>}
                    </h1>
                    <h3><HiOutlinePencil data-cy="todo-title-edit-button" style={{ color: '#a4a4a4' }} onClick={() => enterEditMode(selectedGroup)} />

                    </h3>
                </div>
                <div className="d-flex align-items-center">
                    <Dropdown className="me-3">
                        <Dropdown.Toggle data-cy="todo-sort-button" variant="transparent">
                            <IconContext.Provider value={{ color: "#888", size: "20px", className: "global-class-name" }}>
                                <HiArrowUp data-cy="tabler:arrows-sort" />
                                <HiArrowDown data-cy="tabler:arrow-sort" />
                            </IconContext.Provider>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item data-cy="sort-selection" className="d-flex" onClick={() => setSortBy('newest')}>
                                <div className="col-3">
                                    <IconContext.Provider value={{ color: "#16ABF8", size: "15px", className: "global-class-name" }}>
                                        <RiSortDesc />
                                    </IconContext.Provider>

                                </div>
                                <div className="col-9">
                                    <span className="col-9" style={{
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        color: ' #4A4A4A'
                                    }}>
                                        Terbaru
                                    </span>
                                </div>

                            </Dropdown.Item>
                            <Dropdown.Item data-cy="sort-selection" className="d-flex" onClick={() => setSortBy('oldest')}>

                                <div className="col-3">
                                    <IconContext.Provider value={{ color: "#16ABF8", size: "15px", className: "global-class-name" }}>
                                        <RiSortAsc />
                                    </IconContext.Provider>

                                </div>
                                <div className="col-9">
                                    <span className="col-9" style={{
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        color: ' #4A4A4A'
                                    }}>
                                        Terlama
                                    </span>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item data-cy="sort-selection" className="d-flex" onClick={() => setSortBy('az')}>
                                <div className="col-3">
                                    <IconContext.Provider value={{ color: "#16ABF8", size: "15px", className: "global-class-name" }}>
                                        <ImSortAlphaAsc />
                                    </IconContext.Provider>

                                </div>
                                <div className="col-9">
                                    <span className="col-9" style={{
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        color: ' #4A4A4A'
                                    }}>
                                        AZ
                                    </span>
                                </div>

                            </Dropdown.Item>
                            <Dropdown.Item data-sy="sort-selection" className="d-flex" onClick={() => setSortBy('za')}>
                                <div className="col-3">
                                    <IconContext.Provider value={{ color: "#16ABF8", size: "15px", className: "global-class-name" }}>
                                        <ImSortAlphaDesc />
                                    </IconContext.Provider>
                                </div>
                                <div className="col-9">
                                    <span className="col-9" style={{
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        color: ' #4A4A4A'
                                    }}>
                                        Z-A
                                    </span>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item data-cy="sort-selection" className="d-flex me-3" onClick={() => setSortBy('unfinished')}>
                                <div className="col-3">
                                    <IconContext.Provider value={{ color: "#16ABF8", size: "15px", className: "global-class-name" }}>
                                        <HiArrowUp className="" />
                                        <HiArrowDown className="" />
                                    </IconContext.Provider>
                                </div>
                                <div >
                                    <span className="col-9" style={{
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        color: ' #4A4A4A'
                                    }}>
                                        Belum Selesai
                                    </span>
                                </div>

                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div>
                        <button data-cy="todo-add-button" onClick={() => setShowAdd(true)} className=" activity-add-button rounded-pill" >
                            <AiOutlinePlus />
                            Tambah</button>

                    </div>

                </div>
            </div>

            {todos?.length === 0 ? <EmptyTodoLists /> : <TodoLists sortBy={sortBy} todos={todos} refetch={refetch} />}



            <AddTodo showAdd={showAdd} setShowAdd={setShowAdd} formAdd={formAdd} handleAddChange={handleAddChange} handleAdd={handleAdd} />


        </div>
    )
}

export default ItemListsPage