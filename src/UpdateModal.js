'use client'
import React from 'react'
import { useState } from 'react';
export default function UpdateModal({id}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = (uid) => {
      setUid(uid);
      setShow(true);
    }
    const handlePrepare = () => {
        const formData = {
          name: updateName,
          pass: updatePass,
          uid: id
        }
        console.log(formData);
        handleUpdate(formData)
    }
    
    
    return (
        <div className='container'>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" id="exampleFormControlInput1" onChange={(e) => { setUpdateName(e.target.value) }} placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name='pass' rows="3" onChange={(e) => { setUpdatePass(e.target.value) }} ></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handlePrepare}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
