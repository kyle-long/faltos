# Faltos
A suite of command line tools that help with large falcor files.

**This should not be used for any production code**

**This only works with node leaf types of "atom"**

Install
=======

For now...

    npm install -g https://github.com/kyle-long/faltos


Usage
=====

    faltos unfalcor file.json
    # or
    cat file.json | faltos unfalcor


You can also use it as a library.

    const unfalcor = require('faltos').unfalcor;

    
    fs.readFile(fileName, (err, content) => {
        const obj = JSON.parse(content);
        const processedObject = unfalcor(obj);
        
        // Log the result and make it pretty.
        console.log(JSON.stringify(processedObject, null, 4));
    });


Why?
====

JSON Graph is great. I just wanted an easier way to read it for debugging purposes.
