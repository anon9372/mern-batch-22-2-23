const authorize = (req, res, next) => {

    const { user } = req.query
    if (user === 'achiversIT') {
        req.user = { name: 'AchiversIT', id: 1, location: 'Marathalli' }
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize