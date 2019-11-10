export default (app, authCheck, db) => {
  /**
   * All the options needed to Produce a result that is not bloated
   */
  const travelOptions = {
    attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'departureLocation', 'arrivalLocation'] },
    include: [
      {
        model: db.journey,
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
      },
      {
        model: db.location,
        as: 'Departure',
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
      },
      {
        model: db.location,
        as: 'Arrival',
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
      } 
    ]
  }
  /**
   * @swagger
   *
   * /travels:
   *   get:
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   */
  app.get("/travels", (req, res) =>
    db.travel.findAll(travelOptions).then((result) => res.json(result))
  );

  /**
   * @swagger
   *
   * /travel/{id}:
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
  app.get("/travel/:id", (req, res) =>
    db.travel.findByPk(req.params.id, travelOptions).then((result) => res.json(result))
  );

  /**
   * @swagger
   *
   * /travel/{id}:
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
  app.post("/travel", (req, res) =>
    db.travel.create({
      title: req.body.title,
      content: req.body.content
    }).then((result) => res.json(result))
  );

  /**
   * @swagger
   *
   * /travel/{id}:
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

  /**
   * @swagger
   *
   * /travel/{id}:
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
  app.delete("/travel/:id", (req, res) =>
    db.travel.destroy({
      where: {
        id: req.params.id
      }
    }).then((result) => res.json(result))
  );
}