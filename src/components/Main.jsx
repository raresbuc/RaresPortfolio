import React from "react"
import introimg from "/src/assets/IMG20221109165504.jpg"
import aboutMeImg from "/src/assets/IMG20220525203458.jpg"
import AR from "/src/assets/ar1.png"
import laser from "/src/assets/laser_thumbnail.png"
import scope from "/src/assets/scope_thumbnail.png"
import shinbashi from "/src/assets/shinbashi_snapshot_1.1.1.png"
import moto from "/src/assets/moto1.png"
import helmet from "/src/assets/helmet1.png"
import handheld from "/src/assets/handheld.jpg"
import penTablet from "/src/assets/tablet6.jpg"
// import olympoid from "/src/assets/skeleton_1.192.jpg"
import movieWatchlist from "/src/assets/movieWatchlist.png"
import quizzical from "/src/assets/quizzical.png"
import airbnb from "/src/assets/airbnb.png"
import capstone from "/src/assets/capstone.png"
import notes from "/src/assets/notes.png"
// import creaPrint from "/src/assets/creaPrint.jpg"


export default function Main() {

    return (
        <main>
            {/* Introduction */}
            <section className="intro" id="home">
                <h1 className="section_title section_title_intro">
                    Hi, I am <br></br><strong>Rares Bucur</strong>
                </h1>
                <p className="section_subtitle section_subtitle_intro">3D Environment Artist</p>
                <img className="intro_img" src={introimg} alt="a picture of Rares Bucur" />
            </section>

            {/* My Services */}
            <section className="my_services" id="services">
                <h2 className="section_title section_title_services">What I do</h2>
                <div className="services">
                    <div className="service1">
                        <h3>3D Art</h3>
                        <p className="service1-body">I have worked on multiple projects within and outside of my Computer Science degree programme, such as different CGI projects with a strong aim on prop and environment art development.<br></br><br></br>I am able to create low and high poly hard-surface models with great attention to details and topology and a very good understanding of game art workflows including UV unwrapping, shading, texturing, lighting and rendering. I also have some experience with digital sculpting and organic modeling.</p>
                    </div>
                
                    {/* <div className="service2">
                        <h3>Front-End Development</h3>
                        <p className="service2-body">I also have some experience within the web development domain, having built different personal websites or web applications with a strong aim on front-end development. Two of them would be a web application for the Bristol Museum & Art Gallery showcasing multiple exhibits from different categories and a web application for a graphic design company representing the services that the firm is able to provide. These allowed me to greatly improve my design and React.js skills.</p>
                    </div> */}
                </div>
            
                <a href="#work" className="btn">see my work</a>
            </section>

            {/* About Me */}
            <section className="about_me" id="about">
                <h2 className="section_title section_title_about about_me_title">
                    Who I am
                </h2>
                <p className="section_subtitle section_subtitle_about about_me_subtitle">
                    3D Artist
                </p>
           
                <div className="about_me_body">
                    <p>I have a strong passion for art and technology, being up to date with anything new within the domain and eager to get better every day at what I do.</p>
                    <p>I have always had a strong connection with games, movies and art in general, making me wonder how all these beautiful environments and objects are created. I am always thinking about how I can digitally reproduce what I see in the physical world and I also spend a lot of my free time observing how others reproduce physical phenomena, especially within the video game industry and interactive media.</p>
                    <p>I also consider myself being open-minded, with the ability to adapt to every type of person in a professional manner in order to get the task at hand done with the experience of working with multiple teams over the years.</p>
                </div>
           
                <img className="about_me_img" src={aboutMeImg} alt="Rares sitting on a bench" />
            </section>

            {/* My Work */}
            <section className="my_work" id="work">
                <h2 className="section_title">My work</h2>
                <p className="section_subtitle section_subtitle_work">A selection of my range of work</p>


                {/* 3DArt */}
                <h3 className="section_subtitle_work_levelDesign">Prop & Environment Art</h3>
                <div className="portfolio level-design">
                    {/* Portfolio item 8 */}
                    <div className="proj-item">
                        <a href="https://www.artstation.com/artwork/Jvv59d" className="portfolio_item" target="_blank">
                            <img src={AR} alt="" className="portfolio_img" />
                        </a>
                        <div className="proj-item-description">
                            <h4>The Honey Badger Assault Rifle by Q</h4>
                            <p className="proj-item-description-body">From the gas system to the trigger, and telescoping stock - HB 2.0 does not dissapoint. High poly asset with multiple parts for customization, modeled in Maya, baked and textured in Substance, rendered in Vray.</p>
                            <p><span className="span-bold">Software used</span>: Autodesk Maya, Substance 3D Painter, Photoshop, Vray</p>
                        </div>
                    </div>


                    {/* Portfolio item 7 */}
                    <div className="proj-item">
                        <a href="https://www.artstation.com/artwork/zPPKdQ" className="portfolio_item" target="_blank">
                            <img src={laser} alt="" className="portfolio_img" />
                        </a>
                        <div className="proj-item-description">
                            <h4>Eotech On-Gun Laser (OGL)</h4>
                            <p className="proj-item-description-body">Eotech on-gun weapon laser. High poly asset with 2k and 4k textures. Made in Maya, textured in Substance, rendered in Vray.</p>
                            <p><span className="span-bold">Software used</span>: Autodesk Maya, Substance 3D Painter, Photoshop, Vray</p>
                        </div>
                    </div>


                    {/* Portfolio item 6 */}
                    <div className="proj-item">
                        <a href="https://www.artstation.com/artwork/AlrVQe" className="portfolio_item" target="_blank">
                            <img src={scope} alt="" className="portfolio_img" />
                        </a>
                        <div className="proj-item-description">
                            <h4>Eotech HWS EXPS3 Scope</h4>
                            <p className="proj-item-description-body">Eotech HWS EXPS3 Weapon Scope. High poly asset with 2k and 4k textures. Made in Maya, textured in Substance, rendered in Vray.</p>
                            <p><span className="span-bold">Software used</span>: Autodesk Maya, Substance 3D Painter, Photoshop, Vray</p>
                        </div>
                    </div>


                    {/* Portfolio item 5 */}
                    <div className="proj-item">
                        <a href="https://www.artstation.com/artwork/4Xwq24" className="portfolio_item" target="_blank">
                            <img src={shinbashi} alt="" className="portfolio_img" />
                        </a>
                        <div className="proj-item-description">
                            <h4>Shinbashi District</h4>
                            <p className="proj-item-description-body">Recreated a beautiful shot of the Shinbashi District. The goal was to recreate the layout and the structures of the buildings and other objects as much as possible, while keeping an eye on the colours found in the photo.</p>
                            <p><span className="span-bold">Software used</span>: Autodesk Maya, Substance 3D Painter, Unreal Engine, DaVinci Resolve</p>
                        </div>
                    </div>


                    {/* Portfolio item 4 */}
                    <div className="proj-item">
                        <a href="https://www.artstation.com/artwork/nEmXmX" className="portfolio_item" target="_blank">
                            <img src={moto} alt="" className="portfolio_img" />
                        </a>
                        <div className="proj-item-description">
                            <h4>Motorcycle Concept</h4>
                            <p className="proj-item-description-body">A rather futuristic motorcycle concept. Made in Maya with a few touches in Zbrush, textured in Substance, rendered in Arnold.</p>
                            <p><span className="span-bold">Software used</span>: Autodesk Maya, Substance 3D Painter, ZBrush, Arnold</p>
                        </div>
                    </div>


                    {/* Portfolio item 3 */}
                    <div className="proj-item">
                        <a href="https://www.artstation.com/artwork/r961kO" className="portfolio_item" target="_blank">
                            <img src={helmet} alt="" className="portfolio_img" />
                        </a>
                        <div className="proj-item-description">
                            <h4>Motorcycle Helmet</h4>
                            <p className="proj-item-description-body">Motorcycle helmet concept. Made in Maya, textured in Substance, rendered in Arnold.</p>
                            <p><span className="span-bold">Software used</span>: Autodesk Maya, Substance 3D Painter, Arnold</p>
                        </div>
                    </div>


                    {/* Portfolio item 2 */}
                    <div className="proj-item">
                        <a href="https://www.artstation.com/artwork/nEmX5K" className="portfolio_item" target="_blank">
                            <img src={penTablet} alt="" className="portfolio_img" />
                        </a>
                        <div className="proj-item-description">
                            <h4>Wacom Pen Tablet</h4>
                            <p className="proj-item-description-body">Wacom Pen Tablet 3D model. Modelled the pen and the tablet based on the reference from the Wacom tablet. Made in Maya, textured in Substance, rendered in Iray.</p>
                            <p><span className="span-bold">Software used</span>: Autodesk Maya, Substance 3D Painter, Iray</p>
                        </div>
                    </div>


                    {/* Portfolio item 1 */}
                    <div className="proj-item">
                        <a href="https://www.artstation.com/artwork/X1Z8on" className="portfolio_item" target="_blank">
                            <img src={handheld} alt="" className="portfolio_img" />
                        </a>
                        <div className="proj-item-description">
                            <h4>Handheld Console</h4>
                            <p className="proj-item-description-body">Handheld console concept. Modelled the console with some inspiration from the Nintendo Switch console. Made in Maya, textured in Substance, rendered in Iray.</p>
                            <p><span className="span-bold">Software used</span>: Autodesk Maya, Substance 3D Painter, Iray</p>
                        </div>
                    </div>
                    

                    {/* Portfolio item 0 */}
                    {/* <div className="proj-item">
                        <a href="https://www.youtube.com/watch?v=MSUwRdHBVBA" className="portfolio_item" target="_blank">
                            <img src={olympoid} alt="" className="portfolio_img" />
                        </a>
                        <div className="proj-item-description">
                            <h4>Olympoid</h4>
                            <p className="proj-item-description-body">Modelled and animated a 3D character in Maya within the CGI unit from my Computer Science BSc degree at Univeristy of Bristol. This project introduced me into the world of 3D art and the software tools needed to express my vision on the screen.</p>
                            <p><span className="span-bold">Technologies used</span>: Autodesk Maya, Arnold</p>
                        </div>
                    </div> */}
                </div>


                {/* WebDev */}
                {/* <h3 className="section_subtitle_work_frontend">Web Development</h3>
                <div className="portfolio frontend"> */}
                    {/* Portfolio item 1 */}
                    {/* <div className="proj-item">
                        <a href="https://raresbuc.github.io/MovieWatchlist/index.html" className="portfolio_item" target="_blank">
                            <img src={movieWatchlist} alt="" className="portfolio_img" />
                        </a>

                        <div className="proj-item-description">
                            <h4>Movie Watchlist</h4>
                            <p className="proj-item-description-body">A web application where you can search for any movie you want to find more about and add it to your watchlist</p>
                            <p><span className="span-bold">Technologies used</span>: HTML5, CSS, JavaScript, GitHub Pages</p>
                        </div>
                    </div> */}
                
                    {/* Portfolio item 2 */}
                    {/* <div className="proj-item">
                        <a href="https://raresbuc.github.io/AirbnbExperiencesClone/" className="portfolio_item" target="_blank">
                            <img src={airbnb} alt="" className="portfolio_img" />
                        </a>

                        <div className="proj-item-description">
                            <h4>Airbnb Experiences</h4>
                            <p className="proj-item-description-body">A static web application consisting in a design replica of the Airbnb Experiences landing page</p>
                            <p><span className="span-bold">Technologies used</span>: HTML5, CSS, JavaScript, React.js, Vite, Github Pages</p>
                        </div>
                    </div> */}

                    {/* Portfolio item 3 */}
                    {/* <div className="proj-item">
                        <a href="https://raresbuc.github.io/Quizzical/" className="portfolio_item" target="_blank">
                            <img src={quizzical} alt="" className="portfolio_img" />
                        </a>

                        <div className="proj-item-description">
                            <h4>Quizzical</h4>
                            <p className="proj-item-description-body">A quiz game which interacts with an external API and showcases the dynamic skills I managed to acquire during this project</p>
                            <p><span className="span-bold">Technologies used</span>: HTML5, CSS, JavaScript, React.js, Vite, Github Pages</p>
                        </div>
                        
                    </div> */}

                    {/* Portfolio item 4 */}
                    {/* <div className="proj-item">
                        <a href="https://raresbuc.github.io/Capstone/" className="portfolio_item" target="_blank">
                            <img src={capstone} alt="" className="portfolio_img" />
                        </a>

                        <div className="proj-item-description">
                            <h4>Capstone</h4>
                            <p className="proj-item-description-body">A web application showcasing the interaction with what could be an e-commerce system, with a cart component and the ability to add different items to the cart or add them to favourites. The applicaiton was also built using routes and a context provider</p>
                            <p><span className="span-bold">Technologies used</span>: HTML5, CSS, JavaScript, React.js, Vite, Github Pages</p>
                        </div>
                    </div> */}

                    {/* Portfolio item 5 */}
                    {/* <div className="proj-item">
                        <a href="https://raresbuc.github.io/Notes/" className="portfolio_item" target="_blank">
                            <img src={notes} alt="" className="portfolio_img" />
                        </a>

                        <div className="proj-item-description">
                            <h4>Notes</h4>
                            <p className="proj-item-description-body">A web application where one could create one or more notes in which they can customize the contents through a markdown schema. This helped me improve my ability to work with another existing code and other dependencies</p>
                            <p><span className="span-bold">Technologies used</span>: HTML5, CSS, JavaScript, React.js, Vite, Github Pages</p>
                        </div>
                    </div> */}

                    {/* Portfolio item 5
                    <div className="proj-item">
                        <a href="https://raresbuc.github.io/Notes/" className="portfolio_item" target="_blank">
                            <img src={creaPrint} alt="" className="portfolio_img" />
                        </a>
                        <div className="proj-item-description">

                        </div>
                        <h4>CreaPrint</h4>
                        <p className="proj-item-description-body">A web application where you can search for any movie you want to find more about and add it to your watchlist.</p>
                        <p><span>Technologies used</span>: HTML5, CSS, JavaScript, GitHub Pages.</p>
                    </div> */}
                {/* </div> */}
            </section>
        </main>
    )
}