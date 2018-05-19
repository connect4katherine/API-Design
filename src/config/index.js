import merge from 'lodash.merge'

// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = process.env.NODE_ENV;
const baseConfig = require('./base').config;

let envConfig = {};


switch(env){
	case 'development':
	case 'dev':
		envConfig = require('./dev').config;
		break;

	case 'testing':
	case 'test':
		envConfig = require('./test').config;
		break;


	case 'production':
	case 'prod':
		envConfig = require('./prod').config;
		break;

	default: 
		envConfig = baseConfig;
		break;
}

export default merge(baseConfig, envConfig);