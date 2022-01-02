import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {
	const recentItems = topic => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	)

	const user = useSelector(selectUser);

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img src="https://images.unsplash.com/photo-1640885939120-2d66e488f9aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
				{user?.photoURL ? <Avatar className='sidebar__avatar' src={user?.photoURL} /> : <Avatar className='sidebar__avatar'> {user?.email[0]} </Avatar>}
				<h2>{user?.displayName}</h2>
				<h4>{user?.email}</h4>
			</div>

			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you</p>
					<p className='sidebar__statNumber'> 3,333</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on post</p>
					<p className='sidebar__statNumber'> 4,333</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItems("reactjs")}
				{recentItems("softwareengineering")}
				{recentItems("programming")}
				{recentItems("design")}
				{recentItems("developer")}
			</div>
		</div>
	)
}

export default Sidebar
