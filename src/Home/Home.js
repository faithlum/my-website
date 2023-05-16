import React from "react";

function Home() {
    return (
        <>
            <div className="myName">
            {/* <h2 className="name">faith lum</h2> */}
            </div>
            <div className="bodyHome">
                <section className="home">
                    <div className="home-content">
                        <h1>welcome to my memory palace</h1>
                        <p>an unofficial portfolio  .   .   . by Faith Lum</p>
                        {/* <a href="#" className="btn">Documentation</a> */}
                     </div>
                    <div className="home-img">
                        <img src="/website_profile1.jpg" alt=""/>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;