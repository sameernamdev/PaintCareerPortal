import "../css/apply.css"

import { Link } from "react-router-dom"

export default function ApplyForm(){

    return(

        <div className="applyPage">

            {/* HEADER */}

            <header className="applyHeader">

                <div className="applyLogo">

                   <img src="/paint.jpg" alt="" width={50}/> Asian Paints

                </div>

                <Link
                    to="/"
                    className="backBtn"
                >

                    Back To Home

                </Link>

            </header>

            {/* FORM */}

            <form className="applyForm">

                <span>

                    CAREER APPLICATION

                </span>

                <h1>

                    Apply For

                    Your Dream Job

                </h1>

                <p>

                    Fill out the application form and
                    become part of our innovative
                    paint manufacturing team.

                </p>

                <input
                    type="text"
                    placeholder="Full Name"
                />

                <input
                    type="email"
                    placeholder="Email Address"
                />

                <input
                    type="tel"
                    placeholder="Phone Number"
                />

                <input
                    type="text"
                    placeholder="Position Applying For"
                />

                <input
                    type="file"
                />

                <textarea
                    placeholder="Why should we hire you?"
                >

                </textarea>

                <button>

                    Submit Application

                </button>

            </form>

        </div>
    )
}