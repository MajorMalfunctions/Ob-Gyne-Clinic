const authRoutes = require("./auth.routes");
const bookingRoutes = require ("./booking.routes");
const patientsRoutes = require ("./patients.routes");
const uploadRoutes = require ("./upload.routes");
const userRoutes = require ("./user.routes");
const blogRoutes = require ("./blog.routes");
const categoriesRoutes = require ("./categories.routes");
const postsRoutes = require ("./posts.routes");



module.exports = {
    authRoutes,
    bookingRoutes,
    patientsRoutes,
    uploadRoutes,
    userRoutes,
    blogRoutes,
    categoriesRoutes,
    postsRoutes
}