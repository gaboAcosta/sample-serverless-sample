
import React from "react";
import Container from 'react-bootstrap/Container';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import authService from "../services/authService"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      redirectUser: false
    }
  }
  async handleLogin (e) {
    e.preventDefault();
    const { email, password } = this.state
    if(!email || !password) {
      console.log('missing input')
      return
    }
    try {
      const response = await authService.login(email, password)
      const { token } = response.data
      if (!token) throw new Error('Internal server error')
      sessionStorage.setItem('token', token);
      this.setState({ redirectUser: true })
    } catch (err) {
      alert(err.message)
    }
  }
  updateState (field, { target: { value }}) {
    this.setState({ [field]: value })
  }
  render() {
    const { email, password, redirectUser } = this.state
    if (redirectUser) {
      window.location.href = '/'
    }
    return (
      <div>
        <Container>
            <Modal
              show={true}
              size="sm"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                  Please login!
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={this.handleLogin.bind(this)}>
                  <Row key={`email-input`}>
                    <Col>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type={'email'}
                        placeholder={'email'}
                        value={email}
                        onChange={(e)=> this.updateState('email', e)}
                      />
                    </Col>
                  </Row>
                  <Row key={`password-input`}>
                    <Col>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type={'password'}
                        placeholder={'password'}
                        value={password}
                        onChange={(e)=> this.updateState('password', e)}
                      />
                    </Col>
                  </Row>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" type="submit" onClick={this.handleLogin.bind(this)}>
                  Login!
                </Button>
              </Modal.Footer>
            </Modal>
        </Container>
      </div>
    );
  }
}

export default Login;
