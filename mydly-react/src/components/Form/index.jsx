import React from 'react'

const Form = (prop) => {
	return <form {...prop}>{prop.children}</form>
}

export default Form
