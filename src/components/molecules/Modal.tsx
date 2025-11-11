import React from "react";
import { Modal as AntdModal } from "antd";

interface ModalProps {
  title: string;
  children?: React.ReactNode;
  modalButtonText?: string;
  onOk: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children = undefined,
  onOk,
  modalButtonText = "Submit",
}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={() => handleOpen()}>{modalButtonText}</button>
      <AntdModal
        title={title}
        open={open}
        onOk={onOk}
        onCancel={() => handleCancel()}
        focusTriggerAfterClose
      >
        {children}
      </AntdModal>
    </div>
  );
};

export default Modal;
