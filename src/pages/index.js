import React from "react";
import '../styles/main.scss';
import Layout from '../components/layout.js';
import Letter from '../components/letter';
import SEO from '../components/seo';
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
export default () => (
    <div>
        <Layout>
            <SEO />
            <main id="home">
                <h1 className="lg-heading letter">
                    <Letter firstName="Saurav" lastName="Lal"></Letter>
                    {/* Gopesh <span className="text-secondary">Gopinath</span> */}
                </h1>
                <h2 className="sm-heading">
                    {/* Front end developer &hearts; Javascript !! */}
                    Competetive Programmer | Web Developer
                </h2>
                <div className="icons">
                    <a href="https://twitter.com/SauravLal9" aria-label="Saurav Lal Twitter">
                        {/* <i className="fab fa-twitter fa-2x"></i> */}
                        <FaTwitter size="2em" />
                    </a>
                    <a href="https://www.facebook.com/sauravkumar.lal.50/" aria-label="Saurav Lal Facebook">
                        <FaFacebook size="2em" />
                        {/* <FA name="rocket" /> */}
                        {/* <i className="fab fa-facebook fa-2x"></i> */}
                    </a>
                    <a href="https://www.linkedin.com/in/saurav-lal-621113174/" aria-label="Saurav Lal Linkedin">
                        <FaLinkedin size="2em" />
                    </a>
                    <a href="https://github.com/saurav-skl" aria-label="Saurav Lal Github">
                        <FaGithub size="2em" />
                    </a>
                </div>
            </main>
        </Layout>
    </div>
);
