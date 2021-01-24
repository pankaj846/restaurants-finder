import React from 'react'

const Restaurant = (props) => {
	return (
		<div className="restaurant-tile">
			<img alt="" src={props.thumb} className="rest-img" />
			<div className="rest-rating">
				<p style={{ backgroundColor: `${props.rating_color}` }}>{props.rating}</p>
				<div>{props.votes} votes</div>
			</div>
			<div className="rest-details">
				<h2 className="rest-name">{props.name}</h2>
				<div className="rest-loc">{props.locality}</div>
				<div className="rest-add">{props.address}</div>
				<hr />
				<div className="rest-cusines"><strong>CUISINES:</strong> {props.cuisines}</div>
				<div className="rest-cost"><strong>COST FOR TWO:</strong> Rs.{props.cost}</div>
			</div>
		</div>
	)
}

export default Restaurant
