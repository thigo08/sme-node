import * as restify from 'restify';

import { environment } from '../common/environment'

export class Server {

    application: restify.Server;

    init(): Promise<any> {
        return new Promise((resolve, reject) => {

            try {

                this.application = restify.createServer({
                    name: 'meat-api',
                    version: '1.0.0'
                })

                this.application.get('/hello', (req, resp, next) => {
                    resp.json({ message: 'hello' })
                    return next()
                })

                this.application.listen(environment.server.port, () => {
                    resolve(this.application)
                })

            } catch (error) {
                reject(error)
            }

        })
    }

    bootstrap(): Promise<Server> {
        return this.init().then(() => this);
    }

}