import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div>
        Hi 
        <Link href="/about">
          About
        </Link>
    </div>
  )
}
