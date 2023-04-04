const jwt = require('jsonwebtoken')
const {secret} = require('../token/config')

const midlewareAuth = (req, res , next) => {
    if(req.method === 'OPTIONS') {
        next()
    }

    try {
      const token = req.headers.authorization.split(' ')[1]
      if(!token) {
        return res.status(401).json({message:`Вам нужно авторизоваться`})
      }
      const decoded = jwt.verify(token, 'secret')
      req.user = decoded
      next()
    } catch (error) {
     return res.status(401).json({message:'Ошибка авторизи'})
    }
}

module.exports = midlewareAuth
