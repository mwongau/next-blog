import Link from 'next/link';
import Header from "../../Header.js"
import Nav from "../../Nav.js"

export default function Page() {
  return (
    <>
	  <Header />
	  <Nav />
	   
      <br />
	  <h3>Title: About this site</h3>
	  <p>Date: 25-5-2023</p>
	  <p>This is the personal site of M Wong. It is implemented by using Next.js, React, 
	  HTML and CSS.</p>
	  
    </>
  );
}