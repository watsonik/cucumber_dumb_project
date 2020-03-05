// const fsextra = require('fs-extra');
// const path = require('path');
//
// const logsLocation = path.resolve('./combined.log');
//
// fsextra.removeSync(logsLocation);
const fs_extra = require('fs-extra');

fs_extra.emptyDirSync('./reports');
fs_extra.removeSync('./combined.log');
