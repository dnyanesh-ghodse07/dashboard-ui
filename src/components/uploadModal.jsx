import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export const UploadModal = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Upload your sales data
        </Typography>
        <Divider />
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          style={{
            margin: "20px 0",
          }}
        >
          Upload file
          <input style={{ width: 0 }} type="file" />
        </Button>
      </Box>
    </Modal>
  );
};
