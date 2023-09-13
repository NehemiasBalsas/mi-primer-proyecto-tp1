import Image from 'next/image'
import Contactos from './contacto/page'
import Counter from '@/components/counter'

export default function Home() {
  return (
    <main >
      <Contactos />
      <br></br>
      <Counter />
    </main>
  )
}
