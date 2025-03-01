import express from "express";
const router = express.Router();
import { Book } from "../models/bookModel.js";

//route for saving a new book
router.post("/", async (req, res) => {
  try {
    //if the title, author, or publishYear fields are not filled out then - it is a "bad req" (status 400)
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    //since we are passing data and using .create - no need to initizalize newbook
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//route for getting all books

router.get("/", async (req, res) => {
  try {
    const allBooks = await Book.find({}); // means all books

    return res.status(200).json({
      count: allBooks.length,
      data: allBooks,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//route for getting 1 books by id

router.get("//:id", async (req, res) => {
  try {
    const { id } = req.params;
    const specBook = await Book.findById(id); // means all books

    return res.status(200).json({ specBook });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//route for updating book
router.put("//:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const { id } = req.params;

    const updatedVersion = await Book.findByIdAndUpdate(id, req.body);

    if (!updatedVersion) {
      return res.status(404).json({ message: "book not found" });
    } else {
      return res.status(200).json({ message: "Book updated successfully" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for deleting book

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    } else {
      return res.status(200).send({ message: "Book deleted successfully" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(404).send({ message: error.message });
  }
});

//module.exports = router;
export default router;
