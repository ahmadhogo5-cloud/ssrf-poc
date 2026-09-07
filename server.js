// كود غير آمن (Vulnerable Code)
app.get('/fetch-file', async (req, res) => {
    const fileId = req.query.id;
    // الخادم هنا يثق بالمدخلات تماماً ويقوم بطلب خارجي
    const targetUrl = `https://drive.google.com/{1lxUeSqus_QpqXX73pZLs8HtwPdL0gQJS}`;
    
    try {
        const response = await fetch(targetUrl);
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.status(500).send("خطأ في جلب الملف");
    }
});

});
