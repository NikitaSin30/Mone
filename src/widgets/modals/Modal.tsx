import React from 'react';

interface IPropsModal {
  isActive: boolean;
  onChangeActive: () => void;
  children: React.ReactNode;
};

function Modal(props: IPropsModal): React.ReactElement {
    const { isActive, onChangeActive, children } = props;
    const styleModal = isActive ? 'w-full h-full bg-opacity-20 bg-black  fixed top-0 left-0 flex items-center justify-center' : 'hidden';

    return (
        <>
            <div className={styleModal} onClick={onChangeActive}>
                {children}
            </div>
        </>
    );
}

export default Modal;
