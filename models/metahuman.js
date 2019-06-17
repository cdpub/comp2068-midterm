// We will need our mongoose library
const mongoose = require(`mongoose`);

// Your schema
const MetahumanSchema = new mongoose.Schema(
    {
      alias: {
        type: String,
        required: true
      },
      fullname: {
        type: String,
        required: false
      },
      affiliation: {
        type: String,
        required: false
      },
      metatype: {
        type: String,
        enum: [`SUPERHERO`, `VILLAIN`, `ANTIHERO`],
        default: `SUPERHERO`
      }
    }, 
    {
      timestamps: true        
    }
  );

  module.exports = mongoose.model(`Metahuman`, MetahumanSchema);