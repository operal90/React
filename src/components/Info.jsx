import Image from "../images/imgs.jpg"
function Info(){
    return(
        <div className="info">
            <img src={Image} />
            <h3>Adegbite Opeyemi</h3>
            <div className="info--bar">
                <p>Application Developer</p>
                <small className="small">oadegbite@payvantage.com</small>                
            </div>  
            <button className="btn">Email</button>                      
        </div>
    )
}
 export default Info