export const Nav_data = [
	{
		id: 1,
		title: 'Home',
		link: '/',
		dropdown:false
	},
	{
		id: 2,
		title: 'Services',
		link: '/services',
		dropdown:[
			{
				id:1,
				title:"Web Development",
				link:"/services/webdevelopment",
			},
			{
				id:2,
				title:"Web Development",
				link:"/services/webdevelopment",
			}
		]
	},
	{
		id: 3,
		title: 'About Us',
		link: '/about',
		dropdown:false
	},
];

export const nav_branding = "DEPTH SEARCH"
