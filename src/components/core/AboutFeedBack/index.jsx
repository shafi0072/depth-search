import React, { useCallback, useEffect, useState } from 'react';
import { about_feedback } from '../../../constant/aboutFeedback';

const Index = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	let [experience, setExperience] = useState(1);
	let [clients, setClients] = useState(1);
	let [captured, setCaptured] = useState(1);
	let [masterclass, setMasterClass] = useState(1);

	const handleScroll = useCallback(() => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	}, [setScrollPosition]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	useEffect(() => {
		if (scrollPosition > 1540) {
			setInterval(function () {
				if (experience < about_feedback?.experience) {
					setExperience(experience++);
				}
			}, 300);
			setInterval(function () {
				if (clients < about_feedback?.clientse) {
					setClients(clients++);
				}
			}, 10);
			setInterval(function () {
				if (captured < about_feedback?.captured) {
					setCaptured(captured++);
				}
			}, 10);
			setInterval(function () {
				if (masterclass < about_feedback?.Masterclass) {
					setMasterClass(masterclass++);
				}
			}, 1200);
		}
	}, [scrollPosition]);
	return (
		<div className="about_feedback container">
			<div className="row">
				<div className="col-md-3">
					<div className="text-center">
						<h1>{experience}</h1>
						<p>Year experience in this field</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="text-center">
						<h1>{clients}</h1>
						<p>Worldwide good clientse</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="text-center">
						<h1>{captured}</h1>
						<p>Worldwide Captured online base</p>
					</div>
				</div>
				<div className="col-md-3">
					<div className="text-center">
						<h1>{masterclass}</h1>
						<p>Masterclass Team ever made</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
