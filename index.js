const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json([
        { id: 999, name: 'John Doe' },
        { id: 999, name: 'Jane Smith' },
        { id: 999, name: 'Alice Johnson' },
        { id: 999, name: 'John Doe' },
        { id: 999, name: 'Jane Smith' },
        { id: 999, name: 'Alice Johnson' },
        { id: 999, name: 'demo' },
        { id: 999, name: 'John Doe' },
        { id: 999, name: 'Jane Smith' },
        { id: 999, name: 'Alice Johnson' },
        { id: 999, name: 'John Doe' },
        { id: 999, name: 'Jane Smith' },
        { id: 999, name: 'Alice Johnson' },
        { id: 999, name: 'demo' },
        { id: 999, name: 'Alice Johnson' },
        { id: 999, name: 'demo' },
        { id: 999, name: 'John Doe' },
        { id: 999, name: 'Jane Smith' },
        { id: 999, name: 'Alice Johnson' },
        { id: 999, name: 'John Doe' },
        { id: 999, name: 'Jane Smith' },
        { id: 999, name: 'Alice Johnson' },
        { id: 999, name: 'demo' }
    ])
});


app.listen(5000, () => {
    console.log('Server listening on port 5000');
});