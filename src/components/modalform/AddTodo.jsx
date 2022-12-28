import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const AddTodo = ({ showAdd, setShowAdd, idGroup, handleAddChange, formAdd, handleAdd }) => {

    return (
        <Modal data-cy="modal-add" size="lg" className='p-3' centered show={showAdd} onHide={() => setShowAdd(false)}>

            <Modal.Header className='' closeButton>
                <Modal.Title
                    data-cy="modal-add-title"
                    style={{
                        fontWeight: 600,
                        fontSize: '18px',
                        lineHeight: '27px',
                        margin: '10px'
                    }}>Tambah List Item</Modal.Title>
            </Modal.Header>


            <Form className='w-100' onSubmit={handleAdd}>
                <Modal.Body className="m-3 mb-4">
                    <Form.Group className='mb-3'>
                        <Form.Label
                            data-cy="modal-add-name-title"
                            htmlFor='title' style={{
                                fontWeight: 600,
                                fontSize: '12px',
                                lineHeight: '18px',
                                marginBottom: '9px',
                            }}>NAMA LIST ITEM</Form.Label>
                        <Form.Control data-cy="modal-add-name-input" name='title' onChange={handleAddChange} className='p-3' type='text' placeholder='Tambahkan nama Activity' required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label
                            data-cy="modal-add-priority-title"
                            style={{
                                fontWeight: 600,
                                fontSize: '12px',
                                lineHeight: '18px',
                                marginBottom: '9px'
                            }}>PRIORITY</Form.Label>
                        <Form.Select
                            data-cy="modal-add-priority-dropdown"
                            name='priority'
                            onChange={handleAddChange}
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
                    <fieldset disabled={formAdd.title === "" ? true : false}>
                        <Button data-cy="modal-add-save-button" type='submit' variant='' className='rounded-pill px-5 py-3' style={{
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

export default AddTodo