import Link from 'next/link';
import React, { useState } from 'react';
import { navigator_menu_items } from '../../../constant/navigator';
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';

const Index = () => {
	const router = useRouter();
	const [searchBox, setSearchBox] = useState(false);
	const handleSearchBox = () => {
		setSearchBox(!searchBox);
		console.log(searchBox);
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<span className="navbar-brand text-dark p-2 menu-icon" href="#">
					<AppsIcon />
				</span>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						{navigator_menu_items?.map((data) => (
							<li
								key={data?.name}
								className={
									data?.dropDown ? 'nav-item dropdown ms-5 ' : 'nav-item ms-5 '
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
					<div className="menu_search p-2 ms-auto" onClick={handleSearchBox}>
						<SearchIcon />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Index;
