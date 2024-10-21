"use client"

import AuthModal from '@/components/AuthModal';

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