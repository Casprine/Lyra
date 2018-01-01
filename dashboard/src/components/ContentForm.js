import React, { Component } from 'react';
import { Card, Form, Input, Button } from 'semantic-ui-react';
import axios from 'axios';


class ContentForm extends Component{

    constructor(props){
        super(props);
        /* Created a new resources object because we can't mutate state directly. We mutate this object
        before setting the state
        */
        this.resources = {};
        this.state = { resources : {} }
    }

    componentWillMount(){
        // Creating a resources form object based on model received from prop
        Object.keys(this.props.resources).map(key => {
            this.resources[key] = '';
            console.log(this.resources);
        })
    }

    onChangeForm(key, value){
        this.resources[key] = value;
        this.setState({ resources : this.resources }, () => {
            console.log(this.state.resources);
        });
    }

    onSubmitClick(){
        axios.post('/addContent', {
            resources : this.state.resources
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render(){
        if(this.props.resources === false){
            return(
                <Card>
                   No models found
                </Card>
            )
        }else{

            return(
                <Card>
                    <Form style={{ padding : '8px' }}>
                        {Object.keys(this.props.resources).map(key => {
                            return(
                                <Form.Field key={key}>
                                    <label>{key}</label>
                                    <Input
                                        type={this.props.resources[key]}
                                        placeholder={this.props.resources[key]}
                                        onChange={event => this.onChangeForm(key, event.target.value)}
                                    />
                                </Form.Field>
                            )
                        })}
                        <Button color='green' onClick={ () => this.onSubmitClick() }>Submit</Button>
                    </Form>
                </Card>
            )
        }
    }
}

export default ContentForm;