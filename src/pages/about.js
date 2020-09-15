import React, { Fragment } from 'react';
import { graphql } from "gatsby";
import { Helmet } from 'react-helmet';
import Typed from 'react-typed';
import Layout from '../components/layout.js';
import portrait from '../img/portrait.jpg';
import { withPrefix } from 'gatsby';


export default (props) => (

    <Fragment>

        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Saurav Lal | Web Developer</title>
            </Helmet>
            <main id="about">
                <h1 className="lg-heading">
                    About
            <span className="text-secondary"> Me</span>
                </h1>
                <h2 className="sm-heading">
                    <Typed
                        strings={[' Hello, I&apos;m Saurav Lal, competetive coder and passionate in web development...']}
                        typeSpeed={90}
                        backSpeed={100}
                        loop
                    />

                </h2>
                <div className="about-info">
                    <img src={portrait} alt="Saurav Lal" className="bio-image" />

                    <div className="bio">
                        {/* <h3 className="text-secondary"></h3> */}
                        <p>
                        I'm a student at Jalpaiguri Government Engineering College in the prefinal year, pursuing my Bachelor's degree major in Electronics & Communication Engineering. 
                        I'm very passionate about learning new web tech and tools. I'm actively participating in a competitive coding contest organized in Codechef and Codeforces.
                        </p>
                    </div>


                </div>
                {/* <div className="grid-title text-secondary">
                    <h2 className="sm-heading">Experience</h2>
                    
                </div>
                <div className="job grid-container">
                    {props.data.dataJson.experiences.map((item, key) =>
                        <div key={key} className="grid-item">
                            <h3><span className="text-secondary">{item.company} </span></h3>
                            <h4>{item.profile}</h4>
                            <img className="experience-image" src={withPrefix(`/images/${item.image}`)} alt={item.company} />
                        </div>
                    )}


                </div> */}
                <div className="grid-title text-secondary">
                    <h2 className="sm-heading">Education</h2>
                </div>
                <div className="experience grid-container">
                    {props.data.dataJson.education.map((item, key) =>
                        <div key={key} className="grid-item">
                            <h3>{item.degree}</h3>
                            <h5>{item.institution}</h5>
                        </div>
                    )}

                </div>
                <div className="grid-title text-secondary">
                    <h2 className="sm-heading">Skills</h2>
                </div>
                <div className="skills grid-container">
                    {props.data.dataJson.skills.map((item, key) =>
                        <div key={key} className="grid-item">
                            <img className="skill-image" src={withPrefix(`/images/${item.image}`)} alt={item.name} />

                            <h3>{item.name}</h3>
                        </div>
                    )}

                </div>
            </main>
        </Layout>
    </Fragment>


);

export const IndexQuery = graphql`
  query IndexQuery {
    dataJson {
        name,
        experiences{
            company,
            profile
        },
        education{
            degree,
            institution
        },
        skills{
            name,
            image
        }

    }
  }
`;