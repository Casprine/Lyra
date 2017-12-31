import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

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
                <div className="about"> The headles CMS for babies <i class="em em-baby"></i></div> 


                <div className="clicks"> 
                    <Button primary>Dashboard</Button>
                    <Button color='olive'>Create Models</Button>
                </div>
            </div>



        )   
    }
}

export default Home;