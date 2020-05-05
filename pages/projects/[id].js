import fetch from "node-fetch";
import Markdown from 'markdown-to-jsx';
import { motion } from "framer-motion";
import Link from "next/link";

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
  <motion.div exit="exit" animate="animate" initial="initial">
    <motion.div variants={stagger}>
      <motion.div className="title-area" variants={fadeInUp}>
        <motion.div variants={fadeInUp} className="container">
          <Link href="/project"><a className="text-light">‹ go back</a></Link>
          <h1 className="text-center text-light font-weight-bold">{props.post.title}</h1>
          <br/>
          <img src={props.post.thumbnail} className="img-fluid shadow-low"/>
        </motion.div>
      </motion.div>
      <motion.div variants={fadeInUp} className="container project-content">
      <Markdown>{props.post.fullcontent}</Markdown>
      </motion.div>
    </motion.div>
  </motion.div>
)





// `getStaticPaths` allows the user to return a list of parameters to
// render to HTML at build time.
export async function getStaticPaths() {
  const res = await fetch(`https://my-json-server.typicode.com/lil-j/liljdevsite2/projects/`)
  const posts = await res.json()
  const paths = posts.map(post =>({
        params: {id: post.id.toString()},
  }))
  return {
    fallback: false,
    paths
  };
}

// pages/blog/[slug].js

// `getStaticProps` gets a `params` object holding the dynamic parameters
// For `/blog/hello-world` it would look like `{ slug: 'hello-world }`
export async function getStaticProps({ params }) {
  console.log(params)
  const res = await fetch(`https://my-json-server.typicode.com/lil-j/liljdevsite2/projects/${params.id}`)
  const post = await res.json()
  const content = await fetch(post.content)
  const contentdone = await content.text()
  post.fullcontent = contentdone;
  return {
    props: {
      post,
    }
  };
}

export default Project;
