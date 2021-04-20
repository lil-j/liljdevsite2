import {motion, useViewportScroll} from "framer-motion";
import Link from "next/link";
import fetch from "node-fetch";
import Card from "../components/card";
import Head from "next/head";
import { useLastFM } from "use-last-fm";
import Image from "next/image";
import Skeleton from 'react-loading-skeleton';

// function CurrentlyPlayingSong(props) {
//   if (status === "connecting" || status === "idle") {
//     return <>🎵 Not listening to anything</>;
//   }
//   else {
//     console.log(song)
//     return (
//         <>
//           🎵 Listening to <strong>{song.name}</strong> by{" "}
//           <strong>{song.artist}</strong>
//         </>
//     );
//   }
// }
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





function About(props){
  const {status, song} = useLastFM("jjaakkeehar", "7e418b7b099dfc200c864d6aa2f637d3");
  return (
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
                  <div className="col-lg-6 col-sm-12 mb-3 mb-lg-0">
                    <h4>I love running, taking photos, making videos, trading stocks, and hanging out with friends- but my true passion is computer programming. After starting with making simple python-based 'bots' using the Discord API, I quickly saw it as a business opportunity, and grew upon that for multiple months. A year later I have expanded into different areas of programming such as full-stack web applications and even working with artificial intelligence. I love Next.Js!</h4>
                    <br/>
                    <h4><img alt="Github" className="icon" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"/> <a className="text-info" href="https://github.com/lil-j">lil-j</a></h4>
                    <h4 className="text-info"><img className="icon" alt="Discord" src="https://image.flaticon.com/icons/svg/2111/2111363.svg"/> lilj#4941</h4>
                    <br/>
                    <br/>
                    {status == "connecting" ? <>
                      <div className="d-none d-lg-block"><Skeleton height={150} width={540}/></div>
                      <div className="d-lg-none d-block"><Skeleton height={500} width={345}/></div>
                    </> : status == "playing"&&<div className="card">
                      <div className="row g-0">
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title font-weight-bold">Playing On Spotify</h5>
                            <p className="card-text">{song.name}</p>
                            <p className="card-text"><small className="text-muted">On <a className="font-weight-bold" href={song.url} target="_blank">{song.album}</a> by <span className="font-italic">{song.artist}</span></small></p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <img src={song.art} className="card-img-top" alt="album art"/>
                        </div>
                      </div>
                      </div>}
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <Image src="/img/flower.jpg" className="img-fluid d-none d-lg-block" alt="Flower Image" width={445} height={667} fill="responsive"/>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
  )
}

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
