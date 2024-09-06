import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Header from "./Header.js"
import Nav from "./Nav.js"

export default function Home() {
  return (
    <div>  
        
	  <div className={styles.header}>
	  <Header />
      <Nav />
      </div>	       
	  <br />
	  
	  <div>	  
	  <h2>Home</h2>	  
	  <br />
	  <p>Welcome to my personal blog. I am a researcher in computer vision and machine learning 
	  with Ph.D in Computer Science, M.Sc and B.Sc(Hons.) in Electrical and Electronic 
	  Engineering. I am also interested in web app development. This site is built by using
	  Next.js, JavaScript, HTML and CSS.</p>
	  <br />
	  <p className={styles.footer}>This site might use cookies to improve the browsing experience of users. If you 
	  continue to use this site, it will be assumed that you agree to the use of cookies.</p> 
      </div>
    </div>
  );
}
