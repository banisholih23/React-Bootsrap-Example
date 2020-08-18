import React, { Component } from 'react'
import { Jumbotron, Button, Form, FormGroup, Label, Input, } from 'reactstrap'
import { Link } from 'react-router-dom'
import alert from 'sweetalert2'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onLogin = (e) => {
    e.preventDefault()
    const email = this.state.email
    const password = this.state.password
    if (email === '' && password === ''){
      alert.fire({
        icon: 'error',
        tittle: 'Sorry',
        text: 'please fill all form'
      })
    } else {
      alert.fire({
        icon: 'success',
        tittle: 'Congratulations!!',
        text: 'Login Success!!'
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
            <Form onSubmit={this.onLogin}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Your Password" onChange={this.handleChange} />
              </FormGroup>
              <div>
                <Button color='success'>Login</Button>  
                <Link to='/register'>
                  <Button color="info" className="text-white ml-2">Register</Button>
                </Link>
              </div>
            </Form>
          </Jumbotron>
        </div>
      </>
    )
  }
}