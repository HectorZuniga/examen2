const aws = require('aws-sdk');
const dynamoDB = new aws.DynamoDB({region: 'us-east-1'});

exports.handler = async (event) => {
const type = event.type;
if(type === 'all'){
return 'All the data';
} else if (type === 'single'){
return 'Just my data';
} else {
return 'Hello from Lambda';
}
};
