'use client'

import { Button, Space } from 'antd';

function People() {
  // 
  return (
    <div>
      <Space>
        <div>People</div>
        <Button type="primary" href="/people/add">Add</Button>
      </Space>
      <div>
        LIST
        <div><a href='/people/11111'>11111</a></div>
      </div>
    </div>
  )
}

export default People
