const getStdin = require('get-stdin');
const unfalcor = require('./unfalcor');

const run = (args) => {
    runUnfalcor(args);
};

const runUnfalcor = (args) => {
    const fileName = args['<fileName>'];

    const process = (content) => {
        try {
            content = JSON.parse(content);
        } catch (err) {
            throw new Error('Failed to decode content. Error: ', err);
        }

        const result = unfalcor(content);
        console.log(JSON.stringify(result, null, 2));
    };

    if (fileName) {
        const fs = require('fs');
        fs.readFile(fileName, (err, content) => {
            if (err) {
                throw new Error(`Failed to read from file ${err.message}`);
            }
            process(content);
        });
    } else {
        getStdin().then((content) => {
            if (!content) {
                throw new Error('You must provide either a JSON file from stdin or a file that can be read as JSON');
            }
            process(content);
        });
    }
};

module.exports = {
    unfalcor,
    run
};
