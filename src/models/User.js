  const mongoose = require('../database');

    // campos que vamos ter dentro do banco de dados
  const UserSchema = new mongoose.Schema({
    name:{
      type: String,
      required: true,
    },
    price:{
      type: Number,
      required: true,
    },
    data:{
      type: Date,
      default: Date.now,
    }
    
    
  });

   // definindo model
   const User = mongoose.model('User', UserSchema);

   module.exports = User;