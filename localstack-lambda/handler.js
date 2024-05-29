"use strict";

module.exports.sqs = async (event) => {
  console.log("mal paichi kaka");
  console.log(JSON.stringify(event.Records[0].body));
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "SQS lambda",
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.bridge = async (event) => {
  console.log("yo bro mal paichi from connectqr");
  console.log('ting tong');
  console.log(JSON.stringify(event.detail));
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "EventBridge lambda",
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
