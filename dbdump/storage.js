const config = require('./config')
const AWS = require('aws-sdk')

const credentials = new AWS.Credentials({
  accessKeyId: config.aws.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.aws.AWS_SECRET_ACCESS_KEY
})

AWS.config.update({
  credentials,
  region: config.aws.AWS_REGION
})
exports.s3 = new AWS.S3({ apiVersion: '2006-03-01' })
