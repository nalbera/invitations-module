import express from "express";
import cors from "cors";
import morgan from "morgan";
import handleError from "./error/handleError.js";
import notFoundError from "./error/notFoundError.js";

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());


server.get('/', (req, res) => {
    res.send("I'm here");
});


server.use(handleError);
server.use(notFoundError);

export default server;