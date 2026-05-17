import "../css/video.css"

import { motion } from "framer-motion"

export default function VideoSection(){

    return(

        <section className="videoSection">

            <div className="videoContainer">

                {/* LEFT CONTENT */}

                <motion.div

                    className="videoLeft"

                    initial={{
                        opacity:0,
                        x:-80
                    }}

                    whileInView={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:1
                    }}

                    viewport={{
                        once:true
                    }}

                >

                    <span>
                        COMPANY CULTURE
                    </span>

                    <h1>

                        Discover Life

                        <br />

                        At Paint Career

                    </h1>

                    <p>

                        Experience innovation, teamwork and growth
                        inside our modern manufacturing ecosystem.
                        Explore how creativity and technology
                        come together to build the future.

                    </p>

                    <div className="videoStats">

                        <div className="videoStatCard">

                            <h2>25K+</h2>

                            <p>Employees</p>

                        </div>

                        <div className="videoStatCard">

                            <h2>100+</h2>

                            <p>Projects</p>

                        </div>

                    </div>

                </motion.div>

                {/* RIGHT VIDEO */}

                <motion.div

                    className="videoRight"

                    initial={{
                        opacity:0,
                        x:80
                    }}

                    whileInView={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:1
                    }}

                    viewport={{
                        once:true
                    }}

                >

                    <div className="videoBox">

                        <video controls

                            // poster="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop"
                       >

                            <source

                                src="/video.mp4"

                                type="video/mp4"
                            />

                        </video>

                    </div>

                </motion.div>

            </div>

        </section>
    )
}