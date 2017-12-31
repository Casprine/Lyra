import React, { Component } from 'react';
import axios from 'axios';

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillMount(){
        axios.get('/readContentModel')
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render(){
        return(
            <div>
                Done
            </div>
        )
    }
}

export default Content;


