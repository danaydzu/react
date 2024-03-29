import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {
    const rootClasses = [cl.MyModal]
    if (visible){
        rootClasses.push(cl.active)
    }

    return (
        <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}

            </div>
        </div>
    );
};

export default MyModal;