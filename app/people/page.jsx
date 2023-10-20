'use client'

import { useState, useEffect } from 'react';
import { Button, Flex, Typography, Table, Space } from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link';

const { Title } = Typography;

const columns = [
  {
    title: 'First name',
    dataIndex: 'first_name',
    render: (text, { person_id }) => <Link href={`/people/${person_id}`}>{text}</Link>,
  },
  {
    title: 'F. last name',
    dataIndex: 'father_last_name',
  },
  {
    title: 'M. last name',
    dataIndex: 'mother_last_name',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    render: (text) => text === 'm' ? 'Man' : 'Woman',
  },
  {
    title: 'Birthday',
    dataIndex: 'birthday',
    render: (text) => text ? dayjs(text).format('DD/MM/YYYY') : '',
  }
];

async function fetchPeople() {
  const response = await fetch('/api/people');
  const people = await response.json();

  return people;
}

function People() {
  const [people, setPeople] = useState([]);
  const [selectedPeopleKeys, setSelectedPeopleKeys] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys) => {
      setSelectedPeopleKeys(selectedRowKeys);
    },
  };

  const onHandleDelete = () => {
    console.log('onHandleDelete');
  }

  useEffect(() => {
    fetchPeople().then((people) => {
      setPeople(people.map(person=>({...person, key: person.person_id})));
    });
  }, []);

  return (
    <div>
      <Flex justify="space-between">
        <Title level={4}>People</Title>
        <Space>
          {selectedPeopleKeys.length > 0 && (
            <Button type="primary" danger onClick={onHandleDelete}>Delete</Button>
          )}
          <Button type="primary" href="/people/add">Add</Button>
        </Space>
      </Flex>
      <div>
        {people.length > 0 ? (
          <Table
            rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }}
            columns={columns}
            dataSource={people} />
        ) : null}        
      </div>
    </div>
  )
}

export default People
