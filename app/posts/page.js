import Link from 'next/link';
import Header from "../Header.js"
import Nav from "../Nav.js"

export default function Page() {
  return (
    <>
	  <Header />
      <Nav />	       
	  <br />
	     	
	  <h2>Blog</h2>
      <br />
	  <p>Select post title:</p>
	  <br />
	  <p><Link href="/posts/post1">Creation of blog</Link></p>
      <p><Link href="/posts/post2">About this site</Link></p>
	  <p><Link href="/posts/post3">Software update</Link></p>
	 
    </>
  );
}