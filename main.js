// import "./style.css";
import "./css/main.css" 
import "./css/style1.css"

import { supabase } from "./javascript/db";

console.log("cleint", supabase);

document.querySelectorAll(".app").innerHTML = `
    <div class="cont" onmouseover="BoxShadow(this)" onmouseleave="RemoveBoxShadow(this)"> 
        <a href="home.html" class="icon"><h2> Biswas <br> Fabrication </h2></a> 
        <div id="shop" style="margin-left:100px;"> 
            <div class="cont1">
                <a href="main.html">Studio</a> 
                <img src="public/svg's/instagram.svg" alt="Instagram"> 
                <img src="public/svg's/facebook.svg" alt="Facebook">
                <img src="public/svg's/linkedin.svg" alt="Linkedin">
            </div>
        </div>
        <div class="categories-container" style="margin-left: 100px;"> 
            <span class="categories">Categories</span> 
            <div class="categories-content">
                <div class="grid-container"> 
                    <div>
                        <h5>Windows and Doors</h5> 
                        <ul> 
                            <li><a href="#Window Panes">Windowpanes</a></li>                                       
                            <li><a href="#Glass Doors">Glass Doors</a></li>
                            <li><a href="#Wooden Doors">Wooden Doors</a></li>
                            <li><a href="#Metal Doors">Metal Doors</a></li>
                            <li><a href="#Sliding Doors">Sliding Doors</a></li>
                            <li><a href="#French Doors">French Doors</a></li>
                        </ul>  
                        <hr>
                        <h5>Furniture Fabrication</h5>
                        <ul> 
                            <li><a href="#Tables and Desks">Tables and Desks</a></li>                                       
                            <li><a href="#Chairs and Benches">Chairs and Benches</a></li>
                            <li><a href="#Bed Frames and Headboards">Bed Frames and Headboards</a></li>
                            <li><a href="#Custom Cabinets">Custom Cabinets</a></li>
                            <li><a href="#Entertainment centers">Entertainment centers</a></li>
                            <li><a href="#Vanity units">Vanity units</a></li>
                        </ul> 
                    </div>
                    <div>
                        <h5>Interior Fixtures</h5>
                        <ul> 
                            <li><a href="#Stair Railings">Stair Railings</a></li>                                       
                            <li><a href="#Shelving units">Shelving units</a></li>
                            <li><a href="#Balustrades">Balustrades</a></li>
                            <li><a href="#Cabinet Doors">Cabinet Doors</a></li>
                            <li><a href="#Decorative Doors">Decorative Doors</a></li>
                            <li><a href="#Room Dividers">Room Dividers</a></li>
                        </ul>
                        <hr> 
                        <h5>Exterior Structures</h5>
                        <ul> 
                            <li><a href="#Fences and gates">Fences and gates</a></li>                                       
                            <li><a href="#Railings and Balconies">railings and Balconies</a></li>
                            <li><a href="#Porch Enclosures">Porch Enclosures</a></li>
                            <li><a href="#Awnings and canopies">Awnings and canopies</a></li>
                            <li><a href="#Decking and patio covers">Decking and patio covers</a></li>
                            <li><a href="#Exterior Staircases">Exterior Staircases</a></li>
                        </ul> 
                    </div>
                    <div>
                        <h5>Lightning Fixtures</h5>
                        <ul> 
                            <li><a href="#Pendant Lights">Pendant Lights</a></li>                                       
                            <li><a href="#Chandeliers">Chandeliers</a></li>
                            <li><a href="#Wall Scones">Wall Scones</a></li>
                            <li><a href="#Floor Lamps">Floor Lamps</a></li>
                            <li><a href="#Table lamps">Table lamps</a></li>
                            <li><a href="#Outdoor Lighting">Outdoor Lighting</a></li>
                        </ul> 
                        <hr> 
                        <h5>Outdoor Living Spaces</h5>
                        <ul> 
                            <li><a href="#Gazebos and Pergolas">Gazebos and Pergolas</a></li>                                       
                            <li><a href="#Outdoor kitchens">Outdoor kitchens</a></li>
                            <li><a href="#Fire pits and Fireplaces">Fire pits and Fireplaces</a></li>
                            <li><a href="#Patio Furniture">Patio Furniture</a></li>
                            <li><a href="#Garden Ornaments">Garden Ornaments</a></li>
                            <li><a href="#Play Structures">Play Structures</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Custom Architectural Elements</h5>
                        <ul>
                            <li><a href="Skylights">Skylights</a></li>
                            <li><a href="Glass Facades">Glass Facades</a></li>
                            <li><a href="Custom Mirrors">Custom Mirrors</a></li>
                            <li><a href="Ornamental Metalwork">Ornamental Metalwork</a></li>
                            <li><a href="Sculptural Installations">Sculptural Installations</a></li>
                            <li><a href="Custom Signage">Custom Signage</a></li>
                        </ul>  
                        <hr>
                        <h5>Home Decor Accessories</h5> 
                        <ul>
                            <li><a href="Mirrors and Frames">Mirrors and Frames</a></li>
                            <li><a href="Clocks">Clocks</a></li>
                            <li><a href="Decorative Screens">Decorative Screens</a></li>
                            <li><a href="Fireplace Surrounds">Fireplace Surrounds</a></li>
                            <li><a href="Wall Art">Wall Art</a></li>
                            <li><a href="Sculptures">Sculptures</a></li>
                        </ul>
                    </div>
                </div>  
            </div>
        </div>  
        <div class="search-icon"> 
            <div>
                <input type="text" placeholder="Search...">
            </div> 
            <div id="search_bar" class="search-icon1">
                <img src="public/svg's/Search.svg" alt="Search">
            </div>                
        </div>
        <nav class="cont1">  
            <div class="cont1">
                <img src="public/svg's/Call_Us.svg">
                <a href="Contact" style="padding-left:10px;">Contact</a>
            </div>
            <a href="login.html">Login</a> 
            <a href="#About">About</a>  
            <!-- <div class="cont1"> 
                <img src="public/svg's/settingssvg.svg">
                <a href="#Settings" style="padding-left:10px;">Settings</a>
            </div> -->
        </nav>
    </div>    
    <!-- onclick="addContainer()" -->
    <a href="Container.html" class="add_container">
        <img src="public/images/add.png" alt="not found">
    </a>
    <div class="practice"> 
        <div class="first_layout"> 
            <h1 style="margin-left: 250px;">Customers also purchased:</h1> 
            <div class="container_outer"> 
                <div class="ads">
                    <p>Ads</p>
                </div> 
                <div class="rows">
                    <div class="grid_layout"> 
                    </div>                    
                </div>
            </div> 
        </div>
    </div>
    `;