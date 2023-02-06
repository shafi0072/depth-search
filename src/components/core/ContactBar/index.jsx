import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { contract_Navbar_logo } from '../../../constant/contractNav';
import { contract_navbar_contractInfo } from '../../../constant/contractNav';
import { navigator_menu_items } from '../../../constant/navigator';
import { useRouter } from 'next/router';
import AosConfig from '../../../config/AosConfig';

const Index = () => {
	const router = useRouter();
	const { icon, name } = contract_Navbar_logo;
	const [scrollPosition, setScrollPosition] = useState(0);
	const [menuChange, setMenuChange] = useState(null);

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
		if (scrollPosition > 90) {
			setMenuChange(true);
		} else {
			setMenuChange(false);
		}
	}, [scrollPosition, setMenuChange]);
	return (
		<AosConfig>
			<nav className="navbar navbar-expand-lg bg-light navbarMain">
				<div className="container-fluid container">
					<span
						className="navbar-brand d-flex justify-content-center align-items-center"
						href="#"
					>
						<div className="logo_icon">{icon}</div>
						<div className="ms-2 logo_branding">
							<h2>{name}</h2>
						</div>
					</span>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav1"
						aria-controls="navbarNav1"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav1">
						<ul className="navbar-nav ms-auto">
							{!menuChange &&
								contract_navbar_contractInfo.map((contractInfo) => (
									<li
										data-aos={!menuChange ? 'fade-down' : 'fade-up'}
										key={contractInfo?.contractInfo?.label}
										className="nav-item"
									>
										<Link
											className="nav-link active d-flex align-items-center"
											aria-current="page"
											href={
														contractInfo?.contact_number
															? `tel:${contractInfo?.contact_number}`
															: contractInfo?.contact_whatsapp
															? `whatsapp://send?text=Hello Depth Search!&phone=${contractInfo?.contact_whatsapp}`
															: `mailto:${contractInfo?.contact_mail}`
													}
										>
											<div className="contract_icon">{contractInfo?.icon}</div>
											<div className="ms-1 contractInfoLabel">
												<span>{contractInfo?.label}</span>
												
													<span className="contract_information">
														{' '}
														{contractInfo?.contact_number
															? contractInfo?.contact_number
															: contractInfo?.contact_whatsapp
															? contractInfo?.contact_whatsapp
															: contractInfo?.contact_mail}
													</span>
												
											</div>
										</Link>
									</li>
								))}
							{menuChange &&
								navigator_menu_items?.map((data) => (
									<li
										data-aos={menuChange ? 'fade-up' : 'fade-down'}
										key={data?.name}
										className={
											data?.dropDown
												? 'nav-item dropdown ms-5 '
												: 'nav-item ms-5 '
										}
									>
										<span
											className={
												data?.dropDown
													? 'nav-link dropdown-toggle text-dark nav-toggle'
													: 'nav-link text-dark nav-toggle'
											}
											onClick={() => router.push(data?.link)}
											role={data?.dropDown ? 'button' : ''}
											data-bs-toggle={data?.dropDown ? 'dropdown' : ''}
											aria-expanded="false"
										>
											{data?.name}
										</span>
										<ul className="dropdown-menu navbarBackground text-light">
											{data?.dropDown?.length > 0 &&
												data?.dropDown.map((data) => (
													<li key={data?.name}>
														<span
															className="dropdown-item"
															onClick={() => router.push(data?.link)}
														>
															{data?.name}
														</span>
													</li>
												))}
										</ul>
									</li>
								))}
						</ul>
					</div>
				</div>
			</nav>
		</AosConfig>
	);
};

export default Index;
