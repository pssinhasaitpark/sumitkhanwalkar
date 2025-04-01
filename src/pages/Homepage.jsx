import React from 'react'
import { Header, Herosection, Developer, Myskills, Services, Contactfrom , Footer} from "../components/index"
const Homepage = () => {
    return (
        <div className="container">
            <Header />
            <Herosection />
            <Developer/>
            <Myskills/>
            <Services/>
            <Contactfrom/>
            <Footer/>
        </div>
    )
}

export default Homepage
