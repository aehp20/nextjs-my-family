import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/people">People</Link>
        </li>
        <li>
          <Link href="/families">Families</Link>
        </li>
        <li>
          <Link href="/tree-families">Tree families</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
