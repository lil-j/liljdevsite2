import { motion, AnimatePresence } from "framer-motion";
import {useState} from "react";
export default function ValorantModal() {
    const [close, setClosed] = useState(false)

    return (
        <AnimatePresence>
            {
                !close && <motion.div
                    initial={{
                        opacity:0,
                        y:50
                    }}
                    animate={{
                        opacity:1,
                        y:0,
                        transition: {
                            delay: 1
                        }
                    }}
                    exit={{
                        opacity:0,
                        y:50
                    }}
                    className="card position-absolute text-dark"
                    style={{"width": "36rem"}}
                >
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">Hey Riot / Valorant Team! 🙋‍♂</h5>
                        <p className="card-text">I did not realize a mockup was heavily recommended when applying for an API key so this page is not that, unfortunately.
                            Rather it is a mirror of my personal website while I begin working on a mockup for you to check out.
                            Feel free to take a look at some of my other projects that are linked on this page if you are interested in a bit more of what I have done.</p>
                        <a onClick={() => setClosed(true)} className="btn btn-primary text-light">View My Page</a>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
        )

}