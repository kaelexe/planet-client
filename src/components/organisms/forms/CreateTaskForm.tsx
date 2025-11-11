import React from "react";
import { DatePicker, Form, Input, Select, type FormInstance } from "antd";
import type { CreateTaskData } from "../../../store/constants/interfaces/task.interface";
import type { TaskPriority } from "../../../store/constants/enums/task-priority.enum";

interface CreateTaskFormProps {
  form: FormInstance<CreateTaskData>;
  onFinish: (values: CreateTaskData) => void;
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ form, onFinish }) => {
  const createTaskFormInitialValues: CreateTaskData = {
    title: "",
    description: "",
    priority: "normal",
    isComplete: false,
    dateDue: undefined,
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="create-task-form"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={createTaskFormInitialValues}
      autoComplete="off"
    >
      <Form.Item<CreateTaskData>
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your task name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<CreateTaskData> label="Description" name="description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item<CreateTaskData> label="Priority" name="priority">
        <Select<TaskPriority>
          placeholder="Select a priority"
          options={[
            { value: "normal", label: "Normal" },
            { value: "minor", label: "Minor" },
            { value: "high", label: "High" },
            { value: "important", label: "Important" },
          ]}
        />
      </Form.Item>

      <Form.Item<CreateTaskData> name="dateDue" label="Due date">
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>
    </Form>
  );
};

export default CreateTaskForm;
