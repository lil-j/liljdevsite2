import fetch from "node-fetch";
import Markdown from 'markdown-to-jsx';
import { motion } from "framer-motion";
import Link from "next/link";
import { GraphQLClient } from 'graphql-request';
import { useRouter } from "next/router";

const graphcms = new GraphQLClient(
    'https://api-us-west-2.graphcms.com/v2/ckh075cadpa2i01xk64mw3z8q/master', {
      headers: {
        authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MDQzMDAyNzgsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NraDA3NWNhZHBhMmkwMXhrNjRtdzN6OHEvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNTg5ZWZhMGItMDNjMC00NWZhLThmZWUtMDEzZGM0Y2VmMzg1IiwianRpIjoiY2thNWoyZW9iMDN0YzAxd2gwZGZkNjdyeSJ9.VRpWffUjs_EEYXdcoNIgz5LFZp86BCp2n-9gRC7NeJZRjQHhJgwQ7tLLTPz5D00mkJZ6gvV1VQm3lIgLz1uHl4Yf_x_G72C287u61XnYwRokEpkMQjdZtipElfc7rugWiJn2Tka-9Eqlzb2GwvwktGvXgp7fDtwUZzOQHsmul4Oo5RFHHu6rNbzBmq548TqjLpVKh8bttq8tf8S9ESAB0P4INT7qkmm5c0mylqP1Fpnz9Kkk3Cp2mffaaRv4fpMzKXAJRK1PGLikFoeJ5O1QkvQ6-HsGLFFYS9qWkfht-Ydpu-bDx-XGRMwMbHUouLjM5_24C9Y82etpq0WDSw0qgiwU_JF_a5_whkXoF9Ska5Yig3YVU_bRww_XcH8lprQ0Zfxdet1QfvQah3o_E_pAac4J92EiIys48padI40lSpYEPR7Ftff9s96arJ_cJg1KzY8nkm7phKdB3zfDlkDRLHBKO5ZCLO1BZYkKSBamZ65MEfwYJs4VGxy_AWau8VcCNwYPIwfuOFF4OHA5lgJNC2-PMfgrlOrM3zoDhzqaVPwTuXCRXYn3FuU3LHbkiMDPKvYU25_RgmekmUmjYdNW-mCuP2fQ92Pm2zA49YpyND0ZpoS0-MpksdIFn9wWbBVu9oSOTJS56WF0N_ijqYRntu-K8B5nixPuHESWviH1cDI',
      },
    }

);

export async function getStaticProps({ params }) {
  const { post } = await graphcms.request(
      `query MyQuery {
        post(where: {slug: "${params.slug}"}) {
        date
        content {
          markdown
        }
        tags
        title
        coverImage {
          url
        }
        author {
          name
          picture {
            url
          }
        }
      }
    }
                  `
  );

  return {
    revalidate: 60,
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(`
    {
  posts {
    slug
  }
}
  `);

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}


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

function Project({post}){
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  } else {
  return (
  <motion.div exit="exit" animate="animate" initial="initial">
    <motion.div variants={stagger}>
      <motion.div className="title-area" variants={fadeInUp}>
        <motion.div variants={fadeInUp} className="container">
          <Link href="/projects"><a className="text-light">‹ go back</a></Link>
          <h1 className="text-center text-light font-weight-bold">{post.title}</h1>
          <br/>
          <img src={post.coverImage.url} className="img-fluid shadow-low"/>
        </motion.div>
      </motion.div>
      <motion.div variants={fadeInUp} className="container project-content">
      <Markdown>{post.content.markdown}</Markdown>
      </motion.div>
    </motion.div>
  </motion.div>
)}}

export default Project;
