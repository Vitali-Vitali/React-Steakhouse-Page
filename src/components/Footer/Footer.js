import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="text-white text-center text-lg-left">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-5">Locations:</h5>
                            <p>
                                226 Halifax Court
                                <br />
                                New York, NY 10031
                                <br />
                                (248) 675-4007
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <p className="mt-3">
                                416 NE. Sherman St
                                <br />
                                New York, NY 10027
                                <br />
                                (248) 675-4007
                            </p>
                            <p>
                                59 North Shadow Brook St.
                                <br />
                                Bronx, NY 10457
                                <br />
                                (248) 675-4007
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0"></div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-5">Working hours:</h5>
                            <div className="row">
                                <div className="col-6">
                                    <p>Monday-Friday</p>
                                    <p>Saturday</p>
                                    <p>Sunday</p>
                                </div>
                                <div className="col-6">
                                    <p>9:00 AM - 5:00PM</p>
                                    <p>12:00 AM - 11:00PM</p>
                                    <p>10:00PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="text-center p-3">
                    © 2020 Copyright: <a className="text-white" href="https://google.com/">Google.com</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;