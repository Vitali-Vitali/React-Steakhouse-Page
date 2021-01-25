import React from 'react';
import './Main.css';
import img1 from './../../assets/1.jpg';
import img2 from './../../assets/2.jpg';
import img3 from './../../assets/3.jpg';

import team1 from './../../assets/t1.jpg';
import team2 from './../../assets/t2.jpg';
import team3 from './../../assets/t3.jpg';

const Main = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row p-5 justify-content-center align-items-center">
                    <div className="col-md-4 pe-5 paragraph"><h2>Discover Our Menu</h2></div>
                    <div className="col-md-4">
                        Few things come close to the joy of steak and chips - cooked simply with tender, loving care. Rest assured that our chefs treat our Irish beef with the respect it deserves. The open kitchen in many of our steakhouses are testimony to that.
                </div>
                </div>
            </div>
            <div className="container-fluid section text-white p-5 text-center">
                <h2 className="mb-5">Our promise:</h2>

                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 text-end">
                        <h2>100% meat</h2>
                        <p>
                            Meat always comes to us from the same supplier. For years it has
                            not disappointed us with quality. It is usually fresh, sometimes
                            frozen. At least 3 times a week.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src={img1} alt="meat" className="img-fluid" />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 text-end">
                        <h2>100% spices</h2>
                        <p>
                            The quality of the beef served at Whiskey in the Jar is so high
                            that it is a shame to spoil its flavor with too many spices. We
                            are minimalist with respect to the issue. Just before putting on
                            the barbecue, the meat is lightly sprinkled with Himalayan salt
                            and black hammered pepper.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src={img2} alt="meat" className="img-fluid" />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 text-end">
                        <h2>100% taste</h2>
                        <p>
                            Good taste is what we are up to. We cook with passion,
                            courageously combine ingredients, creating original recipes of
                            dishes. We take wings when guests like our kitchen
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src={img3} alt="meat" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="text-center bg-image-book">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <a className="m-3 btn btn-outline-light btn-lg" href="#" role="button">Book a Table</a>
                    </div>
                </div>
            </div>
            <div className="container-fluid section p-5">
                <div className="row justify-content-center text-center text-white">

                    <h2 className="mb-5">Our Team</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="card mb-3 me-3 p-0 border-0" style={{ "maxWidth": "440px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={team1} alt="..." className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Max</h5>
                                    <p className="card-text">I cook traditional recipes that are sacred in my family,
                        to share my love for food.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 me-3 p-0 border-0" style={{ "maxWidth": "440px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={team2} alt="..." className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Loui</h5>
                                    <p className="card-text">I believe cooking is like creating art. You have to
                        carefully craft each dish with love and time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 me-3 p-0 border-0" style={{ "maxWidth": "440px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={team3} alt="..." className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Bohran</h5>
                                    <p className="card-text">I strongly believe eating out should be a part of
                        everyone's routine.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;