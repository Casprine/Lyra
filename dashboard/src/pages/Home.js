import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="main">
                <div className="logo">
                    <img src="http://res.cloudinary.com/kre/image/upload/v1514318568/shot_seo_50_rqnkqc.png"/>
                </div>
                <div className="title"> Lyra </div>
                <div className="about"> The headless CMS for babies <span class="em em-baby"/></div>


                <div className="clicks"> 
                    <Link to='/addContent'><Button primary>Dashboard</Button></Link>
                    <Link to='/config'><Button color='olive'>Create Models</Button></Link>
                </div>
            </div>



        )   
    }
}

export default Home;