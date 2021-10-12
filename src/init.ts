import { start } from './infrastructure/gateways/webserver/express/express';
import { MongoDB } from './infrastructure/gateways/database/mongodb/mongodb';

start(3333);
MongoDB.connect();
