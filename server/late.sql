/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : late

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 10/07/2022 00:11:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for systems
-- ----------------------------
DROP TABLE IF EXISTS `systems`;
CREATE TABLE `systems`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT 'id主键',
  `name` varchar(200) CHARACTER SET utf32 COLLATE utf32_unicode_ci NULL DEFAULT NULL COMMENT '系统名称',
  `container` varchar(100) CHARACTER SET utf32 COLLATE utf32_unicode_ci NULL DEFAULT NULL COMMENT '渲染容器',
  `parent_id` int(0) NULL DEFAULT 0 COMMENT '父项目',
  `entry` varchar(100) CHARACTER SET utf32 COLLATE utf32_unicode_ci NULL DEFAULT NULL COMMENT '入口',
  `user_id` int(0) NULL DEFAULT NULL COMMENT '创建人id',
  `type` enum('vue','react','angler','') CHARACTER SET utf32 COLLATE utf32_unicode_ci NULL DEFAULT NULL COMMENT '应用类型',
  `is_delete` enum('1','0') CHARACTER SET utf32 COLLATE utf32_unicode_ci NULL DEFAULT '1' COMMENT '是否删除',
  `created_at` date NULL DEFAULT NULL,
  `updated_at` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf32 COLLATE = utf32_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of systems
-- ----------------------------
INSERT INTO `systems` VALUES (1, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (2, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (3, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (4, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (5, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (6, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (7, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (8, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (9, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (10, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (11, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (12, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (13, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (14, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (15, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (16, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (17, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (18, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (19, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (20, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (21, 'system', 'container', 0, NULL, NULL, NULL, '1', '2022-07-09', '2022-07-09');
INSERT INTO `systems` VALUES (22, 'system', 'container', 0, 'localhost', NULL, 'vue', '1', '2022-07-09', '2022-07-09');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf32 COLLATE utf32_unicode_ci NULL DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf32 COLLATE utf32_unicode_ci NULL DEFAULT NULL COMMENT '密码',
  `nick_name` varchar(100) CHARACTER SET utf32 COLLATE utf32_unicode_ci NULL DEFAULT NULL COMMENT '用户昵称',
  `token` varchar(255) CHARACTER SET utf32 COLLATE utf32_unicode_ci NULL DEFAULT NULL COMMENT 'token',
  `created_at` time(0) NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` time(0) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf32 COLLATE = utf32_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', 'jXDYqydo8jLr6HQXUGXq0w==', 'admin', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFsb25nIiwicGFzc3dvcmQiOiI0UXJjT1VtNldhdStWdUJYOGcrSVBnPT0iLCJpYXQiOjE2NTczNjYwNjd9.bf-_7f2V1rzqPcqmA-gNOnaOcmrMuEAcfjrcHU3YboI', '10:36:08', '11:27:47');
INSERT INTO `users` VALUES (2, 'test', '4QrcOUm6Wau+VuBX8g+IPg==', 'test', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3QiLCJwYXNzd29yZCI6IjRRcmNPVW02V2F1K1Z1Qlg4ZytJUGc9PSIsImlhdCI6MTY1NzM2MzUyN30._WOgLfzP7M7-IgPc8AMaoVtbASeNZJ3ZbKlKIhJIKT4', '10:45:27', '10:45:27');
INSERT INTO `users` VALUES (3, 'wu', '4QrcOUm6Wau+VuBX8g+IPg==', 'wu', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ind1IiwicGFzc3dvcmQiOiI0UXJjT1VtNldhdStWdUJYOGcrSVBnPT0iLCJpYXQiOjE2NTczNjM1MzZ9.Ea-0K-AmgX3ZO8EhYpsihkq7YJORRdjUj0hOePL52k0', '10:45:36', '10:45:36');
INSERT INTO `users` VALUES (4, 'wu1', '4QrcOUm6Wau+VuBX8g+IPg==', '吴汉良', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ind1MSIsInBhc3N3b3JkIjoiNFFyY09VbTZXYXUrVnVCWDhnK0lQZz09IiwiaWF0IjoxNjU3MzYzNTgyfQ.HiK--M9om6F0CLom-w7JG4nIVztd3ymKzYUd1Rf59c4', '10:46:22', '10:46:22');
INSERT INTO `users` VALUES (5, 'along', '4QrcOUm6Wau+VuBX8g+IPg==', '龙恩荣', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFsb25nIiwicGFzc3dvcmQiOiI0UXJjT1VtNldhdStWdUJYOGcrSVBnPT0iLCJpYXQiOjE2NTczNjM2MTJ9.T6xeBUY21fvaVH673JdzAcrQakUAry1H83fVOyIWqWA', '10:46:52', '10:46:52');

SET FOREIGN_KEY_CHECKS = 1;
