import React, { Component } from 'react';
import { Card, Form, Input, Button } from 'semantic-ui-react';


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
                                        placeholder={this.props.resources[key]}
                                        onChange={event => this.onChangeForm(key, event.target.value)}
                                    />
                                </Form.Field>
                            )
                        })}
                        <Button color='green'>Submit</Button>
                    </Form>
                </Card>
            )
        }
    }
}

export default ContentForm;