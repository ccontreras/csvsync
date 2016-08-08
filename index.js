let fs = require('fs');
let path = require('path');
let util = require('util');
let debuglog = util.debuglog('debug');

fs.watch('./data', (eventType, filename) => {
    debuglog('EventType is: %s', eventType);

    if (filename && eventType === 'change') {
        if (validateFile(filename)) {
            // @todo, upload csv to DB.

            debuglog('The "%s" is a valid file.', filename);
        } else {
            // debuglog('The "%s" is not a valid file.', filename);
        }
    }
});

/**
 * Validates that the file is an Excel (.xls).
 *
 * @param   {string}   filename   The file name.
 * @return  {boolean}
 */
function validateFile(filename) {
    let ext = path.extname(filename);
    return ext === '.xls';
}

debuglog('Application running...');
