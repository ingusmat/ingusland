import React from 'react';
import PageHeader from "../components/header";
import PageFooter from "./footer";
import '../styles/main.scss';
import layoutStyles from './layout.module.scss'

const Layout = ({children}) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <PageHeader/>
        {children}
      </div>
      <PageFooter/>
    </div>
  )
}

export default Layout;