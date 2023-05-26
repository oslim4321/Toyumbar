const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    isPhoneVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "vendor"],
      default: "user",
    },
    bookings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// const Users = mongoose.model("Users", UserSchema);

// export default Users;
export default mongoose.models.Users || mongoose.model("Users", UserSchema);

// module.exports = mongoose.model("User", UserSchema);

/*The role field in the User model is used to differentiate between regular users and vendors.

When a user creates an account, their role is set to "user" by default. Once they decide to become a vendor, they can update their profile and change their role to "vendor".

The enum option specifies the possible values that the role field can take, in this case either "user" or "vendor". The default option specifies the default value of the field if it is not provided when creating a new user. */
