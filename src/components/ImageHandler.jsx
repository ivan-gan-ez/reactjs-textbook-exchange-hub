import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload(props) {
  const { setImage } = props;

  return (
    <Button //btn
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput //fileEl
        type="file"
        onChange={(event) => {
          const fr = new FileReader();
          fr.readAsDataURL(event.target.files[0]);
          fr.addEventListener("load", () => {
            const url = fr.result;

            const imgpreview = document.getElementById("image_preview");

            const img = new Image();
            img.src = url;
            console.log(url);
            setImage(url);
          });
        }}
        multiple
      />
    </Button>
  );
}
