export default (app, db) => {
  /**
   * All the options needed to Produce a result that is not bloated
   */
  const journeyOptions = {
    attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'personId'] },
    order: [[db.travel, 'sequence', 'asc']],
    include: [
      {
        model: db.person,
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
      },
      {
        model: db.travel,
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'journeyId', 'departureLocation', 'arrivalLocation'] },
        include: [
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
    ]
  }
  /**
   * @swagger
   *
   * /journeys:
   *   get:
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   */
  app.get("/journeys", (req, res) =>
    db.journey.findAll(journeyOptions).then((result) => res.json(result))
  );

  /**
   * @swagger
   *
   * /journey/{id}:
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
  app.get("/journey/:id", (req, res) =>
    db.journey.findByPk(req.params.id, journeyOptions).then((result) => res.json(result))
  );

  /**
   * @swagger
   *
   * /journey/{id}:
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
  app.post("/journey", (req, res) =>
    db.journey.create({
      title: req.body.title,
      content: req.body.content
    }).then((result) => res.json(result))
  );

  /**
   * @swagger
   *
   * /journey/{id}:
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
  app.put("/journey/:id", (req, res) =>
    db.journey.update({
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
   * /journey/{id}:
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
  app.delete("/journey/:id", (req, res) =>
    db.journey.destroy({
      where: {
        id: req.params.id
      }
    }).then((result) => res.json(result))
  );
}