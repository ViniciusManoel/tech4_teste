const express = require('express');
const router = express.Router();

router.get('/cidades', (req, res) => {
    res.json({
        cidade: 'São Paulo',
        pais: 'Brasil',
        temperatura_atual: '19',
        umidade: '40',
        clima: 'temperado'
    });
});

module.exports = router;