const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/image.gif', (req, res) => {
    // تم إصلاح علامة الاقتباس المفقودة بالأسفل في بداية الرابط ونهايته
    res.redirect(302, 'https://www.internalfb.com/intern/bug-bounty/get-canary-token/6c89420833684ad2be246b8e60b865a8/');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
