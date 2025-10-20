import { RetornarErro } from '../Utils/utils.js';
const jwt = import("jsonwebtoken")

export function AuthMiddleware(req,res,next){
    const token = req.headers.authorization
    if(!token) return RetornarErro(res, "Token invalido", 401)
    try {
        const decoded = jwt.verify(token, process.env.tokenjwt)
        req.user = decoded
        next()
    } catch (error) {
        return RetornarErro(res, "Token invalido", 401)
    }
}