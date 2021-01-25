import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Steakhouse</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Book</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Team</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="text-center bg-image">
                <div className="mask">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-5">Steak House</h1>
                            <h3 className="mb-5">A premium and authentic steak house</h3>
                            <a className="m-3 btn btn-outline-light btn-lg" href="#!" role="button">See Menu</a>
                            <a className="m-3 btn btn-outline-light btn-lg" href="#!" role="button">Book a Table</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;