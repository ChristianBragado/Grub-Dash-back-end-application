const router = require("express").Router();
const controller = require("./dishes.controller");
const methodhNotAllowed = require("../errors/methodNotAllowed");

router
    .route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodhNotAllowed);

    router
    .route("/:dishId")
    .get(controller.read)
    .put(controller.update)
    .all(methodhNotAllowed);

// TODO: Implement the /dishes routes needed to make the tests pass

module.exports = router;
