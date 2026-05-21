import "../css/benefits.css"

import { motion } from "framer-motion"

import {
    FaMoneyBillWave,
    FaHeartbeat,
    FaPlaneDeparture,
    FaGraduationCap,
    FaUsers,
    FaAward
} from "react-icons/fa"

export default function Benefits(){

    const benefits = [

        {
            id:1,

            icon:<FaMoneyBillWave />,

            title:"Competitive Salary",

            desc:"Attractive salary packages with performance incentives and annual growth.",

            color:"salary"
        },

        {
            id:2,

            icon:<FaHeartbeat />,

            title:"Health Insurance",

            desc:"Comprehensive medical coverage for employees and family members.",

            color:"health"
        },

        {
            id:3,

            icon:<FaPlaneDeparture />,

            title:"Paid Leaves",

            desc:"Flexible holidays and paid vacations for better work-life balance.",

            color:"leave"
        },

        {
            id:4,

            icon:<FaGraduationCap />,

            title:"Career Growth",

            desc:"Training programs and leadership opportunities for long-term success.",

            color:"growth"
        },

        {
            id:5,

            icon:<FaUsers />,

            title:"Collaborative Culture",

            desc:"Positive and creative work environment with supportive teams.",

            color:"culture"
        },

        {
            id:6,

            icon:<FaAward />,

            title:"Performance Rewards",

            desc:"Recognition programs and bonuses for outstanding performance.",

            color:"reward"
        }

    ]

    return(

        <section className="benefitsSection" id="benefits">

            {/* TOP CONTENT */}

            <motion.div

                className="benefitsHeading"

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
                    SALARY & BENEFITS
                </span>

                <h1>

                    Why People Love

                    <span>
                        Working Here
                    </span>

                </h1>

                <p>

                    We believe great people deserve great rewards.
                    Explore the benefits, growth opportunities and
                    premium work culture we provide.

                </p>

            </motion.div>

            {/* BENEFITS GRID */}

            <div className="benefitsGrid">

                {
                    benefits.map((item,index)=>(

                        <motion.div

                            className={`benefitCard ${item.color}`}

                            key={item.id}

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
                                y:-12
                            }}

                        >

                            <div className="benefitIcon">

                                {item.icon}

                            </div>

                            <h2>
                                {item.title}
                            </h2>

                            <p>
                                {item.desc}
                            </p>

                        </motion.div>

                    ))
                }

            </div>

        </section>
    )
}