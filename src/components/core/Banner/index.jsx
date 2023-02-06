import React from 'react';
import { header_content } from '../../../constant/headerContent';
import { useRouter } from 'next/router';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Modal1 from '../Modal1';

const Index = () => {
	const { button, serviceHeading, serviceProvide, describe, videoLink, img } =
		header_content;

	const router = useRouter();

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<div className="container header_content">
			<div className="row header">
				<div className="col-md-6 pt-5">
					<div className="mt-5">
						<p className="introduce">{serviceProvide?.title}</p>
						<h1 className="head_line">{serviceHeading?.title}</h1>
						<p className="describe">{describe?.title}</p>
					</div>
					<div className="d-flex">
						<button className="GET_START_BUTTON me-3">{button?.title}</button>
						<div className="d-flex">
							<div className="videoButton" onClick={handleOpen}>
								<PlayArrowIcon sx={{ fontSize: '50px' }} />
							</div>
							<Modal1
								setOpen={setOpen}
								open={open}
								handleOpen={handleOpen}
								handleClose={handleClose}
							/>
						</div>
					</div>
				</div>
				<div className="col-md-6"></div>
			</div>
		</div>
	);
};

export default Index;
