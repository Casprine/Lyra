import React, { Component } from 'react';
import { Card, Form, Input } from 'semantic-ui-react';


class ContentForm extends Component{

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
                                <Form.Field>
                                    <label>{key}</label>
                                    <Input placeholder={this.props.resources[key]}/>
                                </Form.Field>
                            )
                        })}
                    </Form>
                </Card>
            )
        }
    }
}

export default ContentForm;