import { format } from 'date-fns'
import { useState } from 'react'
import { Button, Card, Col, Row } from "react-bootstrap"
import { HiOutlineTrash } from 'react-icons/hi'
import { useNavigate } from "react-router-dom"
import ConfirmDelete from './modalalert/ConfirmDelete'


const ActivityLists = ({ groups, refetch }) => {
    const navigate = useNavigate()
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)
    const [idDelete, setIdDelete] = useState()
    const [nameDelete, setNameDelete] = useState()

    return (
        <div className="">
            <Row>
                {groups?.sort((a, b) => b.id - a.id).map((group) => (
                    <Col className="col-3" key={group.id}>
                        <Card data-cy="activity-item" className="activity-item shadow-sm" onClick={(e) => {
                            if (e.target !== e.currentTarget) return;
                            navigate(`/todos/${group.id}`)
                        }}>
                            <div className="d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                <Card.Title data-cy="activity-item-title" className="activity-item-title" onClick={(e) => {
                                    if (e.target !== e.currentTarget) return;
                                    navigate(`/todos/${group.id}`)
                                }}>
                                    {group.title}
                                </Card.Title>
                                <div className="card-date d-flex justify-content-between">
                                    <div >
                                        <button data-cy="activity-item-date" className='card-date bg-transparent border-0'>
                                            {format(Date.parse(group.created_at), "dd-MM-yyyy", new Date())}
                                        </button>

                                    </div>

                                    <div>
                                        <Button data-cy="activity-item-delete-button" className='p-0 bg-transparent border-0'><HiOutlineTrash style={{
                                            color: '#000'
                                        }} className="cursor-pointer" onClick={() => {
                                            setIdDelete(group.id);
                                            setNameDelete(group.title)
                                            setShowConfirmDelete(true)

                                        }
                                        } /></Button>
                                    </div>

                                </div>
                            </div>

                        </Card>
                    </Col>

                ))}
            </Row>

            <ConfirmDelete
                showConfirmDelete={showConfirmDelete} setShowConfirmDelete={setShowConfirmDelete} idDelete={idDelete}
                nameDelete={nameDelete}
                refetch={refetch}
            />
        </div >
    )
}

export default ActivityLists