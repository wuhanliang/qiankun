module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  // user 模型;
  const System = app.model.define("system", {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(30),
    container: STRING(30),
    // type: ENUM,
    parentId: INTEGER,
    entry: STRING(30),
    userId: INTEGER,
    // delete: ENUM,
    createdAt: DATE,
    updatedAt: DATE,
  });

  return System;
};
