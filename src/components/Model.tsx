'use client'
import React from 'react'

const Model = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const elementId = (e.target as HTMLDivElement).id

        if (elementId === 'backdrop') {
            onClose()
        }

    }

    if (!isOpen) return null;
    return (
        <div id='backdrop' onClick={handleClose} className='fixed inset-0 bg-opacity-75 backdrop-blur-sm z-50 bg-black flex justify-center items-center'>
            <div className='w-1/2'>
                <div className="bg-white rounded p-3 pt-0">
                    <div className='text-end text-gray-600 text-xl mb-1'><button onClick={onClose} >x</button></div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Model