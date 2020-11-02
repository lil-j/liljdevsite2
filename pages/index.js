import Particles from "react-particles-js";
import {motion} from "framer-motion";
import Link from "next/link";


const Index = props => (
  <motion.div id="index" exit={{opacity: 0}} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
