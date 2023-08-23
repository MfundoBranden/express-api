import express from 'express';
const app = express();

app.get("/api", function (req, res) {

    const sentence = req.query.sentence;
    res.json({ 
        "longestWord" : longestWord(sentence),
        "shortestWord" : 'the',
        "sum" : sentence.length
     });

});

let PORT = process.env.PORT || 3007;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});