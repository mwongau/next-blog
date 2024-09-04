import Link from 'next/link'
import styles from './page.module.css'

export default function Nav() {
return (
<div className={styles.nav}>
	  <Link href="/"> Home </Link> | 
	  <Link href="/cv"> CV </Link> | 
	  <Link href="/posts"> Blog </Link> 	   
</div> );
}