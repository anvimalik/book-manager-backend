import Book from '../models/Book.js';

export const addBook = async (req,res) => {
    try{
        const {title,author,genre} = req.body;
        const newBook = new Book({title,author,genre});
        await newBook.save();
        res.status(201).json({message:'Book added', book : newBook});
    }catch(err){
        res.status(500).json({error: 'Failed to add Book'});
    }
};

export const getBooks = async (req,res) => {
    try{
        const books = await Book.find();
        res.status(200).json(books);
    }catch(err){
        res.status(500).json({error: 'Failed to fetch books'})
    }
};