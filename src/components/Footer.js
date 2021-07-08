import React from 'react'

const Footer = () =>{
    return(
        <>
            <footer className="page-footer">
                <a href="index.html" className="logo-footer"><h1>StringLish</h1></a>
                <ul className="social">
                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
                </ul>
                <nav aria-label="Legal" className="legal-nav">
                    <ul className="legal">
                    <li><a href="#">Your Account</a></li>
                    <li><a href="#">Our Clients</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Accessibility Policy</a></li>
                    </ul>
                </nav>
                <p className="copyright">&copy; Copyright, 1991.</p>
            </footer>
        </>
    );
}

export default Footer