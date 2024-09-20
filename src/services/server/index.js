const glob = require('glob');
const path = require('path');

module.exports = (app) => {
    glob.sync('./src/services/server/*.js').forEach(file => {
        console.log('archivos',file);
        
        if(!file.includes('index.js'))
            require(path.resolve(file))(app);
    });
}