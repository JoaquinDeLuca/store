import { useRouter } from "next/router"


export default function productID() {

   const {query: {id}} = useRouter();
  return (
    <div>
        productID:  {id}
    </div>
  )
}
