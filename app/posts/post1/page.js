import Link from 'next/link';
import Header from "../../Header.js"
import Nav from "../../Nav.js"

export default function Page() {
  return (
    <>
	  <Header />
	  <Nav />
	  <br />
	  <h3>Title: Creation of blog</h3>
	  <p>Date: 25-5-2023</p>
	  <p>This blog was created on 25-5-2023.</p>
    </>
  );
}