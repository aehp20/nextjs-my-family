'use client'

import { Button, DatePicker, Form, Input, message, Space, Select } from 'antd';
import { useRouter } from 'next/navigation';
// import dayjs from 'dayjs';
// , birthday: dayjs('12/10/1981', 'DD/MM/YYYY')

function AddPeople() {
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("onFinish", values)

    message.success('Submit success!');

    // router.push('/people');
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  const onGenderChange = (value) => {
    form.setFieldsValue({ gender: value });
  }

  return (
    <div>
      <div>Add People</div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{ gender: "man" }}
      >
        <Form.Item
          name="first_name"
          label="First name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter a first name" />
        </Form.Item>
        <Form.Item
          name="father_last_name"
          label="Father last name"
        >
          <Input placeholder="Enter a father last name" />
        </Form.Item>
        <Form.Item
          name="mother_last_name"
          label="Mother last name"
        >
          <Input placeholder="Enter a mother last name" />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
        >
          <Select
            defaultValue="man"
            onChange={onGenderChange}
            allowClear
            options={[
              { value: 'man', label: 'Man' },
              { value: 'woman', label: 'Woman' },
              { value: 'other', label: 'Other' },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="birthday"
          label="Birthday"
        >
          <DatePicker format="DD/MM/YYYY" />
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
