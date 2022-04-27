import express from "express";
import cors from "cors";
import compression from "compression";

import startUpServer from "./server.js";
import cors_cfg from "./src/config/cors_cfg.js";
import route_products from "./src/routes/products.js";
import route_profile from "./src/routes/profile.js";
import route_error from "./src/routes/error.js";
import route_auth from "./src/routes/auth.js";
import route_category from "./src/routes/categorys.js";

const app = express();

startUpServer(app);

app.use(compression({threshold:0}));
app.use(cors(cors_cfg));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/products",route_products);
app.use("/profile",route_profile);
app.use("/auth",route_auth);
app.use("/category",route_category);
app.use("*",route_error);

export default app;
