const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Function to prompt the user for input
const prompt = (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => rl.question(question, (answer) => {
    rl.close();
    resolve(answer);
  }));
};

// Function to create the project
const createProject = async () => {
  // Prompt the user for the folder name
  const folderName = await prompt('Enter the folder name: ');

  // Create the folder
  const folderPath = path.join(__dirname, folderName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  } else {
    console.log('Folder already exists.');
    return;
  }

  // HTML content
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${folderName}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello, World!</h1>
    <script src="script.js"></script>
</body>
</html>`;

  // CSS content
  const cssContent = `body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
}`;

  // JavaScript content
  const jsContent = `document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, World!');
});`;

  // Create and write to the HTML file
  fs.writeFileSync(path.join(folderPath, 'index.html'), htmlContent, 'utf8');

  // Create and write to the CSS file
  fs.writeFileSync(path.join(folderPath, 'style.css'), cssContent, 'utf8');

  // Create and write to the JS file
  fs.writeFileSync(path.join(folderPath, 'script.js'), jsContent, 'utf8');

  console.log('Project created successfully.');
};

// Call the function to create the project
createProject();
