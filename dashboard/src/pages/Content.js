import React, { Component } from 'react';
import ContentForm from '../components/ContentForm';
import axios from 'axios';

class Content extends Component{
    constructor(props){
        super(props);
        this.state = { resources : false };
    }


    componentWillMount(){
        axios.get('/readContentModel')
            .then(response => {
                console.log(response.data.payload);
                this.setState({ resources : response.data.payload });

            })
            .catch(err => {
                console.log(err);
            })
     }

     render(){
        if(this.state.resources === false){
            return(
                <div>Fetching data</div>
            )
        }else{
            return(
                <ContentForm resources={this.state.resources}/>
            )
        }
     }
}



export default Content;


