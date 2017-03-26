var mongoose = require('mongoose')
var Schema = mongoose.Schema
var validate = require('mongoose-validator')

var emailVerify = [
  validate({
    validator: 'isEmail',
    message: 'Email yang dimasukkan tidak valid !'
  })
]

var dateVerify = [
  validate({
    validator: 'isDate',
    message: 'Tanggal yang dimasukkan tidak valid ! [yyyy/mm/dd]'
  })
]

var userSchema = new Schema({
  title: { type: String, required: [true, 'Mohon mengisi bagian judul'], unique: [true, 'Judul tidak boleh sama dengan yang lain']},
  name: { type: String, required: [true, 'Mohon mengisi bagian nama'] },
  email: {type: String, required: [true, 'Mohon mengisi bagian email'], validate: emailVerify },
  tanggal: {type: Date, required: [true, 'Mohon mengisi bagian tanggal'],validate: dateVerify}
})

var User = mongoose.model('User', userSchema)
module.exports = User
