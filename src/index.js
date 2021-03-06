import http from 'http'
// import { execute, subscribe } from 'graphql'
import { createServer } from 'http'
import appConfig from './config'
import app from './server'
// import schema from './schema'

console.log(appConfig);

const server = http.createServer(app)
let currentApp = app

server.listen(appConfig.port, () => {
	console.log('Server listening');
})

if (module.hot) {
	module.hot.accept(['./server'], () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	})
}
