const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "* Campo obrigatório!"]
  },
  email: {
    type: String,
    index: { unique: true },
    required: [true, "* Campo obrigatório!"]
  },
  password: {
    type: String,
    required: [true, "* Campo obrigatório!"]
  },
  telephone: {
    type: String,
    required: [true, "* Campo obrigatório!"]
  },
  type: {
    type: String,
    required: true
  }
});

UserSchema.pre("save", function(next) {
  let user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.validatePassword = async function validatePassword(data) {
  return bcrypt.compare(data, this.password);
};

const User = mongoose.model("UserSchema", UserSchema);
module.exports = User;
