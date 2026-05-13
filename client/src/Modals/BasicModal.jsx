import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { padding } from "@mui/system";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { RxCross2 } from "react-icons/rx";
import ExtendedModals from "./ExtendedModals";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 612,
  padding: 53,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleOpen = () => (setOpen(true),setShow(false));
  const handleClose = () => (setOpen(false));

  return (
    <div>
      <div className="flex gap-4 items-center">
        <p className="font-poppins font-semibold text-[14px] text-textprimary">
          Create a New Project
        </p>
        <button
          onClick={handleOpen}
          className="w-16 font-poppins font-normal text-2xl text-btnprimary rounded-2xl border-4 border-btnprimary"
        >
          +
        </button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <button
              onClick={handleClose}
              className="w-6 h-6 block ms-auto mb-8 text-textsecondary"
            >
              <RxCross2 />
            </button>
            <h6 className="text-xl text-textprimary font-poppins font-semibold text-center mb-12">
              Create a New Project
            </h6>
            {
              !show &&
            <div className="w-full my-9.25">
              <button
                onClick={() => setShow(!show)}
                className="w-23 h-23 block m-auto font-poppins font-normal text-2xl text-btnprimary rounded-2xl border-4 border-btnprimary"
              >
                +
              </button>
            </div>
            }
            {show && (
              <ExtendedModals/>
            )}
            {
              !show &&
            <>
            <p className="text-[16px] text-textprimary font-poppins font-normal text-center">
              Blank project
            </p>
            <p className="text-[16px] text-textsecondary font-poppins font-normal text-center">
              Start from scratch
            </p>
            </>
            }
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
