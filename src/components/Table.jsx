import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";

export default function BasicTable(props) {
  const { list, onDelete } = props;
  const rows = [...list];

  const handleDelete = (book) => {
    const confirmDelete = confirm("Are you sure you want to remove this book?");
    // if confirmRemove is true, remove the student
    if (confirmDelete) {
      // passing up the student id that we want to remove
      onDelete(book);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Course</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.course}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => handleDelete(row)}>
                  <DeleteIcon color="secondary"></DeleteIcon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
