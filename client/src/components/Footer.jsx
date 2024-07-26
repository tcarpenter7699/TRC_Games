// import { Link } from "react-router-dom";
// import { GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
// import { useMemo } from "react";
import { Copyright, Facebook, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {

    


    return (
        <>
            <div id="footer">
                <div id="topFooter">
                    {/* <div id="map">
                        {!isLoaded? (<h2>Loading...</h2>):(
                            <GoogleMap center={center} zoom={10} mapContainerClassName="mapContainer">
                                <Marker position={center}/>
                            </GoogleMap>
                        )}
                        
                    </div> */}
                    <div id="details">
                    
                        <div className="detailsInfo">
                            <h2>Contact Us</h2>
                            <p>+1 225 726 8636</p>
                            <p>contact@trcgames.com</p>
                        </div>
                    </div>
                </div>
                
                <div id="bottomFooter">
                    <div id="copyright">
                    <Copyright className="copyrighticon"/><p>Copyright 2024</p>
                    </div>
                    <div id="icons">
                        <Facebook className="facebookIcon"/>
                        <Twitter className="twitterIcon"/>
                        <YouTube className="youtubeIcon"/>
                        <LinkedIn className="linkedIn"/>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Footer;