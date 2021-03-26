import Express from 'express';

const main = async () => {
  const app = Express();
  const port = 3000;

  app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
  });
};

main();
