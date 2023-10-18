'use client'

import { Button, Flex, Space } from 'antd';

function People() {
  // 
  return (
    <div>
      <Flex justify="space-between">
        <div>People</div>
        <Button type="primary" href="/people/add">Add</Button>
      </Flex>
      <div>
        LIST
        <div><a href='/people/11111'>11111</a></div>
      </div>
    </div>
  )
}

export default People
