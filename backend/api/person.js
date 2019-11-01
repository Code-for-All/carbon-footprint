export default (app, db) => {
  app.get("/person/:id", (req, res) =>
    db.person.findByPk(req.params.id).then((result) => res.json(result))
  );
  app.get("/persons", (req, res) =>
    db.person.findAll().then((result) => res.json(result))
  );
}