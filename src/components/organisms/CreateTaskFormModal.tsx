import React from "react";
import { Form, Alert, notification } from "antd";
import Modal from "../molecules/Modal";
import CreateTaskForm from "./forms/CreateTaskForm";
import type { CreateTaskData } from "../../store/constants/interfaces/task.interface";
import { formatDate } from "../../utils/date-time.util";
import { useCreateTaskMutation } from "../../store/services/tasksApi";

const CreateTaskFormModal: React.FC = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification(); // ✅ hook setup
  const [createTask] = useCreateTaskMutation();

  const openNotification = () => {
    api.open({
      message: "Task Created",
      description: "Your task has been successfully created.",
      duration: 3,
      placement: "bottomRight",
    });
  };

  const handleFinish = (values: CreateTaskData) => {
    if (values.dateDue) {
      values.dateDue = new Date(
        formatDate(values.dateDue.toISOString()).fullDateTime
      );
    }

    createTask({
      ...values,
      dateDue: values.dateDue ?? undefined,
    }).then(() => form.resetFields());
  };

  const handleOk = async () => {
    try {
      await form.validateFields();
      form.submit();
      openNotification();
    } catch (error) {
      console.error("Form validation failed:", error);
    }
  };

  return (
    <>
      {contextHolder}

      <Modal title="Create Task" modalButtonText="Create Task" onOk={handleOk}>
        <Alert
          message="Please fill out the form to create a new task."
          type="info"
          banner
        />
        <CreateTaskForm form={form} onFinish={handleFinish} />
      </Modal>
    </>
  );
};

export default CreateTaskFormModal;
