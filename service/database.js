const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('../dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const codeCollection = db.collection('codes');

function getUser(email) {
    return userCollection.findOne({ email: email });
}
  
function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}
  
async function createUser(email, password) {
    // Hash the password before we insert it into the database
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
  
    return user;
}

function addcodes(code){
    codeCollection.insertOne(code)
}

async function getcodes(ID){
    return await codeCollection.findOne({ID:ID})
}

function get_all(){
    return codeCollection.find().toArray()
}

async function update(ID, feedback){
    let resource = await getcodes(ID)
    let updated_feedbacks = resource.feedbacks
    updated_feedbacks.push(feedback)
    await codeCollection.updateOne({ID:ID}, {
        $set :{
            feedbacks: updated_feedbacks
        },
    })
}

async function delete_item(ID){
    await codeCollection.deleteOne({ID:ID});
}

module.exports = {
    getUser,
    getUserByToken,
    createUser, 
    addcodes,
    getcodes,
    get_all,
    update,
    delete_item
};