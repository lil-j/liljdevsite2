import {motion, useViewportScroll} from "framer-motion";
import Link from "next/link";
import fetch from "node-fetch";
import Card from "../components/card";
import { GraphQLClient } from 'graphql-request';
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

const graphcms = new GraphQLClient(
    'https://api-us-west-2.graphcms.com/v2/ckh075cadpa2i01xk64mw3z8q/master', {
      headers: {
        authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MDQzMDAyNzgsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NraDA3NWNhZHBhMmkwMXhrNjRtdzN6OHEvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNTg5ZWZhMGItMDNjMC00NWZhLThmZWUtMDEzZGM0Y2VmMzg1IiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.VRpWffUjs_EEYXdcoNIgz5LFZp86BCp2n-9gRC7NeJZRjQHhJgwQ7tLLTPz5D00mkJZ6gvV1VQm3lIgLz1uHl4Yf_x_G72C287u61XnYwRokEpkMQjdZtipElfc7rugWiJn2Tka-9Eqlzb2GwvwktGvXgp7fDtwUZzOQHsmul4Oo5RFHHu6rNbzBmq548TqjLpVKh8bttq8tf8S9ESAB0P4INT7qkmm5c0mylqP1Fpnz9Kkk3Cp2mffaaRv4fpMzKXAJRK1PGLikFoeJ5O1QkvQ6-HsGLFFYS9qWkfht-Ydpu-bDx-XGRMwMbHUouLjM5_24C9Y82etpq0WDSw0qgiwU_JF_a5_whkXoF9Ska5Yig3YVU_bRww_XcH8lprQ0Zfxdet1QfvQah3o_E_pAac4J92EiIys48padI40lSpYEPR7Ftff9s96arJ_cJg1KzY8nkm7phKdB3zfDlkDRLHBKO5ZCLO1BZYkKSBamZ65MEfwYJs4VGxy_AWau8VcCNwYPIwfuOFF4OHA5lgJNC2-PMfgrlOrM3zoDhzqaVPwTuXCRXYn3FuU3LHbkiMDPKvYU25_RgmekmUmjYdNW-mCuP2fQ92Pm2zA49YpyND0ZpoS0-MpksdIFn9wWbBVu9oSOTJS56WF0N_ijqYRntu-K8B5nixPuHESWviH1cDI',
      },
    }

);

export default function Projects({posts}) {
  return <motion.div  exit="exit" animate="animate" initial="initial">
    <Head>
      <title>My Projects | Jake Harper</title>
      <meta name="description" content="Check out what I've worked on"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta charSet="UTF-8"/>
      <meta property="og:title" content="My Projects"/>
      <meta property="og:description" content="Check out what I've worked on"/>
      <meta name="theme-color" content="#43ccb8"/>
      <meta name="msapplication-TileColor" content="#43ccb8"/>
    </Head>
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
                posts.map(post => (
                    <Card image={post.coverImage.url} title={post.title} description={post.excerpt} link={`/projects/${post.slug}`}/>
                ))
              }
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>

  </motion.div>
}

export async function getStaticProps() {
  const { posts } = await graphcms.request(
      `
          {
  posts {
    slug
    title
    tags
    date
    excerpt
    coverImage {
      url
    }
    author {
      name
      id
    }
  }
}
    `
  );
  return {
    revalidate: 60,
    props: {
      posts,
    },
  };
}


