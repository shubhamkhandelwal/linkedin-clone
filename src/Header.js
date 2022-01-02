import React from 'react'
import logo from './linkedInLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';

function Header() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser)
	const logoutFromApp = () => {
		dispatch(logout())
	}
	return (
		<div className='header'>
			<div className="header__left">
				<img src={logo} alt="" />
				<div className="header__search">
					<SearchIcon />
					<input type="text" placeholder='Search' />
				</div>
			</div>
			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title ="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
				<HeaderOption Icon={ChatIcon} title="Messaging"/>
				<HeaderOption Icon={NotificationsIcon} title="Notifications"/>
				<HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQFqFGPTNQZ88w/profile-displayphoto-shrink_800_800/0/1599418469661?e=1646265600&v=beta&t=geSlBFOkfPDCT4HvoUmSS7LtLdqW5RwPCEcShiz99-w" 
					title={user ? user?.displayName : "Sign In" }
					onClick={logoutFromApp}/>
			</div>
		</div>
	)
}

export default Header