export default (app, db) => {
  /**
   * @swagger
   *
   * /locations:
   *   get:
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   */
  app.get("/locations", (req, res) =>
    db.location.findAll().then((result) => res.json(result))
  );

  /**
   * @swagger
   *
   * /location/{id}:
   *   get:
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   */
  app.get("/location/:id", (req, res) =>
    db.location.findByPk(req.params.id).then((result) => res.json(result))
  );

  /**
   * @swagger
   *
   * /location/{id}:
   *   post:
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   */
  app.post("/location", (req, res) =>
    db.location.create({
      title: req.body.title,
      content: req.body.content
    }).then((result) => res.json(result))
  );

  /**
   * @swagger
   *
   * /location/{id}:
   *   put:
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   */
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

  /**
   * @swagger
   *
   * /location/{id}:
   *   delete:
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   */
  app.delete("/location/:id", (req, res) =>
    db.location.destroy({
      where: {
        id: req.params.id
      }
    }).then((result) => res.json(result))
  );
}