const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        require: [true, 'El nombre es obligatorio. '],
    },
    lastname: {
        type: String,
        require: [true, 'El apellido es obligatorio. ']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    },
    phone: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        enum: ['ADMIN_ROLE', 'USER_ROLE', 'SALES_ROLE'],
        default: 'USER_ROLE'
    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
    question: {
        type: String,
    },
    answer: {
        type: String,
    },
}, { timestamps: true });

UserSchema.methods.toJSON = function () {
    const { __v, status, password,  _id, ...data } = this.toObject();
    data.uid = _id;
    return {
        ...data
    };
}

module.exports = model('User', UserSchema);