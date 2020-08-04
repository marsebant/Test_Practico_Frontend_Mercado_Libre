function addAuthor(req, res){
    res.fetchedData.author = {
        name: 'Marcelo S.',
        lastname: 'Antuña'
    }
    res.status(200).json(res.fetchedData);
}

module.exports = {
    addAuthor
};