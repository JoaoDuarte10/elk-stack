const envs = () => require('dotenv').config().parsed;
import { createLogger, format } from "winston";
import * as redisTransport from 'winston-redis';
import * as winston from 'winston';

export function loggerFactory(indexName: string) {
    const { combine, timestamp, printf } = format;

    const levels = {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6
    };

    const customFormat = printf(({ timestamp, level, message }) => {
        return `${timestamp} | ${level}: ${message}`;
    });

    console.log(envs().REDIS_NAME)

    const Logger = createLogger({
        levels: levels,
        transports: [
            new redisTransport({
                hots: envs().REDIS_HOST,
                port: envs().REDIS_PORT,
                container: envs().REDIS_CONTAINER,
                meta: {
                    name: indexName
                }
            })
        ]
    });

    if (envs().WINSTON_CONSOLE_LOG === 'true') {
        Logger.add(new winston.transports.Console({
            format: combine(
                format.colorize(),
                format.splat(),
                format.simple(),
                timestamp(),
                customFormat,
            ),
        }))
    }

    return Logger;
}

const logger = loggerFactory(envs().REDIS_NAME);

logger.info('Testee')
