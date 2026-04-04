const multer = require("multer");

 const errorhandler = (err, req, res, next) => {
    console.error(err.message);
    console.error(err.stack || 'No stack trace available');
    const status = err.status || 500

    if(err instanceof multer.MulterError) {
        return res.status(400).json({
            error: err.message,
            hint: "check file type and size (<5mb) and format (jpg, jpeg, png)"
        });
    }
    res.status(status).json({ error: err.message });
};

module.exports = errorhandler;