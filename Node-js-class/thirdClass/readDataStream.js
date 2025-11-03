
// read stream example

const fs = require('fs');

const readStream = fs.createReadStream('input.txt', 'utf-8');

readStream.on('data', (chunk) => {
    console.log(`New Chunk : ${chunk}`)
});


// read data stream

readStream.on('end', () => {
    console.log("Finished Reading File.")
})

// write stream

const writeStream = fs.createWriteStream('output.txt')

writeStream.write('Hello')
writeStream.write("Stream")
writeStream.write("World!")

// read stream connection to write stream

readStream.pipe(writeStream)
console.log(`File copied successfully using pipe!`);


// gzip example

const zlib = require('zlib')

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'))

console.log("file compressed successfully")
