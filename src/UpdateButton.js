'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect,useState } from 'react'
import { handleUpdate } from './app/server/api/create'
import { Modal, Button } from 'react-bootstrap'
import { Annie_Use_Your_Telescope } from 'next/font/google'
import UpdateModal from './UpdateModal'
export default function UpdateButton({id}) {

   
    const handleOpen = () =>{
      s
    }

  return (
    <div className='container'>
        <UpdateModal id={id}></UpdateModal>
      <Button className="btn btn-success" onClick={handleOpen} > update</Button>
    </div>
  )
}
