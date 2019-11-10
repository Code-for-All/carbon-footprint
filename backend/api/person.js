export default (app, authCheck, db) => {
  const personOptions = {
    attributes: { exclude: ['createdAt', 'updatedAt'] }
  }
  /**
   * @swagger
   *
   * /person/{id}:
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
  app.get("/person/:id", (req, res) =>
    db.person.findByPk(req.params.id, personOptions).then((result) => res.json(result))
  );

    /**
   * @swagger
   *
   * /persons:
   *   get:
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   */
  app.get("/persons", (req, res) =>
    db.person.findAll(personOptions).then((result) => res.json(result))
  );

  app.post("/person", (req, res) =>
    db.person.create({
      name: req.body.name
    }).then((result) => res.json(result))
  );
}