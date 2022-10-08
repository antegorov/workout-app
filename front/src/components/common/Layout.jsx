import React from 'react'
import Header from './header/header'

import styles from './Layout.modules.scss'

const Layout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header>{children}</Header>
		</div>
	)
}

export default Layout
