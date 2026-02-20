import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  department: { type: String },
  doctorName: { type: String },
  patientName: { type: String },
  date: { type: String, required: true },
  timeSlot: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  }
});

export default mongoose.model("Appointment", appointmentSchema);
