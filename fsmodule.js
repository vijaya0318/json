const fs = require('fs');
fs.readFile('msg.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File content:');
    console.log(data);
});
try {
    const data = fs.readFileSync('msg.txt', 'utf8');
    console.log('File content:');
    console.log(data);
} catch (err) {
    console.error(err);
}