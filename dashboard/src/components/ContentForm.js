import React, { Component } from 'react';
import { Card, Form, Button } from 'semantic-ui-react';
import axios from 'axios';


class ContentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            titleText : '',
            bodyText : '',
            formLoading : false,
            formError : false,
            formSuccess : false
        }
    }

    onTitleTextChange(value){
        this.setState({ titleText : value })
    }

    onBodyTextChange(value){
        this.setState({ bodyText : value })
    }

    onSubmitButtonClicked(){
        this.setState({ formLoading : true });
        axios.get('/hello')
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })

    }

    render(){
        return(
            <div>
                <Card>
                    <Card.Content>
                        <Card.Header>
                            Add New Content
                        </Card.Header>
                        <Form loading={this.state.formLoading}>
                            <Form.Field>
                                <label>Title</label>
                                <input name='titleText' value={this.state.titleText} onChange={event => this.onTitleTextChange(event.target.value)}/>
                            </Form.Field>

                            <Form.Field>
                                <label>Body</label>
                                <input name='bodyText' value={this.state.bodyText} onChange={event => this.onBodyTextChange(event.target.value)}/>
                            </Form.Field>
                        </Form>

                        <Button color="green" onClick={() => this.onSubmitButtonClicked()}>
                            Submit
                        </Button>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default ContentForm;