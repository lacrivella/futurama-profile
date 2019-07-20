const app = require('./lib/app');

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  console.log(`started on ${PORT}`);
});
