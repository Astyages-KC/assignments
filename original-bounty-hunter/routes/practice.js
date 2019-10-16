bookRouter.put("/:_id", (req, res, next) => {
    Book.findByIdAndUpdate(
        req.params._id, req.body, 
        {new: true}, (err, book) => {
        if(err) {
            res.status(500)
            return next(err);
        }
        return res.status(201).send(book)
    });
});