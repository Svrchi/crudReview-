const Test = require('../models/testModel');

async function createInput(req, res, next) {
    const {
        form
    } = req.body;

await Test.create({
 form
})
.then((data) => {
    const { _id, form: form} = data;
    res.locals.form = form;
    res.locals.formId = _id;
    return next();
  })
  .catch((error) => { next(error); });
}

module.exports = {
    createInput
}