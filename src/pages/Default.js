import React, { Component } from 'react';
import Header from "../components/Header";
import { Link } from "react-router-dom";

class Default extends Component {
    render() {
        return (
           <Header title="404" styleClass="default-hero">
           <h2 className="text-light text-uppercase">
               This page is not found
           </h2>
           <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3" >
                    return home
                </Link>

           </Header>
        );
    }
}

export default Default;