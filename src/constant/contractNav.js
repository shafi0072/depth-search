import CodeOffIcon from '@mui/icons-material/CodeOff';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DraftsIcon from '@mui/icons-material/Drafts';
import React from 'react';
export const contract_Navbar_logo = {
	icon: <CodeOffIcon sx={{ fontSize: 50 }} />,
	name: 'Depth Search IT, LTD',
};

export const contract_navbar_contractInfo = [
	{
		label: 'Call Us Now',
		contact_number: '+8801763740664',
		icon: <CallIcon sx={{ fontSize: 50 }} />,
	},
	{
		label: 'Whatsapp',
		contact_whatsapp: '+8801763740664',
		icon: (
			<>
				<WhatsAppIcon sx={{ fontSize: 50 }} />
			</>
		),
	},
	{
		label: 'Email Us Now',
		contact_mail: 'deapth.search.it@gmail.com',
		icon: (
			<>
				<DraftsIcon sx={{ fontSize: 50 }} />
			</>
		),
	},
];
