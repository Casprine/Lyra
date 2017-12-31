import React, { Component } from 'react';
import ConfigForm from '../components/ConfigForm';
import { Header, Button } from 'semantic-ui-react';
import axios from 'axios';

let forms = [];
let formData = [];

class Config extends Component{
    constructor(props){
        super(props);
        this.state = { formNumber : 0 };
    }

    onFormIncrement(){
        forms.push(
            <ConfigForm
                key={this.state.formNumber}
                formKey={this.state.formNumber}
                sendData={this.receiveData}/>
        );
        this.setState({ formNumber : this.state.formNumber + 1 });
    }

    onFormDecrement(){
        forms.pop();
        this.setState({ formNumber : this.state.formNumber - 1 })
    }

    receiveData(key, data){
        console.log('Received this key : ', key);
        formData[key] = data;
        console.log(formData);
    }

    onFormSubmit(){
        console.log('Submitting');
        axios.post('/createModel', {
            model : formData
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){

        return(
            <div className="new">
                <Header>
                    Add Resource
                </Header>
                <p>Configure the resource types you want to use</p>
                <div>
                    {forms}
                </div>
                <br/>
                <span>
                    <Button color='green' onClick={() => this.onFormIncrement()}>
                    Add Form
                    </Button>
                    <Button color='red' onClick={() => this.onFormDecrement()}>
                    Remove Form
                    </Button>
                </span><br/>
                <Button color='blue' style={{ marginTop : '5px' }} onClick={() => this.onFormSubmit()}>
                    Submit
                </Button>
            </div>
        )
    }
}

export default Config;