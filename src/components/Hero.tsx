import React from 'react';

export const Hero: React.FC = () => {
    return (
        // <section className="home-section home-full-height bg-dark bg-gradient" id="home">
        //     <video autoPlay muted loop id="video-background"
        //            poster="https://res.cloudinary.com/dkznriytt/image/upload/f_auto,q_auto/v1/g2-site/urzewwkh10yizu20r3qb">
        //         <source
        //             src="https://res.cloudinary.com/dkznriytt/video/upload/f_auto:video,q_auto/v1/g2-site/il0rc8owxerix8fjie7c"
        //             type="video/mp4"
        //         />
        //         Your browser does not support the video tag.
        //     </video>
        //     <div className="titan-caption">
        //         <div className="caption-content">
        //             <div className="logo-container" style={{ textAlign: 'center', margin: '20px 0' }}>
        //                 <img
        //                     className="logo-img"
        //                     src="https://res.cloudinary.com/dkznriytt/image/upload/v1721718424/g2-site/a7admjkajwxxs72k69m2.png"
        //                     alt="Logo"
        //                 />
        //             </div>
        //             <a className="section-scroll btn hero-btn btn-lg" href="#services">Learn More</a>
        //         </div>
        //     </div>
        // </section>

        <section className="home-section home-full-height  bg-gradient" id="home" style={{background: "transparent"}}>
            <div className="titan-caption">
                <div className="caption-content">
                    <div className="logo-container" style={{textAlign: 'center', margin: '20px 0'}}>
                        <img
                            className="logo-img"
                            src="https://res.cloudinary.com/dkznriytt/image/upload/v1721718424/g2-site/a7admjkajwxxs72k69m2.png"
                            alt="Logo"
                        />
                    </div>
                    <a className="section-scroll btn hero-btn btn-lg" href="#services">Learn More</a>
                </div>
            </div>
        </section>
    );
};
