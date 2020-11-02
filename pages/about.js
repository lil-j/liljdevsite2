import {motion, useViewportScroll} from "framer-motion";
import Link from "next/link";
import fetch from "node-fetch";
import Card from "../components/card";
import Head from "next/head";
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y:0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  exit: {
    y:80,
    opacity:0,
    transition: {
      duration: .6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.1
    }
  }
}



const About = props => (
  <motion.div  exit="exit" animate="animate" initial="initial">
    <Head>
      <title>About Me | Jake Harper</title>
      <meta name="description" content="It's nice to meet you!"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta charSet="UTF-8"/>
      <meta property="og:title" content="About Me"/>
      <meta property="og:description" content="This is who I am."/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="og:image" content="https://image-aws-us-west-2.vsco.co/24abcc/16303862/5caa7958efaf043c1f7997b3/vsco5caa795abbcaf.jpg"/>
      <meta name="theme-color" content="#43ccb8"/>
      <meta name="msapplication-TileColor" content="#43ccb8"/>
    </Head>
    <motion.div id="about">
      <br/>
      <br/>
      <motion.div variants={stagger} className="about-content">
        <div className="container">
          <motion.div variants={fadeInUp}>
            <Link href="/"><a>‹ go back</a></Link>
            <h1 className="display-1 font-weight-bold">About Me</h1>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="row">
              <div className="col-lg-7 col-sm-12">
                <h4>I love running, taking photos, making videos, trading stocks, and hanging out with friends- but my true passion is computer programming. After starting with making simple python-based 'bots' using the Discord API, I quickly saw it as a business opportunity, and grew upon that for multiple months. A year later I have expanded into different areas of programming such as full-stack web applications and even working with artificial intelligence. I love Next.Js!</h4>
                <br/>
                <h4><img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"/> <a className="text-info" href="https://github.com/lil-j">lil-j</a></h4>
                <h4 className="text-info"><img className="icon" src="https://image.flaticon.com/icons/svg/2111/2111363.svg"/> lilj#0001</h4>
              </div>
              <div className="col-lg-5 col-sm-12">
                <img src="https://image-aws-us-west-2.vsco.co/24abcc/16303862/5caa7958efaf043c1f7997b3/vsco5caa795abbcaf.jpg" className="img-fluid"/>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>

  </motion.div>
)

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch('https://my-json-server.typicode.com/lil-j/liljdevsite2/projects/')
  const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default About;
