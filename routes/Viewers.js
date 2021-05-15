const express = require('express')
const router = express.Router()

router.get('/fetch', (request, response) => {
    response.json({
        "name": "kaito",
        "gender": "20"
    })
})
module.exports = router