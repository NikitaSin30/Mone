export default () => ({
  jwt: {
    secret: process.env.JWT_SECRET
  },
  db: {
    connection: process.env.DB_CONNECTION
  }
})
