const express = require("express");
const ytdl = require("ytdl-core")
const app =express()
const fs = require("fs")
app.use(express.json())
app.use(express.static("public"))



app.get("/", (req,res) => {
    res.sendFile(__dirname + "public/index.html")
})
app.get("/api", async function (req,res){
    const str = req.query.videoUrl;
    const info = await ytdl.getInfo(str)
    const download = ytdl(str, { filter: 'audioonly' });
    
    const writeStream = await fs.createWriteStream("./audio.mp3"); // path eg. './audio.mp4'
    // create a write stream to write the data from ytdl to disk

    // then pipe the download stream to the write stream, what this basically does
    // is redirect whatever data comes out of download stream into the write stream
    // thus writing it into disk
    download.pipe(writeStream);
    //let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
//
    res.status(200).json(info);//console.log('Formats with only audio: ' + audioFormats.length);
    //res.send("got here");
})

app.listen(5000,console.log("server is started on port 5000"))