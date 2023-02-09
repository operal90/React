import Picture from "../images/Facebook icon.png"
// import Pict from "../images/Github icon.png"
import Pic from "../images/Instagram icon.png"
import Pix from "../images/Linkedin icon.png"
import Operal from "../images/Twitter icon.png"
function Footer(){
    return(
        <div className="footer">
            <img src={Operal} className="operal"/>
            <img src={Picture} className="picture"/>  
            <img src={Pic} className="pic"/>  
            <img src={Pix} className="pix"/>  
            {/* <img src={Pict} className="pict"/>                  */}
        </div>
    )
}
 export default Footer