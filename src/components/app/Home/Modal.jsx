import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Backdrop } from "@mui/material";
import { header_content } from "../../../constant/headerContent";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "500px",
  bgcolor: "black",
  border: "none",
  p: 4,
};

const Modal1 = ({ open, handleOpen, handleClose }) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Box sx={style}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${header_content?.videoLink}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
};

export default Modal1;
