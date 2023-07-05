const Sequelize=require('sequelize');



const sequelize=new Sequelize('groupchat-mysql','root','Shubham@803214',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;
