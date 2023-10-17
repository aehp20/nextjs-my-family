'use client'

import { Button, Form, Input, message, Space } from 'antd';

function People() {
  return (
    <div>
      <div display="flex" flexDirection="row" justifyContent="space-between">
        <div>People</div>
        <a href="/people/add">Add</a>
      </div>
      <div>
        LIST
        <div><a href='/people/11111'>11111</a></div>
      </div>
    </div>
  )
}

export default People
