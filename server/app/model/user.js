module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  // user 模型;
  const User = app.model.define("user", {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: STRING(30),
    nickName: STRING(30),
    createdAt: DATE,
    updatedAt: DATE,
    password: STRING(100),
    token: STRING(100),
  });

  return User;
};
