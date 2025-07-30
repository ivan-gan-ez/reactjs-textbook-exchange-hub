import * as React from "react";
import {
  Button,
  Container,
  Typography,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import { toast } from "sonner";

import ImgMediaCard from "../components/Card";

function HomePage() {
  const booksInLocalStorage = localStorage.getItem("books");
  const [books, setBooks] = useState(
    booksInLocalStorage ? JSON.parse(booksInLocalStorage) : []
  );

  const [condition, setCondition] = useState("All");
  const [grade, setGrade] = useState("All");
  const [course, setCourse] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("None");

  const handleDelete = (book) => {
    // 9. use filter and remove the item from it
    const updatedBooks = books.filter((item) => item.id !== book.id);
    // 10. update the items state with updatedList
    setBooks(updatedBooks);
    // 11. update the local storage with the updatedList
    localStorage.setItem("books", JSON.stringify(updatedBooks));
    // 12. show success notification
    toast("Book successfully deleted.");
  };

  return (
    <Container sx={{ mt: 3.5 }}>
      <Grid container spacing={6}>
        <Grid size={3}>
          <Paper sx={{ p: 3, position: "sticky" }} elevation={3}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Filters
            </Typography>
            {/* condition filter */}

            <FormControl sx={{ display: "block", mb: 3 }}>
              <InputLabel id="demo-simple-select-label">Condition</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Condition"
                value={condition}
                onChange={(event) => setCondition(event.target.value)}
                color="secondary"
                sx={{ minWidth: "150px" }}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"New"}>New</MenuItem>
                <MenuItem value={"Used"}>Used</MenuItem>
              </Select>
            </FormControl>

            {/* grade filter */}

            <FormControl sx={{ display: "block", mb: 3 }}>
              <InputLabel id="demo-simple-select-label">Grade</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Grade"
                value={grade}
                onChange={(event) => setGrade(event.target.value)}
                color="secondary"
                sx={{ minWidth: "150px" }}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Secondary 1"}>Secondary 1</MenuItem>
                <MenuItem value={"Secondary 2"}>Secondary 2</MenuItem>
                <MenuItem value={"Secondary 3"}>Secondary 3</MenuItem>
                <MenuItem value={"Secondary 4"}>Secondary 4</MenuItem>
                <MenuItem value={"Secondary 5"}>Secondary 5</MenuItem>
              </Select>
            </FormControl>

            {/*subject selection*/}

            <FormControl sx={{ display: "block" }}>
              <InputLabel id="demo-simple-select-label">Course</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Course"
                value={course}
                onChange={(event) => setCourse(event.target.value)}
                color="secondary"
                sx={{ minWidth: "150px" }}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"Bahasa Melayu"}>Bahasa Melayu</MenuItem>
                <MenuItem value={"Mathematics"}>Mathematics</MenuItem>
                <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
                <MenuItem value={"Physics"}>Physics</MenuItem>
                <MenuItem value={"Biology"}>Biology</MenuItem>
                <MenuItem value={"History"}>History</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="h5" sx={{ my: 3 }}>
              Sort By
            </Typography>

            {/* sort */}

            <FormControl sx={{ display: "block", mb: 3 }}>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sort"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                color="secondary"
                sx={{ minWidth: "150px" }}
              >
                <MenuItem value={"None"}>None</MenuItem>
                <MenuItem value={"Price"}>Price</MenuItem>
                <MenuItem value={"Title"}>Title</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid size={9}>
          <Paper sx={{ mb: "20px", p: 0.5 }}>
            <Grid
              container
              spacing={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: 2,
              }}
            >
              <Grid size={12}>
                <TextField
                  id="outlined-search"
                  label="Search field"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Paper>
          <Paper sx={{ p: 5 }} elevation={3}>
            <Grid container spacing={6}>
              {books
                .filter((book) => {
                  if (condition === "All") {
                    return true;
                  } else if (book.condition === condition) {
                    return true;
                  } else {
                    return false;
                  }
                })
                .filter((book) => {
                  if (grade === "All") {
                    return true;
                  } else if (book.grade === grade) {
                    return true;
                  } else {
                    return false;
                  }
                })
                .filter((book) => {
                  if (course === "All") {
                    return true;
                  } else if (book.course === course) {
                    return true;
                  } else {
                    return false;
                  }
                })
                .filter((book) => {
                  if (search === "") {
                    return true;
                  } else if (
                    book.title.toUpperCase().includes(search.toUpperCase()) ||
                    book.isbn.startsWith(search)
                  ) {
                    return true;
                  } else {
                    return false;
                  }
                })
                .sort((a, b) => {
                  if (sort === "Title") {
                    return a.title.localeCompare(b.title);
                  } else if (sort === "Price") {
                    return a.price - b.price;
                  }
                })
                .map((book) => (
                  <Grid key={book.id} size={4}>
                    <ImgMediaCard book={book} onDelete={handleDelete} />
                  </Grid>
                ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
