module.exports = () => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      // 所有的异常都会在app上出发一个error事件，框架会记录一条错误日志
      ctx.app.emit("error", err, ctx);
      const status = err.status || 500;
      ctx.body = {
        msg: error,
        sta: status,
        data: [],
      };
    }
  };
};
