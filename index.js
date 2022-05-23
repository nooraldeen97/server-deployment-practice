'use strict';

const server=require("./server");
const dotenv=require("dotenv");

dotenv.config();

server.start(process.env.PORT || 3001);



