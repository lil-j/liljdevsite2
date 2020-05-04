import {motion, useViewportScroll} from "framer-motion";
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


const { scrollYProgress } = useViewportScroll()

const About = props => (
  <motion.div  exit="exit" animate="animate" initial="initial">
    <motion.div id="about">
      <br/>
      <br/>
      <motion.div variants={stagger} className="about-content">
        <div className="container">
          <motion.div variants={fadeInUp}>
            <h1 className="display-1 font-weight-bold">About Me</h1>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="row">
              <div className="col-lg-7 col-sm-12">
                <h4>I love running, taking photos, making videos, and hanging out with friends- but my true passion is computer programming. After starting with making simple python-based 'bots' using the Discord API, I quickly saw it as a business opportunity, and grew upon that for multiple months. A year later I have expanded into different areas of programming such as full-stack web applications and even working with artificial intelligence.</h4>
                <br/>
                <h4><img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"/> <a className="text-info" href="https://github.com/lil-j">lil-j</a></h4>
                <h4 className="text-info"><img className="icon" src="https://image.flaticon.com/icons/svg/2111/2111363.svg"/> lilj#5815</h4>
                <Link href="/"><a>go back ›</a></Link>
              </div>
              <div className="col-lg-5 col-sm-12">
                <img src="https://image-aws-us-west-2.vsco.co/24abcc/16303862/5caa7958efaf043c1f7997b3/vsco5caa795abbcaf.jpg" className="img-fluid"/>
              </div>
            </div>
          </motion.div>
          <br/>
          <br/>
          <motion.div variants={fadeInUp}>
            <h1 className="display-1 font-weight-bold">Projects</h1>
            <motion.path style={{ pathLength: scrollYProgress }}  d="M10 10"/>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
    <br/>
    <br/>
    <br/>    <br/>
        <br/>
        <br/>    <br/>
            <br/>
            <br/>    <br/>
                <br/>
                <br/>    <br/>
                    <br/>
                    <br/>    <br/>
                        <br/>
                        <br/>
  </motion.div>
)

export default About;
