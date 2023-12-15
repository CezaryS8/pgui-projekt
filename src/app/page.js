import Image from 'next/image'
import styles from './page.module.css'
import Button from '@mui/material/Button';
import CardTest from '../../components/CardTest';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        siema
        <Button variant="contained">Hello world</Button>
        <CardTest />
      </div>
    </main>
  )
}
