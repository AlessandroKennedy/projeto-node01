const User = require('../models/User');
const Gamedata = require('../models/Gamedata');
const { findOne } = require('../models/User');

module.exports = {

  async index(req,res){
    const users = await User.findAll();
    return res.json(users);
  },

  async store(req, res){
    const {name, email, age, gender} = req.body;
    const user = await User.create({name, email, age, gender});

    const gamedata = await Gamedata.create({
      user_id:user.id,
      gold_free:0,
      gold_premium:0,
      upgrade:0,
      upgrade_end:null,
      upgrande_end:null,
    });
    return res.json([user,gamedata]);
  },


};
