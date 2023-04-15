const {CustomAPIError} = require('../errors/customError')

const errorHandlerMiddleware = (err, req, res, next) => {
    // console.log(err);
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message, statusCode: err.statusCode})
    } else {
        return res.status(500).json({msg: 'Something went wrong, Please Try Again'})
    }
}

module.exports = errorHandlerMiddleware;