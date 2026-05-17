import "../css/jobs.css"

import { motion } from "framer-motion"

import {
  FaPaintRoller,
  FaPalette,
  FaUsers,
  FaArrowRight,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaBriefcase
} from "react-icons/fa"

export default function Jobs(){

  return(

    <section className="jobsSection" id="jobs">

      {/* HEADING */}

      <div className="jobsHeading">

        <span>

          CAREER OPPORTUNITIES

        </span>

        <h1>

          Open

          <span>

            Positions

          </span>

        </h1>

      </div>

      {/* GRID */}

      <div className="bentoGrid">

        {/* CARD 1 */}

        <motion.div

          className="cardOne"

          whileHover={{
            y:-10
          }}

        >

          <div className="logoBox">

            <FaPaintRoller />

          </div>

          <h2>

            Paint Production

            Executive

          </h2>

          <div className="jobMeta">

            <span>

              <FaMapMarkerAlt />

              Indore

            </span>

            <span>

              <FaBriefcase />

              Full-Time

            </span>

          </div>

        </motion.div>

        {/* CARD 2 */}

        <motion.div

          className="cardTwo"

          whileHover={{
            y:-10
          }}

        >

          <div className="miniBar">

            <span></span>
            <span></span>
            <span></span>

          </div>

          <h4>

            Salary Package

          </h4>

          <h1>

            ₹35K

          </h1>

          <p>

            Monthly Salary

          </p>

        </motion.div>

        {/* CARD 3 */}

        <motion.div

          className="cardThree"

          whileHover={{
            y:-10
          }}

        >

          <div className="phoneMockup">

            <div className="robotCircle">

              <FaPalette />

            </div>

            <div className="phoneContent">

              Creative

              Work Culture

            </div>

            <span>

              Flexible & Modern

            </span>

          </div>

        </motion.div>

        {/* CARD 4 */}

        <motion.div

          className="cardFour"

          whileHover={{
            y:-10
          }}

        >

          <div>

            <h2>

              Job

              Responsibilities

            </h2>

            <ul>

              <li>
                Operate paint machinery
              </li>

              <li>
                Maintain product quality
              </li>

              <li>
                Coordinate with teams
              </li>

            </ul>

          </div>

          <div className="floatingOrb">

            <FaUsers />

          </div>

        </motion.div>

        {/* CARD 5 */}

        <motion.div

          className="cardFive"

          whileHover={{
            y:-10
          }}

        >

          <div className="miniLogo">

            <FaClock />

          </div>

          <h3>

            8H Shift

          </h3>

        </motion.div>

        {/* CARD 6 */}

        <motion.div

          className="cardSix"

          whileHover={{
            y:-10
          }}

        >

          <h2>

            Why Join Us?

          </h2>

          <p>

            Premium workspace,
            career growth,
            incentives and
            innovative environment.

          </p>

          <button>

            Apply Now

            <FaArrowRight />

          </button>

        </motion.div>

      </div>

    </section>
  )
}