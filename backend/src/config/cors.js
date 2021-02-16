module.exports = (req, res, next)=>{
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Method', 'GET, POST, PUT , OPTIONS, PATCH, DELETE');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept ');
    next();
}