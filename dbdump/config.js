const MONGODUMP_PATH = process.env.MONGODUMP_PATH
  ? process.env.MONGODUMP_PATH
  : '/usr/bin/mongodump'
const MONGODB_USER = process.env.MONGODB_USER
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY
const AWS_REGION = process.env.AWS_REGION
const AWS_BUCKET = process.env.AWS_BUCKET

module.exports = {
  mongo: {
    MONGODUMP_PATH,
    MONGODB_USER,
    MONGODB_PASSWORD
  },
  aws: {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_REGION,
    AWS_BUCKET
  }
}
