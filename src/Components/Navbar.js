import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; import 'jquery/dist/jquery.min.js';


function Navbar() {
  
    return (
     
        <div className="maincontainer">
        
         
          <div className="container">
          <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Free IPTV</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/navbar/allusers">
                            <i className="fa fa-users"></i>
                            Users
                            
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/navbar/livecats">
                            <i className="fa fa-television">
                                <span className="badge badge-danger"></span>
                            </i>
                            Live Cats
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i className="fa fa-television">
                                <span className="badge badge-danger">11</span>
                            </i>
                            Live Channels
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i className="fa fa-file-video-o">
                                <span className="badge badge-primary"></span>
                            </i>
                            VOD
                            </a>
                           
                        </li>
                        </ul>
                        <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i className="fa fa-film">
                                <span className="badge badge-info"></span>
                            </i>
                            Test
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <i className="fa fa-globe">
                                <span className="badge badge-success">11</span>
                            </i>
                            Test
                            </a>
                        </li>
                        </ul>
                        
                    </div>
                    </nav>
                
                </div> 
             
        </div>
       
      
)
};

export default Navbar
