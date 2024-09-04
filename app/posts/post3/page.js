import Link from 'next/link';
import Header from "../../Header.js"
import Nav from "../../Nav.js"

export default function Page() {
  return (
    <>
	  <Header />
	  <Nav />	   
      <br />
	  <h3>Title: Software update</h3>
	  <p>Date: 4-9-2024</p>
	  <p>This site has been updated with Next.js 14.</p>	  
    </>
  );
}