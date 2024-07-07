import express from 'express';
import code from 'qrcode';
const app=express;
const port =5000;
app.get('/qrcode',(req,res) =>
{
    const url='https://github.com/login';
    code.toDataURL(url,(err,qrcodeurl)=>{
        if(err)
        {
            res.status(500).send('internal server error');
        }
        else{
            res.send(`
            <!DOCTYPE HTML>
            <html>
                <head>
                    <title>QR Code Generator</title>
                </head>
                <body>
                    <h1>QR code Generator</h1>
                    <img src="${qrCodeUrl}" alt="QR Code">
                <p> Scan the QR Code to visit website</p>
                </body>

            </html>
            `)
        }
    });
});
app.listen(port,()=>
{
    console.log(`server is running on port ${port}`);
});