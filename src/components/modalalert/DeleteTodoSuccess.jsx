import { Modal } from "react-bootstrap"
import { IconContext } from "react-icons"
import { FiAlertCircle } from 'react-icons/fi'


const DeleteTodoSuccess = ({ showNotifDelete, setShowNotifDelete }) => {
    return (
        <Modal data-cy="modal-information" size="md" centered show={showNotifDelete} onHide={() => setShowNotifDelete(false)}>

            <Modal.Body className="d-flex align-items-center px-4">
                <IconContext.Provider value={{ color: "#00A790", size: "18px", className: "global-class-name" }}>
                    <FiAlertCircle data-cy="modal-information-icon" className="me-2" />
                </IconContext.Provider>
                <div>
                    <p style={{
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '150%'
                    }} className='m-0' data-cy="modal-information-title" >
                        Item berhasil dihapus</p>
                </div>

            </Modal.Body>
        </Modal>
    )
}

export default DeleteTodoSuccess