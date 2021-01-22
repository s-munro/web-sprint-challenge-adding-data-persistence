// start your server here
const server = require("./api/server");

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
  console.log(`magic happening on port ${PORT}`);
});
