'use client'

import { useState } from 'react'
import { Menu } from 'antd'
import Link from 'next/link'

const items = [
  {
    label: (<Link href="/">Home</Link>),
    key: 'home'
  },
  {
    label: (<Link href="/people">People</Link>),
    key: 'people'
  },
  {
    label: (<Link href="/families">Families</Link>),
    key: 'families'
  },
  {
    label: (<Link href="/tree-families">Tree families</Link>),
    key: 'tree-families'
  },
];

function Navbar() {
  const [current, setCurrent] = useState('home');

  const onClick = (event) => {
    setCurrent(event.key);
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  )
}

export default Navbar
