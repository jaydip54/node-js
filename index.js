const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' }
    ])
});


app.listen(5000, () => {
    console.log('Server listening on port 5000');
});