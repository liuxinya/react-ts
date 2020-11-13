import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';
import { UForm } from '../UForm/UForm';
import { UFormModalPropsObj } from '../../interfaces/common';


export function UFormModal(props: UFormModalPropsObj) {
    const [isShow, setIsShow] = useState<boolean>(true);
    const closeHandler = () => {
        setIsShow(false);
    };
    const cancelHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        closeHandler();
        props.modalProps.onCancel && props.modalProps.onCancel(e);
    };
    const okHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        props.modalProps.onOk && props.modalProps.onOk({
            e,
            close: closeHandler
        });
    };
    return (
        <Modal
            title="Base Modal"
            {...props}
            onCancel={e => cancelHandler(e)}
            onOk={e => okHandler(e)}
            visible={isShow}
        >
            <UForm {...props.formProps} data={props.formData}/>
        </Modal>
    );
}