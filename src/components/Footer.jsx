import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer>
            <div className="head-office">
                <img src="./img/logo.png" alt="logopng" />
                <span>.agancy</span>
                <h3>Head Office </h3>
                <p><a href="#">Syria - Latakia - grh2+hjx 35.5199518</a></p>
                <p className='copy-right'> © 2021 - 2023 focal X L.L.C All Right Reserved</p>
            </div>
            <div className="three-parts">
                <div className='cont'>
                    <div>
                        <h4>Sales</h4>
                        <p><a href="#">contact@focal-x.com</a></p>
                        <p><a href="#">+963 953 666 056</a></p>
                    </div>
                    <div className="part2 ">
                        <h3>Public Relations</h3>
                        <p><a href="#">pr@focal-x.com</a></p>
                        <p><a href="#">+963 953 666 052</a></p>
                    </div>
                </div>
                <div className='cont'>
                    <div >
                        <h4>Customer Support</h4>
                        <p><a href="#">info@focal-x.com</a></p>
                        <p><a href="#">+963 953 666 054</a></p>
                    </div>
                    <div className="part3">
                        <h4>Human Resources</h4>
                        <p><a href="#">hr@focal-x.com</a></p>
                    </div>
                </div>
                <div className='cont'>
                    <h4>Useful Links</h4>
                    <ul>
                        <li>Clients & Partners</li>
                        <li>Check Certificat ID</li>
                        <li>Check for employee</li>
                        <li>Our Brand ID guidlines</li>
                    </ul>
                </div>
                <div className="icon-footer">
                    <h4>Keep In Touch</h4>
                    <div className="iconf">
                    <div className="iconf1"><FontAwesomeIcon icon={faXTwitter} style={{ color: "black" ,fontSize:"20px"}} className='font-iconf' /></div>
                    <div className="iconf1"><FontAwesomeIcon icon={faInstagram} style={{ color: "black",fontSize:"20px" }} className='font-iconf' /></div>
                    <div className="iconf1"><FontAwesomeIcon icon={faLinkedinIn} style={{ color: "black",fontSize:"20px" }} className='font-iconf' /></div>
                    <div className="iconf1"><FontAwesomeIcon icon={faBehance} style={{ color: "black", fontSize:"20px" }} className='font-iconf' /></div>
                    <div className="iconf1"><FontAwesomeIcon icon={faFacebookF} style={{ color: "black", fontSize:"20px"}} className='font-iconf' /></div>
                    </div>

                </div>
            </div>



        </footer>
    )
}
