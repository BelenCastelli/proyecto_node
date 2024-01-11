const fs = require('fs')

function writeAndRead(path,obj){
    fs.writeFile(path, JSON.stringify(obj), (error) => {
        if(error){
            console.log('error' + error);
        } else  {
            console.log('archivo escrito correctamente'); 
            
            fs.readFile(path, 'utf8', (error, data) =>{
                if(!error){
                    console.log(data);
                } else {
                    console.log('error' + error);
                }
            })
        }
    }
)
}

// writeAndRead('fichero.json', {calle:'teruel', numero:8})

module.exports = {writeAndRead}