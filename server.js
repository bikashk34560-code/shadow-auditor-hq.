const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('.'));

// AI Engine Route
app.post('/execute', async (req, res) => {
    const { command } = req.body;
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

    try {
        const response = await fetch('https://models.inference.ai.azure.com/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GITHUB_TOKEN}`
            },
            body: JSON.stringify({
                messages: [{ role: 'user', content: command }],
                model: 'gpt-4o',
                max_tokens: 1000
            })
        });

        const data = await response.json();
        res.json({ result: data.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ result: "ERROR: Brain connection failed." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
