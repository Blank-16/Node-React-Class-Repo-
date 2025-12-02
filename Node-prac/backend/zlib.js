const zlib = require('zlib')
const fs = require('fs')
const path = require('path')


const FILE_PATH = path.join(__dirname, 'Zlib.md')
const ZIP_PATH = path.join(__dirname, 'Zlib.md.gz')
const UNZIP_PATH = path.join(__dirname, 'Zlib_restored.md')

const compression = () => {
    const gzip = zlib.createGzip() // the transform stream compressor 
    const readStream = fs.createReadStream(FILE_PATH)
    const writeStream = fs.createWriteStream(ZIP_PATH)
    console.log('--- Starting Compression ---')

    readStream
        .pipe(gzip)
        .pipe(writeStream)
        .on('finish', () => {
            console.log('Compression finished. File saved as Zlib.md.gz')

            // race condition issue will occur if trying to call decompression() at the end with compression() as node js is asynchronus....

            decompression()
        })
}


// for decompression 

const decompression = () => {
    const readStream = fs.createReadStream(ZIP_PATH)
    const writeStream = fs.createWriteStream(UNZIP_PATH)
    const gunzip = zlib.createGunzip()

    console.log('--- Starting Decompression ---')

    readStream
        .pipe(gunzip)
        .pipe(writeStream)
        .on('finish', () => {
            console.log(`Decompression finished. File restored to ${UNZIP_PATH}`)
        })
        .on('error', (err) => {
            console.error(`Decompresion Error ${err}`)
        })
}

compression()
