import React, { Component } from 'react'
import { Jumbotron, Button, Form, FormGroup, Label, Input, } from 'reactstrap'
import { Link } from 'react-router-dom'
import alert from 'sweetalert2'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  onRegist = (e) => {
    e.preventDefault()
    const username = this.state.username
    const email = this.state.email
    const password = this.state.password
    if (username === '' && email === '' && password === ''){
      alert.fire({
        icon: 'error',
        tittle: 'Sorry',
        text: 'please fill all form'
      })
    } else {
      alert.fire({
        icon: 'success',
        tittle: 'Congratulations!!',
        text: 'Register Success!!'
      })
      this.props.history.push('/home')
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center mt-5 content">
          <Jumbotron>
            <h3 className='mb-4'>Welcome! <br></br> Please Regist Dude</h3>
            <Form onSubmit={this.onRegist}>
              <FormGroup>
                <Label for="exampleEmail">Username</Label>
                <Input type="name" name="username" id="exampleName" placeholder="Your Username" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Your Password" onChange={this.handleChange} />
              </FormGroup>
              <div>
                <Button color='success'>Register</Button>  
              </div>
              <div className="mt-2 regis">
                <Link to='/login'>Already have account? please Login</Link>
              </div>
            </Form>
          </Jumbotron>
        </div>
      </>
    )
  }
}