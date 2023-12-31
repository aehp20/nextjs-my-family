'use client'

import { useState, useEffect, useCallback } from 'react';
import { Button, Flex, Typography, Table, Space, Popconfirm, message } from 'antd';
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

async function fetchPeople(currentPage, currentPageSize) {
  const response = await fetch(`/api/people?page=${currentPage}&limit=${currentPageSize}`);
  const people = await response.json();

  return people;
}

function People() {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [selectedPeopleKeys, setSelectedPeopleKeys] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const rowSelection = {
    onChange: (selectedRowKeys) => {
      setSelectedPeopleKeys(selectedRowKeys);
    },
  };

  const confirm = useCallback(async () => {
    const idsArray = selectedPeopleKeys.map((id) => `id=${id}`);
    const idsString = idsArray.join('&');

    const response = await fetch(`/api/people?${idsString}`, {
      method: 'DELETE'
    })
    const deletedResponse = await response.json();

    if (deletedResponse) {
      setSelectedPeopleKeys([]);
      setCanFetchPeople(Date.now());

      message.success('Delete success!');
    }
  }, [selectedPeopleKeys]);

  const handleOnChange = useCallback((pagination) => {
    const { current, pageSize } = pagination;
    setCurrentPage(current);
    setCurrentPageSize(pageSize);
  }, [setCurrentPage, setCurrentPageSize]);

  useEffect(() => {
    setIsFetching(true);
    fetchPeople(currentPage, currentPageSize).then(({items, total}) => {
      setPeople(items.map(person=>({...person, key: person.person_id})));
      setTotalPages(total);
    }).finally(() => setIsFetching(false));
  }, [currentPage, currentPageSize]);

  return (
    <div>
      <Flex justify="space-between">
        <Title level={4}>People</Title>
        <Space>
          {selectedPeopleKeys.length > 0 && (
            <Popconfirm
              title="Delete people"
              description="Are you sure to delete the selected item(s)?"
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" danger>Delete ({selectedPeopleKeys.length})</Button>
            </Popconfirm>
          )}
          <Button type="primary" href="/people/add">Add</Button>
        </Space>
      </Flex>
      <div>
        {people.length > 0 ? (
          <Table
            loading={isFetching}
            rowSelection={{
              type: 'checkbox',
              ...rowSelection,
            }}
            columns={columns}
            dataSource={people}
            pagination={{ position: ['none', 'bottomCenter'], defaultCurrent: currentPage, total: totalPages }}
            onChange={handleOnChange} />
        ) : null}        
      </div>
    </div>
  )
}

export default People
