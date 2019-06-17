const metahuman = require('../models/metahuman');
const mongoose = require('mongoose');

exports.index = (req, res) => {
    metahuman.find()
    .then(metahumans => {
      res.render('metahumans/index', {
        metahumans: metahumans,
        title: 'Find Metahumans'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });

};


exports.show = (req, res) => {
    metahuman.findById(req.params.id)
    .then(metahuman => {
      res.render('metahumans/show', {
        title: `Show ${metahuman}`,        
        metahuman: metahuman
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/metahumans');
    });
};


exports.new = (req, res) => {
  res.render('metahumans/new', {
    title: 'Add New Metahuman'
  });
};


exports.edit = (req, res) => {
  metahuman.findById(req.params.id)
    .then(metahuman => {
      res.render('metahumans/edit', {
        title: `Edit ${metahuman.alias}`,
        metahuman: metahuman
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/metahumans');
    });
};


exports.create = async (req, res) => {
  Metahuman.create(req.body.metahuman)
    .then(() => {
      req.flash('success', 'New Metahuman posted successfully.');
      res.redirect('/metahumans');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.render('metahumans/new', {
        Metahuman: req.body.metahuman,
        title: 'Post A New Metahuman'
      });
    });
};


exports.update = (req, res) => {
  metahuman.updateOne({
    _id: req.body.id,
  }, req.body.metahuman, {
    runValidators: true
  })
  .then(() => {
    req.flash('success', 'Metahuman updated successfully.');
    res.redirect('/metahumans');
  })
  .catch(err => {
    req.flash('error', `ERROR: ${err}`);
    res.render('metahumans/edit', {
      metahuman: req.body.metahuman,
      title: `Edit ${req.body.metahuman.alias}`
    });
  });
};


exports.destroy = (req, res) => {
  metahuman.deleteOne({
    _id: req.body.id,
  })
  .then(() => {
    req.flash('success', 'Metahuman deleted successfully.');
    res.redirect(`/metahumans`);
  })
  .catch(err => {
    req.flash('error', `ERROR: ${err}`);
    res.redirect('/metahumans');
  });
};