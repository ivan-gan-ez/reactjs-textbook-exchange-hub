import { useParams } from "react-router";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { OutlinedInput } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { nanoid } from "nanoid";
import { toast } from "sonner";

function EditPage() {
  const { id } = useParams();
  const booksInLocalStorage = localStorage.getItem("books");
  const [books, setBooks] = useState(
    booksInLocalStorage ? JSON.parse(booksInLocalStorage) : []
  );

  const selectedBook = books.find((book) => book.id === id);

  const [title, setTitle] = useState(selectedBook.title);
  const [ISBN, setISBN] = useState(selectedBook.isbn);
  const [course, setCourse] = useState(selectedBook.course);
  const [grade, setGrade] = useState(selectedBook.grade);
  const [condition, setCondition] = useState(selectedBook.condition);
  const [price, setPrice] = useState(selectedBook.price);
  const [contact, setContact] = useState(selectedBook.contact);

  const navigate = useNavigate();

  const handleUpdate = () => {
    if (
      title === "" ||
      ISBN === "" ||
      course === "" ||
      grade === "" ||
      condition === "" ||
      price === "" ||
      contact === ""
    ) {
      toast("One or more fields is empty.");
    } else if (ISBN.match("[^0-9]")) {
      toast("Invalid ISBN.");
    } else if (price.match("[^0-9]") && !price.match("[.]")) {
      toast("Invalid price.");
    } else {
      const updatedBooks = [...books];
      setBooks(
        updatedBooks.map((book) => {
          if (book.id === selectedBook.id) {
            book.title = title;
            book.isbn = ISBN;
            book.course = course;
            book.grade = grade;
            book.condition = condition;
            book.price = price;
            book.contact = contact;
          }
          return book;
        })
      );

      localStorage.setItem("books", JSON.stringify(updatedBooks));
      toast(`Book information successfully updated.`);
      navigate("/");
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        py: "60px",
      }}
    >
      <Typography variant="h4" sx={{ mb: "20px" }}>
        Add Book
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: "20px",
          mt: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={4} sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">Title:</Typography>
          </Grid>
          <Grid size={8}>
            <TextField
              fullWidth
              id="Title"
              label="Title"
              variant="outlined"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              sx={{ mt: "10px" }}
              color="secondary"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={4} sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">ISBN (without dashes):</Typography>
          </Grid>
          <Grid size={8}>
            <TextField
              fullWidth
              id="ISBN"
              label="ISBN"
              variant="outlined"
              value={ISBN}
              onChange={(event) => setISBN(event.target.value)}
              sx={{ mt: "10px" }}
              color="secondary"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={4} sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">Condition:</Typography>
          </Grid>
          <Grid size={8}>
            <FormControl fullWidth sx={{ mt: "10px" }}>
              <InputLabel
                id="condition-label"
                sx={{ bgcolor: "#ffffff", px: 0.5 }}
                color="secondary"
              >
                Condition
              </InputLabel>
              <Select
                labelId="condition-label"
                id="condition"
                value={condition}
                onChange={(event) => setCondition(event.target.value)}
                color="secondary"
              >
                <MenuItem value={"New"}>New</MenuItem>
                <MenuItem value={"Used"}>Used</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={4} sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">Grade:</Typography>
          </Grid>
          <Grid size={8}>
            <FormControl fullWidth sx={{ mt: "10px" }}>
              <InputLabel
                id="grade-label"
                sx={{ bgcolor: "#ffffff", px: 0.5 }}
                color="secondary"
              >
                Grade
              </InputLabel>
              <Select
                labelId="grade-label"
                id="grade"
                value={grade}
                onChange={(event) => setGrade(event.target.value)}
                color="secondary"
              >
                <MenuItem value={"Secondary 1"}>Secondary 1</MenuItem>
                <MenuItem value={"Secondary 2"}>Secondary 2</MenuItem>
                <MenuItem value={"Secondary 3"}>Secondary 3</MenuItem>
                <MenuItem value={"Secondary 4"}>Secondary 4</MenuItem>
                <MenuItem value={"Secondary 5"}>Secondary 5</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={4} sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">Course:</Typography>
          </Grid>
          <Grid size={8}>
            <FormControl fullWidth sx={{ mt: "10px" }}>
              <InputLabel
                id="course-label"
                sx={{ bgcolor: "#ffffff", px: 0.5 }}
                color="secondary"
              >
                Course
              </InputLabel>
              <Select
                labelId="course-label"
                id="course"
                value={course}
                onChange={(event) => setCourse(event.target.value)}
                color="secondary"
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
            <Typography variant="h6">Price:</Typography>
          </Grid>
          <Grid size={8}>
            <FormControl fullWidth sx={{ mt: "10px" }}>
              <InputLabel
                htmlFor="Price"
                sx={{ bgcolor: "#ffffff", pr: 1 }}
                color="secondary"
              >
                Amount
              </InputLabel>
              <OutlinedInput
                startAdornment={
                  <InputAdornment position="start">RM</InputAdornment>
                }
                label="Price"
                fullWidth
                id="Price"
                variant="outlined"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                color="secondary"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={4} sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">Contact:</Typography>
          </Grid>
          <Grid size={8}>
            <TextField
              fullWidth
              id="Contact"
              label="Contact"
              placeholder="Email or phone number..."
              variant="outlined"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              sx={{ mt: "10px" }}
              color="secondary"
            />
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
          <Button color="primary" variant="contained" onClick={handleUpdate}>
            Add
          </Button>
          <Button
            component={RouterLink}
            to="/"
            variant="outlined"
            color="secondary"
          >
            Cancel
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default EditPage;
