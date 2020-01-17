const sinesp = require('sinesp-api');
module.exports ={
    async search(req,res){
    const host="187.16.4.126" 
    const port="8080"
    const proxy={host,port}
    const config = sinesp.configure({
            proxy,
            timeout: 0,
            host: 'cidadao.sinesp.gov.br',
            endpoint: '/sinesp-cidadao/mobile/consultar-placa/',
            serviceVersion: 'v5',
            androidVersion: '6.0',
            secret: '0KnlVSWHxOih3zKXBWlo',
            maximumRetry: 3,
          })
    try {
    const { placa } = await req.query;
    var resultado = await sinesp.search(placa)
    } catch (error) {
        resultado="unexistent"
        return res.send(error.message)
        
    } return res.json(resultado)
       
            
        }
    
            
        
        
        
        
        
        
        
    }
    

    



    
