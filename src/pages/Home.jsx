import ApplyCTA from "../components/ApplyCTA";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";
import Navbar from "../components/Navbar";
import Process from "../components/Process";
import VideoSection from "../components/VideoSection";

export default function Home()
{
    return(
        <>
        <Navbar/>
        <Hero/> 
        <Jobs/>
        <VideoSection/>
        <Benefits/>
        <Process/>
        <ApplyCTA/>
        <Footer/>
        </>
    )
}