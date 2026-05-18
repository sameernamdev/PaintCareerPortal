import "../css/hero.css"

import { motion } from "framer-motion"

import { FaArrowRight } from "react-icons/fa"

export default function Hero(){

    return(

        <section className="heroSection" id="home">

            {/* VIDEO */}

            <video
                autoPlay
                muted
                loop
                playsInline
                className="heroVideo"
            >

                <source
                    src="/videos/paintHero.mp4"
                    type="video/mp4"
                />

            </video>

            {/* OVERLAY */}

            <div className="heroOverlay"></div>

            {/* CONTENT */}

            <div className="heroContainer">

                <motion.div

                    className="heroContent"

                    initial={{
                        opacity:0,
                        y:50
                    }}

                    animate={{
                        opacity:1,
                        y:0
                    }}

                    transition={{
                        duration:1
                    }}

                >

                    <span>

                        PAINT YOUR FUTURE WITH US AND GROW

                    </span>

                    <h1>

                        Build Creative

                        Careers With

                        Colors

                    </h1>

                    <p>

                        Join India's modern paint
                        manufacturing company and
                        work with innovation,
                        creativity and premium teams.

                    </p>

                    <div className="heroButtons">

                        <button className="primaryBtn">

                           <a href="#apply">Apply Now </a> 
                        </button>

                        <button className="secondaryBtn">

                            Explore Jobs

                            <FaArrowRight />

                        </button>

                    </div>

                </motion.div>

            </div>

        </section>
    )
}