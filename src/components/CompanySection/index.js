import React from 'react'
import "./CompanySection.css"
import { StaticImage } from "gatsby-plugin-image"


function CompanySection() {
    return (
    <div>
        <section class="splash">
        <StaticImage
                    src="../../images/dreambit-logo.png"
                    loading="eager"
                    width={750}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                />
        <p>An English Library and Intelligently Linked Lessons.</p>
        </section>
        <p class="footer">We are currently putting our site together but if you are  here and want to know more,  please contact us at <a href="mailto:hello@dreambit.sk">hello@dreambit.sk</a> </p>
        
    </div>
    
    )
    }

export default CompanySection