const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const canaryUrl = 'https://internalfb.com';
    
    try {
        // محاولة 1: إرسال طلب GET في الخلفية
        axios.get(canaryUrl, { timeout: 3000 }).catch(() => {});
        
        // محاولة 2: إرسال طلب POST في الخلفية (وهو المطلوب غالباً في ثغرات Meta)
        axios.post(canaryUrl, {}, { timeout: 3000 }).catch(() => {});
        
        // إرجاع استجابة ناجحة لفيسبوك
        res.status(200).send('<html><head><title>Meta Bug Bounty PoC</title></head><body><h1>Success</h1></body></html>');
    } catch (error) {
        res.status(200).send('Success');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
