"use strict";

exports.successRes = (data, code, msg) => {
  return {
    code: code || 200,
    data: data || {},
    msg: msg || "success",
    success: true,
  };
};

exports.failRes = (data, code, msg) => {
  return {
    code: code || 500,
    data: data || [],
    msg: msg || "error",
    success: false,
  };
};
