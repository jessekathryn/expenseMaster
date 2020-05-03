import React from "react";
import { Link } from "react-router-dom";
import AppMenu from './AppMenu';
import { Collapse } from 'reactstrap';

const Navbar = (props) => {
    return (
        <React.Fragment>
            <div className="topnav shadow-sm">
                <div className="container-fluid">
                    <nav className="navbar navbar-light navbar-expand-lg topbar-nav">
                        <Collapse isOpen={props.isMenuOpened} className="navbar-collapse" id="topnav-menu-content">
                            <AppMenu mode={'horizontal'} />
                            <Link to="/profiles" style={{ paddingRight: "10px" }}>Profiles</Link>
                            <Link to="/profiles/new">Add Profile</Link>
                        </Collapse>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
