import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
};

export default function ModalShare() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (): void => setOpen(true);
    const handleClose = (): void => setOpen(false);

    // URL dan teks yang ingin dibagikan
    const currentUrl = window.location.href;
    const text = "Coba lihat ini!";
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedText = encodeURIComponent(text);

    const shareLinks = {
        whatsapp: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        instagram: `https://www.instagram.com/`,
    };

    return (
        <div>
            <div onClick={handleOpen}>
                <CiShare2 size={22} style={{color: 'black'}}/>
            </div>

            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "2rem",
                            marginBottom: "1.5rem",
                        }}
                    >
                        <a
                            href={shareLinks.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "2rem" }}
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            href={shareLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "2rem" }}
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href={shareLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: "2rem" }}
                        >
                            <FaInstagram />
                        </a>
                    </div>

                    <Button
                        variant="outlined"
                        onClick={handleClose}
                        style={{color : 'black', border: '2px solid black'}}
                    >
                        Tutup
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
