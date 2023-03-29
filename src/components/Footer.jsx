import React from "react"

export default function Footer() {


    return (
        <footer className="footer" id="contact">
            <div className="contact">
                <h3 className="contact-title">Contact</h3>

                <p><span className="bold">Address: </span>Piata Victoriei 4, Focsani 620105, Romania</p>
                <p><span className="bold">Email: </span> rares.bucur99@yahoo.com | <span className="bold">Phone:</span> +40 753 307 744</p>
                
            </div>

            <ul className="social_list">
            <li className="social_list_item">
                    <a className="social_list_link" href="https://raresbuc.artstation.com/">
                        <i className="fa-brands fa-artstation"></i>
                    </a>
                </li>

                <li className="social_list_item">
                    <a className="social_list_link" href="https://www.linkedin.com/in/raresbucur/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>

                <li className="social_list_item">
                    <a className="social_list_link" href="https://github.com/raresbuc">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>

                <li className="social_list_item">
                    <a className="social_list_link" href="https://www.instagram.com/raressbucur/">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>

                <li className="social_list_item">
                    <a className="social_list_link" href="https://www.facebook.com/rares.bucur99/">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}