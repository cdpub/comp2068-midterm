// Our router module
const router = require('express').Router();

// Our controller
const MetahumansController = require('../controllers/metahumansController');

// Your routes
router.get(`/new`, MetahumansController.new);                            
router.get(`/`, MetahumansController.index);                 
router.get(`/:id`, MetahumansController.show);               
router.post(`/`, MetahumansController.create);               
router.get(`/:id/edit`, MetahumansController.edit);
router.post(`/update`, MetahumansController.update);
router.post(`/destroy`, MetahumansController.destroy);

// We have to export our changes
module.exports = router;