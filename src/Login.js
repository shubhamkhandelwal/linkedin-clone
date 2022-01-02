import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fullName, setFullName] = useState("");
	const [profilePicUrl, setProfilePicUrl] = useState("")
	const dispatch = useDispatch()

	const register = (e) => {
		if (!fullName) {
			return alert("Please enter a full name !")
		}
		auth.createUserWithEmailAndPassword(email, password).then(userAuth => {
			userAuth.user.updateProfile({
				displayName: fullName,
				photoURL: profilePicUrl,
			}).then(() => {
				dispatch(login({
					email: userAuth.user.email,
					uid: userAuth.user.uid,
					displayName: fullName,
					photoURL: profilePicUrl,
				})
			);
		})
	}).catch(error => alert(error))
}
	const loginToApp = (e) => {
			e.preventDefault();
			auth.signInWithEmailAndPassword(email,password).then(userAuth=> {
				dispatch(login({
					displayName: userAuth.user.displayName,
					uid: userAuth.user.uid,
					photoURL: userAuth.user.photoURL,
					email: userAuth.user.email,
				}))
			}).catch(error => alert(error))
		}
		return (
			<div className="login">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1280px-LinkedIn_Logo_2013.svg.png" alt="" />
				<form>
					<input type="text"
						placeholder="Full name (required if registering)"
						value={fullName}
						onChange={e => setFullName(e.target.value)} />
					<input type="text"
						placeholder="Profile Picture URL (Optional) "
						value={profilePicUrl} onChange={e => setProfilePicUrl(e.target.value)} />
					<input type="email"
						placeholder="Email "
						value={email} onChange={e => setEmail(e.target.value)} />
					<input type="password" placeholder="Password "
						value={password} onChange={e => setPassword(e.target.value)}
					/>
					<button type="submit" onClick={loginToApp}>Sign In</button>
				</form>
				<p>Not a member?{" "}
					<span className="login__register" onClick={register}>Register Now</span>
				</p>

			</div>
		)
	}

	export default Login
