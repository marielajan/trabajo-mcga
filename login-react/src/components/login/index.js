import React from 'react'
import styles from './login.module.css'

class Login extends React.Component {

  state = {
    email: undefined,
    password: undefined,
    loginSuccess: false,
    message: undefined,
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
      loginSuccess: false,
      message: undefined,
    })
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
      loginSuccess: false,
      message: undefined,
    })
  }

  handleLogin = () => {
    if (this.state.email && this.state.password) {
      this.setState({
        message: 'Login realizado con éxito',
        loginSuccess: true,
      })
    } else {
      this.setState({
        message: 'Debe ingresar todos los datos.',
        loginSuccess: false,
      })
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.loginText}>Iniciar sesión</h1>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className={styles.input}
            onChange={this.onChangeEmail}
            defaultValue={this.state.email}
          />
          <input
            type="text"
            name="password"
            placeholder="Contraseña"
            className={styles.input}
            onChange={this.onChangePassword}
            defaultValue={this.state.password}
          />
          <button onClick={this.handleLogin} className={styles.button}>
            Login
          </button>
          {this.state.message && (
            <p
              className={styles.message}
              style={{ color: this.state.loginSuccess ? '#17fd00' : '#ad2c2c' }}
            >
              {this.state.message}
            </p>
          )}
        </div>
      </div>
    )
  }

}

export default Login