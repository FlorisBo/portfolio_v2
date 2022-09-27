import {useRef} from 'react';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const ref = useRef();

    return (
        <div className="parallax">
            <div className="row no-gutters">
                <div className="col-1">
                    <div className="sidebar">
                        <li>
                            <ul className="sidebar__item" onClick={() => ref.current.scrollTo(1.9)}>OVER</ul>
                            <ul className="sidebar__item" onClick={() => ref.current.scrollTo(2.9)}>ERVARING</ul>
                            <ul className="sidebar__item" onClick={() => ref.current.scrollTo(3.9)}>OPLEIDING</ul>
                            <ul className="sidebar__item" onClick={() => ref.current.scrollTo(4.9)}>PROJECTEN</ul>
                            <ul className="sidebar__item" onClick={() => ref.current.scrollTo(5.9)}>SKILLS</ul>
                            <ul className="sidebar__item">HOBBY'S</ul>
                        </li>
                    </div>
                </div>
                <div className="col-11">
                    <Parallax pages={7} ref={ref}>

                        <ParallaxLayer factor={1} offset={0} speed={2}>
                            <div className="intro">
                                <h1 className='display-1'>FLORIS BOGERS</h1>
                                <small className='text-muted'>29-12-2004</small>
                            </div>
                        </ParallaxLayer>

                        <ParallaxLayer sticky={{start: 0.75, end: 1.25}}>

                            <div className="quote">
                                <h2>
                                    <italic>“What is the point of being on this Earth if you are going to be like
                                        everyone else?”
                                    </italic>
                                    <br/><small className='text-muted'>– Arnold Schwarzenegger</small>
                                </h2>

                            </div>

                        </ParallaxLayer>

                        <ParallaxLayer offset={2} speed={1}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="about-me">
                                            <h2 className='title'>OVER</h2>
                                            <p className="pt-3">Jong en ambitieus. Leergierig en enthousiast als ik ben
                                                vind ik het leuk om steeds weer nieuwe dingen te leren. Ben ik nog niet
                                                klaar met Laravel, zit ik alweer klaar om aan de slag te gaan met een
                                                andere nieuwe ontwikkel omgeving. Sociaal en een echte team speler, maar
                                                ook zeker zelfstandig. Natuurlijk pas net begonnen als software
                                                ontwikkelaar verheug ik me op al het moois dat nog gaat komen. Wat is
                                                mijn volgende uitdaging?</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <img src="https://picsum.photos/200/300" alt="pic" className="picture"/>
                                    </div>
                                </div>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer offset={3} speed={1}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="experience">
                                            <h2 className='title'>ERVARING</h2>
                                            <li>
                                                <ul>Curio Student</ul>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer offset={4} speed={2}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="school">
                                            <h2 className="title">OPLEIDING</h2>
                                            <ul>
                                                <li className="pt-3 row school">
                                                    <p className="school__name col-8">CURIO</p>
                                                    <p className="school__date col-4">2019 - Heden</p>
                                                    <small className="text-muted school__direction sub-title">MBO
                                                        4</small>
                                                    <p className="school__description">...</p>
                                                </li>
                                                <li className="pt-3 row school">
                                                    <p className="school__name col-8">NASSAU SCHOLENGEMEENSCHAP</p>
                                                    <p className="school__date col-4">2015 - 2019</p>
                                                    <small
                                                        className="text-muted school__direction sub-title">MAVO</small>
                                                    <p className="school__description">Mavo Diploma</p>
                                                </li>
                                                <li className="pt-3 row school">
                                                    <p className="school__name col-8">DR. DE VISSER BASISSCHOOL</p>
                                                    <p className="school__date col-4">2009 - 2015</p>
                                                    <small className="text-muted school__direction sub-title"></small>
                                                    <p className="school__description">Mavo Advies</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <a href="/"><img src="https://picsum.photos/200/300" alt="project"
                                                         className="picture"/></a>
                                    </div>
                                </div>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer offset={5} speed={2}>
                            <div className="container">
                                <h2 className="title">PROJECTEN</h2>
                                <div className="row pt-3 project">
                                    <div className="col-6">
                                        <div className="project__frame">
                                            <a href="//cv.florisbogers.nl"><img className="project__frame--picture"
                                                             src="src/img/cv1.png" alt="project"/></a>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="project__name col-8">Mijn eerste portfolio!</div>
                                        <div className="project__description">Mijn eerste portfolio heb ik samen gemaakt
                                            met mijn vader, dit was om te soliciteren.
                                        </div>
                                        <div className="project__date">12-12-2020</div>
                                    </div>
                                </div>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer offset={6} speed={2}>
                            <div className="container">
                                <h2 className="title">SKILLS</h2>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </ParallaxLayer>
                    </Parallax>
                </div>
            </div>
        </div>
    );
}

export default App;
