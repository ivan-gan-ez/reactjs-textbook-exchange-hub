import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import { IconButton } from "@mui/material";
import { Chip } from "@mui/material";

import { Link as RouterLink, useNavigate } from "react-router";

import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ImgMediaCard(props) {
  const { book, onDelete } = props;
  const handleDelete = (book) => {
    const confirmDelete = confirm(
      "Are you sure you want to remove this   book?"
    );
    // if confirmRemove is true, remove the student
    if (confirmDelete) {
      // passing up the student id that we want to remove
      onDelete(book);
    }
  };
  return (
    <Card sx={{ maxWidth: 345, mb: 4 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image="src/assets/ipa placeholder.svg"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
          {book.isbn}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
          RM{book.price}
        </Typography>
        <Chip label={book.condition} sx={{ mr: 1, mb: 1 }} />
        <Chip label={book.grade} sx={{ mr: 1, mb: 1 }} />
        <Chip label={book.course} sx={{ mr: 1, mb: 1 }} />
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
          {book.contact}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          size="small"
          color="primary"
          component={RouterLink}
          to={`/edit/${book.id}`}
        >
          <CreateIcon></CreateIcon>
        </IconButton>
        <IconButton
          size="small"
          color="secondary"
          onClick={() => handleDelete(book)}
        >
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
}
