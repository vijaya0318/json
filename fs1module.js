const fs = require('fs');
fs.writeFile('msg.txt', 'Hello Node.js!', 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully.');
});
try {
    fs.writeFileSync('msg.txt', 'Hello Node.js!', 'utf8');
    console.log('File written successfully.');
} catch (err) {
    console.error(err);
}