const router = require('express').Router();

router.get('/', async (req,res) => {
    res.send('Testing');
});


module.exports = router;