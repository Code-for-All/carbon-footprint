export default (app, db) => {
  app.get("/travels", (req, res) =>
    db.travel.findAll().then((result) => res.json(result))
  );

  app.get("/travel/:id", (req, res) =>
    db.travel.findByPk(req.params.id).then((result) => res.json(result))
  );

  app.post("/travel", (req, res) =>
    db.travel.create({
      title: req.body.title,
      content: req.body.content
    }).then((result) => res.json(result))
  );

  app.put("/travel/:id", (req, res) =>
    db.travel.update({
      title: req.body.title,
      content: req.body.content
    },
      {
        where: {
          id: req.params.id
        }
      }).then((result) => res.json(result))
  );

  app.delete("/travel/:id", (req, res) =>
    db.travel.destroy({
      where: {
        id: req.params.id
      }
    }).then((result) => res.json(result))
  );
}