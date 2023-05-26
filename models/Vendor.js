const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  contact: { type: String, required: true },
  website: { type: String },
  address: { type: String },
  services: { type: [String], required: true },
  pricing: { type: String },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  rating: { type: Number },
  photos: { type: [String] },
  availability: { type: String },
  location: { type: String },
  categories: { type: [String], required: true },
});

// const Vendor = mongoose.model("Vendor", vendorSchema);
export default mongoose.models.Vendor || mongoose.model("Vendor", vendorSchema);


// module.exports = Vendor;

/* name: The name of the vendor or business.
description: A brief description of the vendor's services or products.
contact: Contact information for the vendor, such as an email address or phone number.
website: The vendor's website URL.
address: The vendor's physical address or location.
services: A list of the services or products offered by the vendor.
pricing: The pricing information for the vendor's services or products.
reviews: A list of reviews or ratings from previous customers.
rating: The overall rating for the vendor based on customer reviews.
photos: Photos of the vendor's products, services, or previous events.
availability: The vendor's availability for bookings or appointments.
location: The vendor's location, such as a city or region.
categories: The categories that the vendor belongs to, such as "photography" or "catering". */
