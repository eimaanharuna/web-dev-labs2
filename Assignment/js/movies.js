// 1. Initial Movie Data
const movies = [
    {
        regNo: "M-001",
        title: "Bullet Train",
        director: "David Leitch",
        genre: "Action",
        runtime: 156,
        year: 2022,
        rating: 7.3,
        img: "images/bullet_train.jpg"
    },
    {
        regNo: "M-002",
        title: "Blade Runner 2049",
        director: "Denis Villeneuve",
        genre: "Sci-Fi",
        runtime: 163,
        year: 2017,
        rating: 8.0,
        img: "images/bladerunner_2049.jpg"
    },
    {
        regNo: "M-003",
        title: "Dune",
        director: "Denis Villeneuve",
        genre: "Sci-Fi",
        runtime: 169,
        year: 2021,
        rating: 8.0,
        img: "images/dune.jpg"
    }
];

// 2. Handlebars Helpers
Handlebars.registerHelper("formatRating", (rating) => {
    const num = Number(rating);
    return !isNaN(num) ? num.toFixed(1) + "/10" : "N/A";
});

Handlebars.registerHelper("formatRuntime", (runtime) => {
    const num = Number(runtime);
    return !isNaN(num) ? num + " mins" : "N/A";
});

// 3. Data Initialization
// We use 'movieData' so the HTML script can find it
let movieData = JSON.parse(localStorage.getItem("movies_db")) || movies;