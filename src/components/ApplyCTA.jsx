import "../css/applyCTA.css"

import { useNavigate } from "react-router-dom"

import { motion } from "framer-motion"

export default function ApplyCTA(){

    const navigate = useNavigate()

    return(

        <section className="applyCTA" id="apply">

            <motion.div

                className="applyCTAContainer"

                initial={{
                    opacity:0,
                    y:60
                }}

                whileInView={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    duration:1
                }}

                viewport={{
                    once:true
                }}

            >

                <span>
                    START YOUR CAREER
                </span>

                <h1>

                    Ready To Build

                    Your Future With Us?

                </h1>

                <p>

                    Join our creative paint manufacturing team
                    and work with innovation, technology and
                    modern opportunities.

                </p>

                <button onClick={() => navigate("/apply")}>

                    Apply Now

                </button>

            </motion.div>

        </section>
    )
}