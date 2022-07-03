"use strict";

/**
 * @Summary 统一成功返回类型
 * @param {*} data
 * @param {*} code
 * @param {*} msg
 * @returns
 *
 */
exports.successRes = (data, code, msg) => {
  return {
    code: code || 200,
    data: data || {},
    msg: msg || "success",
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
exports.failRes = (data, code, msg) => {
  return {
    code: code || 500,
    data: data || [],
    msg: msg || "error",
    success: false,
  };
};
