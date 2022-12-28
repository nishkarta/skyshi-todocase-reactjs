import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import { TbAlertTriangle } from "react-icons/tb";
import { API } from "../../config/api";
import DeleteSuccess from "./DeleteSuccess";

const ConfirmDelete = ({ showConfirmDelete, setShowConfirmDelete, idDelete, nameDelete, refetch }) => {
    const [showNotification, setShowNotification] = useState(false)
    // const [isLoading, setIsLoading] = useState(false)



    return (
        <>
            <Modal data-cy="modal-delete" size="md" centered show={showConfirmDelete} onHide={() => setShowConfirmDelete(false)}>

                <Modal.Body className="text-center p-5">
                    <IconContext.Provider value={{ color: "#ED4C5C", size: "63px", className: "global-class-name" }}>
                        <TbAlertTriangle data-cy="modal-delete-icon" className="mb-4" />
                    </IconContext.Provider>
                    <p className="modal-delete-title mb-0">Apakah anda yakin menghapus activity
                    </p>
                    <p data-cy="modal-delete-title" className="modal-delete-title fw-bold mb-5">"{nameDelete}"?</p>
                    <i className="fa-solid fa-circle-exclamation text-warning mb-3 w-100 text-center" style={{ fontSize: '5rem' }}></i>
                    <Row className="mx-3">
                        <Col><Button data-cy="modal-delete-cancel-button" variant="light" className="w-100 fw-bold rounded-pill" style={{ color: "#4a4a4a" }} onClick={() => setShowConfirmDelete(false)}>Batal</Button></Col>
                        <Col><Button data-cy="mdoal-delete-confirm-button" variant="danger" className="w-100 fw-bold rounded-pill" onClick={async () => {
                            // setIsLoading(true);
                            const response = await API.delete(`/activity-groups/${idDelete}`);
                            refetch()
                            setShowConfirmDelete(false);
                            setShowNotification(true)
                            // setIsLoading(false)
                            return response
                        }}>Hapus</Button></Col>
                    </Row>
                </Modal.Body>
            </Modal>

            <DeleteSuccess showNotification={showNotification} setShowNotification={setShowNotification}
            />
        </>


    )
}

export default ConfirmDelete