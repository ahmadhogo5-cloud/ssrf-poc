const express = require('express');
const axios = require('axios'); // مكتبة لجلب البيانات بالخلفية
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/image.gif', async (req, res) => {
    try {
        // 1. نجبر السيرفر على زيارة رابط الكناري في الخلفية لتسجيل الـ Hit فوراً
        await axios.get('https://internalfb.com', { timeout: 3000 }).catch(() => {});
        
        // 2. نقوم بتحويل السيرفر لصورة الجيف الحقيقية من جوجل درايف لنجاح العملية أمامه
        res.redirect(302, https://drive.google.com/file/d/1lxUeSqus_QpqXX73pZLs8HtwPdL0gQJS/view?usp=drivesdk');
    } catch (error) {
        res.redirect(302, 'https://drive.google.com/file/d/1lxUeSqus_QpqXX73pZLs8HtwPdL0gQJS/view?usp=drivesdk');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
