const fs = require('fs');
const path = require('path');

const environment = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'environments', 'environment.development.json'), 'utf8'));

const indexPath = path.join(__dirname, 'src', 'index.html');

fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading index.html:', err);
    return;
  }

  const result = data.replace(/YOUR_API_KEY_HERE/g, environment.googleMapsApiKey);

  fs.writeFile(indexPath, result, 'utf8', (err) => {
    if (err) {
      console.error('Error writing index.html:', err);
    } else {
      console.log('API key injected successfully!');
    }
  });
});
