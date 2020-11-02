import Particles from "react-particles-js";
import {motion} from "framer-motion";
import Link from "next/link";
import Head from 'next/head';


const Index = props => (
  <motion.div id="index" exit={{opacity: 0}} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
          <title>Hi, I'm Jake</title>
          <meta name="description" content="It's nice to meet you!"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta charSet="UTF-8"/>
          <meta property="og:title" content="Hi, I'm Jake"/>
          <meta property="og:description" content="It's nice to meet you!"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="og:image" content="https://image-aws-us-west-2.vsco.co/24abcc/16303862/5caa7958efaf043c1f7997b3/vsco5caa795abbcaf.jpg"/>
          <meta name="theme-color" content="#43ccb8"/>
          <meta name="msapplication-TileColor" content="#43ccb8"/>
      </Head>
    <Particles params={{
      "particles": {
          "number": {
              "value": 160,
              "density": {
                  "enable": false
              }
          },
          "size": {
              "value": 3,
              "random": true,
              "anim": {
                  "speed": 4,
                  "size_min": 0.3
              }
          },
          "line_linked": {
              "enable": false
          },
          "move": {
              "random": true,
              "speed": 1,
              "direction": "top",
              "out_mode": "out"
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "bubble"
              },
              "onclick": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 250,
                  "duration": 2,
                  "size": 0,
                  "opacity": 0
              },
          }
      }}} className="landing-particles"/>
    <div className="landing">
      <motion.div className="landing-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="font-weight-bold display-3">Hi, I'm Jake.</h1>
          <h3>it's nice to meet you 👋</h3>
          <br/>
          <Link href="about"><a className="mr-3">about me ›</a></Link>

          <Link href="projects"><a>my work ›</a></Link>
      </motion.div>
    </div>
  </motion.div>
)

export default Index;
