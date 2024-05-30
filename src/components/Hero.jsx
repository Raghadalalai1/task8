import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
export default function Hero() {
    return (
        <section className="hero">
            <div className="content ">
            <h1 className="anim1">Hey !! Mario still here, But don’t forget that</h1>
            <p className="anim1">At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
                Branding, Digital Marketing, Web/App Development, Ui/Ux
                Content creation, Graphic design, Social media and More........
                So you can take a tour in our website, OR just <span> Press Start :)</span> 
                </p>

            </div>
            <img src="./img/pattren.png" alt="pattrenimg"  className="pattren-img"/>
     <div className="fotter-img">
     <img src="./img/fotter.svg" alt="fotter"  className="fottter-img"/>
     <img src="./img/gameBoy-min.png" alt="gameBoy-min" className="gameBoy-min-img"/>
     <img src="./img/pressStart.svg" alt="pressStart" className="pressStart-img"/>
     <span className="start">start</span>
     <div className="icon-content">
        <div className="icon">
            <div className="icon1"><FontAwesomeIcon icon={faXTwitter} style={{color:"#ff8500"}}className='font-icon'/></div>
            <div className="icon1"><FontAwesomeIcon icon={faInstagram}style={{color:"#ff8500"}}className='font-icon'  /></div>
            <div className="icon1"><FontAwesomeIcon icon={faLinkedinIn} style={{color:"#ff8500"}}className='font-icon'/></div>
            <div className="icon1"><FontAwesomeIcon icon={faBehance}  style={{color:"#ff8500"}} className='font-icon'/></div>
            <div className="icon1"><FontAwesomeIcon icon={faFacebookF} style={{color:"#ff8500"}} className='font-icon'/></div>
        
        </div>
        <p className="titel">2021-2023 focal X agency All Right Reversed</p>

     </div>
     </div>
        </section>
    )
}