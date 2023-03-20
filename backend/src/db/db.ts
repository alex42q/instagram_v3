import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
    host:"localhost",
    dialect:'postgres',
    username:"alex",
    password:"Alexis42q",
    database:"instagram_v3",
    models:[]
})

sequelize.authenticate()
.then(()=>{
    console.log("Database connection established")
})
.catch(err=>{
    console.log(err)
})


export default sequelize;
