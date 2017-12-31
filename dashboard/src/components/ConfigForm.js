import React, { Component } from 'react';
import { Card, Form, Input } from 'semantic-ui-react';

class ConfigForm extends Component{
    constructor(props){
        super(props);
        this.state = { resourceName : '', datatype : '' }
    }

    handleResourceNameChange(value){
        this.setState({ resourceName : value }, () => {
            console.log(this.state);
            this.props.sendData(this.props.formKey, this.state)
        })
    }

    handleDatatypeChange(value){
        this.setState({ datatype : value }, () => {
            console.log(this.state);
            this.props.sendData(this.props.formKey, this.state)
        })
    }

    render(){
        return(
            <Card>
                <Form style={{ padding : '8px' }}>
                    <Form.Field>
                        <label>Resource Name</label>
                        <Input
                            onChange={ event=> this.handleResourceNameChange(event.target.value) }
                            value={this.state.resourceName}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Datatype</label>
                        <Input
                            onChange={ event => this.handleDatatypeChange(event.target.value) }
                            value={this.state.datatype}
                        />
                    </Form.Field>
                </Form>
            </Card>
        )
    }
}

export default ConfigForm;