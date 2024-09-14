const { GoogleGenerativeAI } = require('@google/generative-ai');
const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const dotenv = require('dotenv');
const fs = require('fs');
const config = require('./config');

dotenv.config(); 


const app = express();
const upload = multer({ dest: 'uploads/' });


const googleAI = new GoogleGenerativeAI(config.GOOGLE_API_KEY);

const geminiConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 1,
    maxOutputTokens: 4096,
};

const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-pro",
    geminiConfig,
});

app.use(express.static('public'));

app.post('/upload', upload.single('resume'), async(req, res) => {
    try {
        console.log(req);
        let dataBuffer = fs.readFileSync(req.file.path);
        const pdfData = await pdfParse(dataBuffer); 
        const text = pdfData.text;
        console.log(text);

        let response = "abc";
        try {
            response = await geminiModel.generateContent(`Convert the following text into an HTML resume:${text}`);
            response = response.response;
  
        } catch (err) {
            console.log(err);
        }

        const htmlResume = response.text();
        res.send(htmlResume); 


    } catch (error) {
        res.status(500).send('Error processing the PDF.');
    }
});


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});