module.exports = {
    PORT: process.env.PORT || 8080,
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||
    "http://localhost:8080/api",
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DB_URL || 'postgresql://kiaminichols@localhost/nonsequitur',
  };