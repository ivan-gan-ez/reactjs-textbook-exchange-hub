import { useState } from "react";
import * as React from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Edit, Delete } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import { nanoid } from "nanoid";
import { toast } from "sonner";
import BasicTable from "../components/Table";

function WishlistPage() {
  const wishlistInLocalStorage = localStorage.getItem("wishlist");
  const [wishlist, setWishlist] = useState(
    wishlistInLocalStorage ? JSON.parse(wishlistInLocalStorage) : []
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [course, setCourse] = useState("");
  const [price, setPrice] = useState("");

  const handleAddNew = () => {
    if (course === "" || price === "") {
      toast("One or more fields is empty.");
    } else {
      // 7. add the new note data into the notes state
      const newWishList = [
        ...wishlist,
        {
          id: nanoid(),
          course: course,
          price: price,
        },
      ];
      // // 8. update the notes in local storage
      setWishlist(newWishList);
      localStorage.setItem("wishlist", JSON.stringify(newWishList));
      // 9. show success message
      toast("Book successfully added to wishlist.");
      setCourse("");
      setPrice("");
      setOpen(false);
    }
  };

  const handleDelete = (book) => {
    // 9. use filter and remove the item from it
    const updatedWishlist = wishlist.filter((item) => item.id !== book.id);
    // 10. update the items state with updatedList
    setWishlist(updatedWishlist);
    // 11. update the local storage with the updatedList
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    // 12. show success notification
    toast("Wishlist item successfully deleted.");
  };

  return (
    <Container sx={{ mb: 8 }}>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", mt: "40px", mb: "70px" }}
      >
        Wishlist
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          mb: "10px",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={handleOpen}
          sx={{ mb: 1 }}
        >
          Add A Book
        </Button>
      </Box>
      <BasicTable list={wishlist} onDelete={handleDelete} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper sx={{ p: 3, minWidth: "500px" }}>
          <Typography variant="h4" sx={{ textAlign: "center", mb: "40px" }}>
            Add A Book
          </Typography>
          <Grid container spacing={2}>
            <Grid size={4} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h5"
                sx={{ display: "flex", alignItems: "center" }}
              >
                Course:
              </Typography>
            </Grid>
            <Grid size={8}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                <InputLabel id="demo-select-small-label">Course</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="course"
                  value={course}
                  onChange={(event) => setCourse(event.target.value)}
                  sx={{
                    minWidth: "300px",
                  }}
                >
                  <MenuItem value={"English"}>English</MenuItem>
                  <MenuItem value={"Bahasa Melayu"}>Bahasa Melayu</MenuItem>
                  <MenuItem value={"Mathematics"}>Mathematics</MenuItem>
                  <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
                  <MenuItem value={"Physics"}>Physics</MenuItem>
                  <MenuItem value={"Biology"}>Biology</MenuItem>
                  <MenuItem value={"History"}>History</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={4} sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h5"
                sx={{ display: "flex", alignItems: "center" }}
              >
                Price Range:
              </Typography>
            </Grid>
            <Grid size={8}>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                <InputLabel id="demo-select-small-label">Price</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="price"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  sx={{
                    minWidth: "300px",
                  }}
                >
                  <MenuItem value={"<RM10"}>&lt;RM10</MenuItem>
                  <MenuItem value={"RM10 - RM20"}>RM10 - RM20</MenuItem>
                  <MenuItem value={"RM20 - RM30"}>RM20 - RM30</MenuItem>
                  <MenuItem value={"RM30 - RM40"}>RM30 - RM40</MenuItem>
                  <MenuItem value={">RM40"}>&gt;RM40</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              mt: "20px",
            }}
          >
            <Button
              color="secondary"
              variant="contained"
              onClick={handleAddNew}
            >
              Add To Wishlist
            </Button>
            <Button onClick={handleClose} variant="outlined" color="blue">
              Cancel
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Container>
  );
}

export default WishlistPage;
