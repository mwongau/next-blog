import styles from './page.module.css'
import Link from 'next/link'

export default function Header() {
  return(    
  <div>
    <div className={styles.header}>
    <h1> M Wong</h1>
    <br />
    <h3>My personal site</h3>
    <br />
    </div>
  
    <div className={styles.nav}>
    <Link href="/"> Home </Link> | 
    <Link href="/cv"> CV </Link> | 
    <Link href="/posts"> Blog </Link> | 
    <Link href="/privacy"> Privacy </Link>       
    </div>
  </div> );
}
