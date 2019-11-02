export default (app, db) => {
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
    db.person.findByPk(req.params.id).then((result) => res.json(result))
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
    db.person.findAll().then((result) => res.json(result))
  );
}