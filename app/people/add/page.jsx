'use client'

import { Button, Form, Input, message, Space } from 'antd';
import { useRouter } from 'next/navigation';

function AddPeople() {
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("onFinish", values)

    message.success('Submit success!');

    router.push('/people');
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  return (
    <div>
      <div>Add People</div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="firstname"
          label="Firstname"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter a firstname" />
        </Form.Item>
        <Form.Item
          name="fatherLastName"
          label="Father lastname"
        >
          <Input placeholder="Enter a father lastname" />
        </Form.Item>
        <Form.Item
          name="motherLastName"
          label="Mother lastname"
        >
          <Input placeholder="Enter a mother lastname" />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddPeople
