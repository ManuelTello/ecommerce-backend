import express from "express";
import cors from "cors";
import startUpServer from "./server.js";

import route_home from "./src/routes/home.js";
import route_products from "./src/routes/products.js";
import route_profile from "./src/routes/profile.js";
import route_error from "./src/routes/error.js";
import route_auth from "./src/routes/auth.js";

const app = express();
startUpServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",route_home);
app.use("/products",route_products);
app.use("/profile",route_profile);
app.use("/auth",route_auth);
app.use("*",route_error);

export default app;
