import { RetornarErro } from '../Utils/utils.js';
import jwt from 'jsonwebtoken';

export const Role = {
    USER: 'user',
    ADMIN: 'admin',
    OWNER: 'owner'
};

export function AuthMiddleware(...allowedRoles) {
    return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return RetornarErro(res, "Token invalido", 401);
    
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice('Bearer '.length) : authHeader;
    
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            return RetornarErro(res, "Erro de configuração", 500);
        }
        const decoded = jwt.verify(token, secret);
        req.user = decoded;

        const hasPermission = decoded.role?.some((r) => allowedRoles.includes(r));
        if (!hasPermission) {
            return RetornarErro(res, "Acesso negado", 403);
        }

        next();
    } catch (error) {
        return RetornarErro(res, "Token invalido", 401);
    }
}}
