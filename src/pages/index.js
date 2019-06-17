import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
	<div style={{ color: `purple` }}>
		<Link to="/contact/">Contact</Link> 
		<h1>Hello Aiden! </h1>
		<p> Have a great day! </p>
		<img src="https://source.unsplash.com/random/400x200" alt="" />
	</div>
)
