module.exports = function (req, res, next) {
    if (!res.locals.is_admin) {
        res.status(403).json({ status: "error", error: "Action denied"})
    } else {
        next()
    }
}