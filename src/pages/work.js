import React, { Fragment } from 'react';
import Layout from '../components/layout.js';
import Typed from 'react-typed';
import project from '../img/projects/project1.jpg';
import mywebsite from '../img/projects/project6.jpg';
export default () => (

    <Fragment>
        <Layout>
            <main id="work">
                <h1 className="lg-heading">
                    My
            <span className="text-secondary">Work</span>
                </h1>
                <h2 className="sm-heading">
                    <Typed
                        strings={['Check out some of my projects...']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />

                </h2>
                <div className="projects">
                    <div className="view view-tenth item">
                        <div className="project-title">CRUD applications</div>
                        <img src={project} alt="CRUD applications" />
                        <div className="mask">
                            <h2>CRUD Application</h2>
                            <p>A student and teacher applications with a features of modifying and deleting data.</p>
                            <a href="https://github.com/saurav-skl/stud-teach-forum" rel="noreferrer noopener" target="_blank" className="info">Read More</a>
                        </div>
                    </div>
                    <div className="view view-tenth item">
                        <div className="project-title">Personal Portfolio</div>
                        <img src={mywebsite} alt="Portfolio" />
                        <div className="mask">
                            <h2>Personal Portfolio</h2>
                            <p>Personal Portfolio using Reactjs Framework Gatsby</p>
                            <a href="" rel="noreferrer noopener" target="_blank" className="info">Read More</a>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    </Fragment>

)