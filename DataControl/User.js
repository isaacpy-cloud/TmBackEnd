const mongoose = require('mongoose')

var userSchema = mongoose.Schema({

   name : String,
   Balance : Number,
   expenses : [ Expense.schema ]

});

module.exports = mongoose.model('User', userSchema);