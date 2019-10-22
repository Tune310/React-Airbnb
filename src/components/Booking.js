import React from 'react';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import { Button } from 'reactstrap';
import Dropdown from './Dropdown';

const Booking = () => {
	const styleElement = document.createElement('dom-module');
	styleElement.setAttribute('theme-for', 'vaadin-text-field');

	styleElement.innerHTML = 
	`<template>
	<style>
		:host([theme="custom-background"]) [part="input-field"] {
			background-color: white !important;
		}
	</style>
	</template>`;

	styleElement.register('custom-background'); 
	return (
		<div className="booking">
			<h1>Book unique places to stay and things to do.</h1>
			<form>
				<span>WHERE</span>
				<div className="where-container">
					<input className="where" placeholder="Anywhere"></input>
				</div>
				<div className="checkin-out">
					<div className="checkin-container">
						<span>CHECK-IN</span>
						<div className="checkinout-input-wrapper">
							<vaadin-date-picker theme="custom-background" placeholder="mm/dd/yyyy">
							</vaadin-date-picker>
							{/* <input className="checkin-input" placeholder="mm/dd/yyyy"></input> */}
						</div>
					</div>
					<div className="checkout-container">
						<span>CHECKOUT</span>
						<div className="checkinout-input-wrapper">
							<vaadin-date-picker theme="custom-background" className="vaadin-input" placeholder="mm/dd/yyyy">
							</vaadin-date-picker>
							{/* <input className="checkout-input" placeholder="mm/dd/yyyy"></input>	*/}
						</div>
					</div>
				</div>
				<span>GUESTS</span>
				<Dropdown />
				<div className="maximum-width flex just-flex-end">
				<button className="button-search" type="submit"><span>Search</span></button>
				</div>
				
			</form>
		</div>
	)
}

export default Booking;