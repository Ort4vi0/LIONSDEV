import UserMGS from "../models/user.model.js";

export default {
    create(data) {
        return UserMGS.create(data);
    },
    findAll() {
        return UserMGS.find();
    },
    findById(id) {
        return UserMGS.findById(id);
    },
    updateById(id, data){
        return UserMGS.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    },
    deleteById(id){
        return UserMGS.findByIdAndDelete(id);
    },
    findByEmail(email){
        return UserMGS.findOne({ email });
    },
}