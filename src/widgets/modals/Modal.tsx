import React from 'react';
import { IModal } from './interfaces/interfaces';



function Modal(props:IModal):React.ReactElement {
    const { isActive, children, onSwitchModal } = props;



    const styleModal = isActive ? 'w-full h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center' : 'hidden';

    return (
        <>
            <div className={styleModal} onClick={onSwitchModal}>
                {children}
            </div>
        </>
    );
}


export default Modal;
