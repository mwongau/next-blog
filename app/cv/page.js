import Link from 'next/link'
import Nav from '../Nav.js'
import Header from '../Header.js'

export default function CV() {
  return (
    <> 
	<div>
	<Header />
    <Nav />
    </div>	       
	<br />
	
    <div className="CV">
	<br />
	<h2>CV</h2>
	<br />
	<h3>Academic degrees</h3>
	<ul>
	<li>PhD in Computer Science </li>
	<li>M.Sc in Electronic Engineering</li>
	<li>B.Sc (Hons.) in Electrical & Electronic Engineering</li>
	</ul>
	<br />
	<h3>Certificates</h3>
	<ul>
	<li>IBM Data Science Professional Certificate by IBM on Coursera</li>
	<li>Professional Certificate of "DeepLearning.AI TensorFlow Developer", by DeepLearning.AI on Coursera</li>
	</ul>
	<br />	
	<h3>Research specialism</h3>
	<ul>
	<li>Computer vision</li>
	<li>Machine learning</li>
	</ul>
    <br />
	<h3>Skills & experience</h3>
	<ul>
	<li>Programming languages: Python, Java, JavaScript, C++</li>
	<li>Web frameworks: Flask, Django, ReactJS, Next.js, Svelte, SvelteKit, Vue</li>
	<li>Machine learning library: Tensorflow, scikit-learn, Weka</li>
	<li>Computer vision library: OpenCV, scikit-image</li>
	</ul>
	</div>	  
    </>
  );
}


