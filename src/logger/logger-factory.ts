const envs = () => require('dotenv').config().parsed;
import { createLogger, format } from "winston";
import redisTransport from 'winston-redis';
import * as winston from 'winston';
import { name, version } from '../../package.json'

const { combine, timestamp, printf } = format;

const levels = {
    error: 0,
    warn: 1,
    info: 2,
};

const customFormat = printf(({ timestamp, level, message }) => {
    return `${timestamp} | ${level}: ${message}`;
});

const logger = createLogger({
    levels: levels,
    transports: [
        new redisTransport({
            hots: envs().REDIS_HOST,
            port: envs().REDIS_PORT,
            container: envs().REDIS_CONTAINER,
            meta: {
                name,
                apiVersion: version,
            },
        })
    ]
});

if (envs().WINSTON_CONSOLE_LOG === 'true') {
    logger.add(new winston.transports.Console({
        format: combine(
            format.colorize(),
            format.splat(),
            format.simple(),
            timestamp(),
            customFormat
        ),
    }))
}

export interface ILogger {
    info: any,
    error: any,
    warn: any
}

logger.info('Teste');
