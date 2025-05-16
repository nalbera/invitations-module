import server from "./src/server.js";
import dbConnect from "./src/config/dbConnect.js";

const PORT = process.env.PORT || 3001;


dbConnect().then(() => {
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);    
    });
}).catch((error) => {
    console.log('Error connecting to the database..', error);  
})