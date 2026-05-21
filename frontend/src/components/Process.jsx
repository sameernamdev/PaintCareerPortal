import "../css/process.css"

import { motion } from "framer-motion"

import {
    FaFileAlt,
    FaUserTie,
    FaComments,
    FaCheckCircle
} from "react-icons/fa"

export default function Process(){

    const processSteps = [

        {
            id:"01",

            icon:<FaFileAlt />,

            title:"Apply Online",

            desc:"Submit your application through our premium careers portal with updated details."
        },

        {
            id:"02",

            icon:<FaUserTie />,

            title:"Profile Screening",

            desc:"Our recruitment team reviews your profile and evaluates your qualifications."
        },

        {
            id:"03",

            icon:<FaComments />,

            title:"Interview Process",

            desc:"Attend HR and technical interview rounds with our expert hiring team."
        },

        {
            id:"04",

            icon:<FaCheckCircle />,

            title:"Get Hired",

            desc:"Receive your offer letter and start your journey with Paint Career."
        }

    ]

    return(

        <section className="processSection" id="process">

            {/* HEADING */}

            <motion.div

                className="processHeading"

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
                    APPLICATION PROCESS
                </span>

                <h1>

                    How To

                    <span>
                        Apply
                    </span>

                </h1>

                <p>

                    Follow our simple hiring process and become
                    part of an innovative and fast-growing team.

                </p>

            </motion.div>

            {/* PROCESS TIMELINE */}

            <div className="processTimeline">

                {
                    processSteps.map((step,index)=>(

                        <motion.div

                            className="processCard"

                            key={step.id}

                            initial={{
                                opacity:0,
                                y:70
                            }}

                            whileInView={{
                                opacity:1,
                                y:0
                            }}

                            transition={{
                                duration:0.8,
                                delay:index * 0.15
                            }}

                            viewport={{
                                once:true
                            }}

                            whileHover={{
                                y:-10
                            }}

                        >

                            <div className="stepNumber">

                                {step.id}

                            </div>

                            <div className="processIcon">

                                {step.icon}

                            </div>

                            <h2>

                                {step.title}

                            </h2>

                            <p>

                                {step.desc}

                            </p>

                        </motion.div>

                    ))
                }

            </div>

            {/* CONTACT BOX */}

            <motion.div

                className="processContact"

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
                    CONTACT US
                </span>

                <h2>

                    Need Help With

                    Your Application?

                </h2>

                <p>

                    Our recruitment team is available to help
                    you with the hiring process and application
                    related queries.

                </p>

                {/* CONTACT ITEMS */}

                <div className="processContactItems">

                    <div className="processContactItem">

                        <div className="processContactIcon">

                            📞

                        </div>

                        <div>

                            <h3>Call HR Team</h3>

                            <p>9303512636</p>

                        </div>

                    </div>

                    <div className="processContactItem">

                        <div className="processContactIcon">

                            💬

                        </div>

                        <div>

                            <h3>WhatsApp Support</h3>

                            <p>9425756634</p>

                        </div>

                    </div>

                    <div className="processContactItem">

                        <div className="processContactIcon">

                            ✉️

                        </div>

                        <div>

                            <h3>Email Support</h3>

                            <p>info@skyinfogroup.com</p>

                        </div>

                    </div>

                </div>

                <div className="processResponse">

                    ⏱ Response within 24 hours

                </div>

            </motion.div>

        </section>
    )
}