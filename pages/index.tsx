import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import api from '../api'

export default function index() {

  const [products, setProducts] = useState<TProduct[]>([])


  useEffect(() => {
    fetch(`${api}/api/watch/`)
      .then(responde => responde.json())
      .then(({data, lenght}) => setProducts(data))
  },[])
  
  return (
    <div>
        Hi 
        <Link href="/about">
          About
        </Link>
        <div>
          {products && products.map(w => (
            <div key={w.id}>
              <Link href={`${api}product/${w.id}`}>{w.name}</Link>
            </div>
          ))}
        </div>
    </div>
  )
}
