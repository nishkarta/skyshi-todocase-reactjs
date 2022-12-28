import { format } from 'date-fns'
import { useState } from 'react'
import { Card, Col, Row } from "react-bootstrap"
import { HiOutlineTrash } from 'react-icons/hi'
import { useNavigate } from "react-router-dom"
import ConfirmDelete from './modalalert/ConfirmDelete'


const ActivityLists = ({ groups, refetch }) => {
    const navigate = useNavigate()
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)
    const [idDelete, setIdDelete] = useState()
    const [nameDelete, setNameDelete] = useState()

    return (
        <div data-cy="activity-item" className="">
            <Row>
                {groups?.sort((a, b) => b.id - a.id).map((group) => (
                    <Col className="col-3" key={group.id}>
                        <Card className="activity-item shadow-sm">
                            <div className="d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                <Card.Title data-cy="activity-item-title" onClick={() => {
                                    navigate(`/todos/${group.id}`)
                                }} className="activity-item-title">
                                    {group.title}
                                </Card.Title>
                                <div className="card-date d-flex justify-content-between">
                                    <div >
                                        <span data-cy="activity-item-date">
                                            {format(Date.parse(group.created_at), "dd-MM-yyyy", new Date())}
                                        </span>

                                    </div>

                                    <div>
                                        <span data-cy="activity-item-delete-button" ><HiOutlineTrash className="cursor-pointer" onClick={() => {
                                            setIdDelete(group.id);
                                            setNameDelete(group.title)
                                            setShowConfirmDelete(true)

                                        }
                                        } /></span>
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
        </div>
    )
}

export default ActivityLists