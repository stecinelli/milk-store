import app from './app';

const port = 8080;

app.listen(port, (): void => {
  console.log(` App listening on port ${port}`);
});