# LinkedIn PDF to HTML Resume Converter

This project allows users to upload a PDF resume (from LinkedIn or other sources), which is then processed and converted into HTML format using Google’s Generative AI. The app is built with `Node.js`, `Express`, and integrates Google Generative AI with `@google/generative-ai` for content generation.

## Features

- Upload a LinkedIn PDF resume.
- Convert the PDF resume to an HTML version using Google's Gemini Generative AI.
- Frontend interface to upload and display the converted resume.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- A Google API key for Google Generative AI.

## Project Structure

├── public │ ├── index.html # Frontend HTML form to upload the PDF │ ├── style.css # Optional CSS styles for the form ├── uploads # Directory where uploaded PDF files are stored temporarily ├── app.js # Main Express server code ├── config.js # Config file storing API keys and settings ├──  README.md # This README file


## Installation

1. Clone the repository:

```bash
git clone https://github.com/Abhishek2634/Pdf-parser.git
```
2. Navigate to the project directory:
```bash
cd Pdf-parser
```
3. Install the required dependencies:
```bash
  npm install
```
4. Create a config.js file in the root of the project with the following content:
```bash
module.exports = {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY
};
```
5. Start the application by running the following command:

```bash
node app.js
```
6.Open your web browser and navigate to:

```bash
http://localhost:8000
```




