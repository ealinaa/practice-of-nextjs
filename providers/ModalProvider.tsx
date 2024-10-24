"use client"

import AuthModal from '@/components/AuthModal';
import UploadModal from '@/components/UploadModal';

import  { useEffect, useState } from 'react'



const ModalProvider = ()=> {
    const [isMounted , setIsMounted] = useState(false)
    useEffect(()=> {
        setIsMounted(true)

    }, []);
    if(!isMounted) {
        return null;
    }
  return (

   

   <>
   <AuthModal/>
   <UploadModal/>
{/* <Modal title='Test Modal'
 description='Test Description'
isOpen
onChange={() => {}}>
    Test Children
    </Modal> */}
   </>
  )
}

export default ModalProvider