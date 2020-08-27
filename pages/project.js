import {motion, useViewportScroll} from "framer-motion";
import Link from "next/link";
import fetch from "node-fetch";
import Card from "../components/card";
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



const Project = props => (
  <motion.div  exit="exit" animate="animate" initial="initial">
    <motion.div id="about">
      <br/>
      <br/>
      <motion.div variants={stagger} className="about-content">
        <div className="container">
          <motion.div variants={fadeInUp}>
          <Link href="/"><a >‹ go back</a></Link>
            <h1 className="display-1 font-weight-bold">Projects</h1>
            <h4>My recent work- more on my <a href="https://github.com/lil-j">Github</a></h4>
            <br />
            <div className="row">
              {
                props.posts.map(post => (
                    <Card image={post.thumbnail} title={post.title} description={post.description} link={post.link}/>
                ))
              }
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

export default Project;
