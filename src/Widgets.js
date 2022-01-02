import { FiberManualRecord, Info } from '@mui/icons-material'
import React from 'react'
import './Widgets.css'

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className='widgets__article'>
			<div className="widgets__articleLeft">
				<FiberManualRecord />
			</div>
			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	)
	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<Info />
			</div>

			{newsArticle("Earth Attack", "Last few year of survival")}
			{newsArticle("Corona Virus", "Omicron is back")}
			{newsArticle("New Farm bill", "Farmers are happy now")}
			{newsArticle("Loniless is New culture", "No need of husband in marraige")}
			{newsArticle("Earth Attack", "Last few year of survival")}
			{newsArticle("Earth Attack", "Last few year of survival")}
			{newsArticle("Earth Attack", "Last few year of survival")}
		</div>
	)
}

export default Widgets
