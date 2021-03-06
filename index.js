const express = require( 'express' );
const app = express();
app.use( express.static(`${__dirname}/public/app`) );
app.use( express.static(`${__dirname}/node_modules`) );
app.use( express.static(`${__dirname}/public`) );

if(!module.parent){
    const port = 8081;
    console.log(`app listening on ${port}`);
    app.listen(port);
}
else{
    module.exports = app;
}
