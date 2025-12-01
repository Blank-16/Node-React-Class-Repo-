
const fs = require('fs').promises
const { log, table, error } = require('console')
const path = require('path')
const FILE_PATH = path.join(__dirname, 'file.txt')

async function performFileOperation() {
    try {
        console.log('--- Starting FILE Ops ---')

        // create
        await fs.writeFile(FILE_PATH, 'Hello! This is line 1.\n')

        await fs.appendFile(FILE_PATH, 'Modified Line 2.')

        const data = await fs.readFile(FILE_PATH, 'utf-8')
        log(`Reading file content: ----------- \n${data}\n----------`)

        // await fs.rename(FILE_PATH, RENAMED_PATH )

        const stats = await fs.stat(FILE_PATH)
        table(stats)

    } catch (err) {
        error(`Eror occurred: ${err.message}`)
    } finally {
        log('Ops finished')
    }
}

performFileOperation()