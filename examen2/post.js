const aws = require('aws-sdk');
const dynamoDB = new aws.DynamoDB({region: 'us-east-1'});

exports.handler = async (event) => {
    
    
    
    let historial_clinico = event.historial_clinico;
    
    return historial_clinico;
};
