/**
 * @Summary 统一成功返回类型
 * @param {*} data
 * @param {*} code
 * @param {*} msg
 * @returns
 *
 */
exports.successRes = (res) => {
  return {
    code: res.code || 200,
    data: res.data || {},
    msg: res.msg || "成功！",
    success: true,
  };
};

/**
 * @Summary 统一失败类型返回
 * @param {*} data
 * @param {*} code
 * @param {*} msg
 * @returns
 */
exports.failRes = (err) => {
  return {
    code: err.code || err.status || 500,
    data: null,
    msg: err.msg || "失败！",
    success: false,
  };
};
