import styles from "./page.module.css";
import Link from 'next/link';
import Header from "./Header.js"
export default function Home() {
  return (
    <div>  
	  <h2>Home</h2>	  
	  <br />
	  <p>Welcome to the personal site of M. Wong. I am a researcher in computer vision and 
	  machine learning with Ph.D in Computer Science, M.Sc and B.Sc(Hons.) in Electrical and 
	  Electronic Engineering. I am also interested in web app development. This site is built 
	  by using Next.js, React.js, JavaScript, HTML and CSS. Hosting is done by Vercel.</p>
	  <br />
	  <p className={styles.footer}>This site might use cookies to improve the browsing experience
	  of users. If you continue to use this site, it will be assumed that you agree to the use 
	  of cookies.</p> 
    </div>
  );
}
