// Imports
const express = require("express");
const app = express();
const port = 5000;
const axios = require("axios");
const store = require("./cartReducers");
const { addToCart } = require("./helpers/addToCart");
const useSelector = require("react-redux");
// Static Files
app.use(express.static("public"));
app.use((req, res, next) => {
  req.store = store;
  next();
});
// app.use("/css", express.static(__dirname + "public/css"));
// app.use("/js", express.static(__dirname + "public/js"));
// app.use("/img", express.static(__dirname + "public/img"));

// // Function to fetch data from external API
// async function fetchData(url) {
//   try {
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// }

// Set Views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
  
    res.render("index");
  } catch (error) {
    res.render("index");
  }
});

// app.get("/store", async (req, res) => {
//   // console.log(store, "store");

//   // const state = store.getState();
//   // console.log("🚀 ~ app.get ~ state:", state);

//   // const cart =   store.select((state) => state.cart.cart)
//   // console.log("🚀 ~ app.get ~ cart:", cart)
//   try {
//     const product = await fetchData(
//       "https://backend.doxgamingconcept.com/api/products?populate[images][fields][0]=url&fields[0]=*&pagination[pageSize]=5&pagination[page]=1"
//     );
//     res.render("store", { product: product, addToCart: addToCart });
//   } catch (error) {
//     res.render("store");
//   }
// });

// app.get("/contact", (req, res) => {
//   res.render("contact", { text: "T" });
// });
// app.get("/blog", (req, res) => {
//   res.render("blog", { text: "t" });
// });
// app.get("/about", (req, res) => {
//   res.render("about", { text: "t" });
// });

// app.get("/community", (req, res) => {
//   res.render("community", { text: "t" });
// });

// app.get("/auth", (req, res) => {
//   res.render("auth", { text: "t" });
// });

//  Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));
