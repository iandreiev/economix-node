module.exports = (res,err) => {
    console.log(err)
    res.status(500).json({
        success: false,
        msg: err.message ? err.message : err
    })
}