import { Spinner } from '@/presentation/components/spinner/spinner'
import React from 'react'
import Styles from './login-styles.scss'
import { Logo } from '@/presentation/components/logo/logo'

const Login: React.FC = () => (
  <div className={Styles.login}>
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para programadores</h1>
    </header>
    <form className={Styles.form}>
      <h2>login</h2>
      <div className={Styles.inputWrap}>
        <input type="email" name="email" placeholder="Digite seu e-mail" />
        <span className={Styles.status}>🔴</span>
      </div>
      <div className={Styles.inputWrap}>
        <input type="password" name="password" placeholder="Digite sua senha" />
        <span className={Styles.status}>🔴</span>
      </div>
      <button className={Styles.submit} type="submit">Entrar</button>
      <span className={Styles.link}>Criar conta</span>
      <div className={Styles.errorWrap}>
        <Spinner className={Styles.spinner}/>
        <span className={Styles.error}>Error</span>
      </div>
    </form>
    <footer className={Styles.footer} />
  </div>
)

export default Login