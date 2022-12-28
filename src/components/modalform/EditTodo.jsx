import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const EditTodo = ({ showEdit, setShowEdit, handleEditChange, formEdit, handleEdit }) => {

    return (
        <Modal size="lg" className='p-3' centered show={showEdit} onHide={() => setShowEdit(false)}>

            <Modal.Header className='' closeButton>
                <Modal.Title style={{
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '27px',
                    margin: '10px'
                }}>Edit List Item</Modal.Title>
            </Modal.Header>


            <Form className='w-100' onSubmit={handleEdit}>
                <Modal.Body className="m-3 mb-4">
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='title' style={{
                            fontWeight: 600,
                            fontSize: '12px',
                            lineHeight: '18px',
                            marginBottom: '9px',
                        }}>NAMA LIST ITEM</Form.Label>
                        <Form.Control name='title' value={formEdit?.title} onChange={handleEditChange} className='p-3' type='text' placeholder='Tambahkan nama Activity' required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label
                            style={{
                                fontWeight: 600,
                                fontSize: '12px',
                                lineHeight: '18px',
                                marginBottom: '9px'
                            }}>PRIORITY</Form.Label>
                        <Form.Select
                            name='priority'
                            value={formEdit?.priority}
                            onChange={handleEditChange}
                            className='p-3'
                            style={{ width: '25%' }}
                            required
                        >

                            <option>

                                Choose Priority
                            </option>
                            <option value="very-high">

                                Very High
                            </option>
                            <option value="high">

                                High
                            </option>
                            <option value="normal">

                                Medium
                            </option>
                            <option value="low">

                                Low
                            </option>
                            <option value="very-low">

                                Very Low
                            </option>
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-end m-3'>
                    <fieldset disabled={formEdit.title === "" ? true : false}>
                        <Button type='submit' variant='' className='rounded-pill px-5 py-3' style={{
                            fontWeight: 600,
                            fontSize: '18px',
                            lineHeight: '27px',
                            color: '#FFF',
                            backgroundColor: '#16ABF8'
                        }}>Simpan</Button>
                    </fieldset>

                </Modal.Footer>

            </Form>

        </Modal>
    )
}

export default EditTodo