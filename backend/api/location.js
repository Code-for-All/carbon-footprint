export default (app, authCheck, db) => {
  app.get("/locations", (req, res) =>
    db.location.findAll().then((result) => res.json(result))
  );

  app.get("/location/:id", (req, res) =>
    db.location.findByPk(req.params.id).then((result) => res.json(result))
  );

  app.post("/location", (req, res) =>
    db.location.create({
      title: req.body.title,
      content: req.body.content
    }).then((result) => res.json(result))
  );

  app.put("/location/:id", (req, res) =>
    db.location.update({
      title: req.body.title,
      content: req.body.content
    },
      {
        where: {
          id: req.params.id
        }
      }).then((result) => res.json(result))
  );

  app.delete("/location/:id", (req, res) =>
    db.location.destroy({
      where: {
        id: req.params.id
      }
    }).then((result) => res.json(result))
  );
}