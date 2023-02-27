import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    patient_id: String,
    age: Number,
    sex: String,
    zip: Number,
    latest_bmi: Number,
    latest_weight: Number,
    image_url: String,
    exam_id: String,
    icu_admit: String,
    num_icu_admits: Number,
    mortality: String,
    notes: String,
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;