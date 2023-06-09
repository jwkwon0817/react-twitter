import React, { useState } from 'react';

const AuthRoute = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [ newAccount, setNewAccount ] = useState(true);
	
	const onChange = (event) => {
		const { target: { name, value } } = event;
		
		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	}
	
	const onSubmit = (event) => {
		event.preventDefault();
		if (newAccount) {
			// TODO: create account
		} else {
			// TODO: log in
		}
	}
	
	return (
		<div onSubmit={  onSubmit }>
			<form>
				<input name={ "email" } type={ "text" } placeholder={ "Email" } required value={ email } onChange={ onChange }/>
				<input name={ "password" } type={ "password" } placeholder={ "Password" } required value={ password } onChange={ onChange } />
				<input type={ "submit" } value={ newAccount ? 'Create Account' : 'Log In' } />
			</form>
			<div>
				<button>Continue with Google</button>
				<button>Continue with GitHub</button>
			</div>
		</div>
	);
}

export default AuthRoute;