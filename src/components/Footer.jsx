import "../css/Footer.css"

import {
    FaInstagram,
    FaLinkedinIn,
    FaFacebookF,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa"

export default function Footer(){

    return(

        <footer className="footer">

            <div className="footerContainer">

                {/* LEFT */}

                <div className="footerLeft">

                    <div className="footerLogo">

                        Asian Paints 

                    </div>

                    <p>

                        Building careers with innovation,
                        creativity and modern opportunities
                        in the paint manufacturing industry.

                    </p>

                    <div className="footerSocials">

                        <a href="#">

                            <FaInstagram />

                        </a>

                        <a href="#">

                            <FaLinkedinIn />

                        </a>

                        <a href="#">

                            <FaFacebookF />

                        </a>

                        <a href="#">

                            <FaYoutube />

                        </a>

                    </div>

                </div>

                {/* LINKS */}

                <div className="footerLinks">

                    <h3>
                        Quick Links
                    </h3>

                    <a href="#">
                        Home
                    </a>

                    <a href="#">
                        Jobs
                    </a>

                    <a href="#">
                        Benefits
                    </a>

                    <a href="#">
                        Process
                    </a>

                    <a href="#">
                        Apply
                    </a>

                </div>

                {/* CAREERS */}

                <div className="footerLinks">

                    <h3>
                        Careers
                    </h3>

                    <a href="#">
                        Production
                    </a>

                    <a href="#">
                        Marketing
                    </a>

                    <a href="#">
                        Operations
                    </a>

                    <a href="#">
                        HR Team
                    </a>

                    <a href="#">
                        Internship
                    </a>

                </div>

                {/* CONTACT */}

                <div className="footerContact">

                    <h3>
                        Contact
                    </h3>

                    <div className="footerContactItem">

                        <FaPhoneAlt />

                        <span>
                            +91 9425756634
                        </span>

                    </div>

                    <div className="footerContactItem">

                        <FaEnvelope />

                        <span>
                            info@skyinfogroup.com
                        </span>

                    </div>

                    <div className="footerContactItem">

                        <FaMapMarkerAlt />

                        <span>
                            Bhopal, Madhya Pradesh
                        </span>

                    </div>

                </div>

            </div>

            {/* BOTTOM */}

            <div className="footerBottom">

                <p>

                    © 2026 Paint Career. All Rights Reserved.

                </p>

            </div>

        </footer>
    )
}