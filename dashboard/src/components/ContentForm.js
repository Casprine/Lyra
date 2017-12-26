import React, { Component } from 'react';
import { Card, Form, Button, TextArea, Dropdown, Grid} from 'semantic-ui-react';
import axios from 'axios';


const options = [
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
]


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

    onImageLinkChange(value){
        this.setState({ ImageLink : value})
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
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Card raised="1">
                            <Card.Content>
                                <Card.Header>
                                    Add New Resource
                                </Card.Header>
                                <Form loading={this.state.formLoading}>
                                    <Form.Field>
                                        <label className="center">Title</label>
                                        <input name='titleText' value={this.state.titleText} onChange={event => this.onTitleTextChange(event.target.value)}/>
                                    </Form.Field>

                                    <Form.Field>
                                        <label className="center">Body</label>
                                        <TextArea placeholder='about the product' style={{ maxHeight: 100 }} />                    
                                    </Form.Field>

                                    <Form.Field>
                                        <label className="center" >
                                            Image -- Link
                                        </label>
                                        <input name="imageLink" value={this.state.ImageLink} onChange={event => this.onImageLinkChange(event.target.value)}/>
                                    </Form.Field>

                                    <Form.Field>
                                        <label className="center" >
                                            Resource -- Link
                                        </label>
                                        <input name="imageLink" value={this.state.ImageLink} onChange={event => this.onImageLinkChange(event.target.value)} />
                                    </Form.Field>

                                    <Form.Field>
                                        <label className="center">
                                        Tag
                                        </label>
                                    <Dropdown placeholder='tags' fluid multiple selection options={options} />        
                                    </Form.Field>

                                    <Button color="blue" onClick={() => this.onSubmitButtonClicked()} className="btn">
                                        Submit
                                </Button>

                                </Form>
                       </Card.Content>
                    </Card>
                </Grid.Column>





            <Grid.Column>
                <Card raised="1">
                    <Card.Content>
                        <Form>
                            <Form.Field>
                                <label className="center">
                                    Tag
                                </label>
                                <input name="keys"/>
                            </Form.Field>
                            

                        <Button color="blue" className="btn"> Add </Button>
                   </Form>
                </Card.Content>
            </Card>
        </Grid.Column>
    </Grid.Row>
</Grid>
        )
    }
}

export default ContentForm;