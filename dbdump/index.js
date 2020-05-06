const path = require('path')
const fs = require('fs')
const { execFileSync } = require('child_process')
const dayjs = require('dayjs')

const config = require('./config')
const storage = require('./storage')

const time = dayjs().format('YYYYMMDD-HHmmss')
const fileName = `dump.${time}.gz`
const OUT_PATH = path.join(__dirname, fileName)

/**
 * restore
 * mongorestore --drop --gzip --archive=test.gz -uroot -ppassword --authenticationDatabase=admin
 */

const main = async () => {
  let res = execFileSync(
    config.mongo.MONGODUMP_PATH,
    [
      `-u${config.mongo.MONGODB_USER}`,
      `-p${config.mongo.MONGODB_PASSWORD}`,
      `--authenticationDatabase=admin`,
      `--archive=${OUT_PATH}`,
      `--gzip`
    ],
    {
      encoding: 'utf8',
      timeout: 60 * 1000
    }
  )
  console.log('dump end', res)

  res = await storage.s3
    .putObject({
      Key: fileName,
      Body: fs.createReadStream(OUT_PATH),
      Bucket: config.aws.AWS_BUCKET
    })
    .promise()

  console.log('upload end', res)
}

main().catch(console.error)
