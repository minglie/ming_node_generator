/*
Navicat MySQL Data Transfer

Source Server         : windows-mysql
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : ming-lie

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2019-08-31 12:39:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ming_mysql_mq_config
-- ----------------------------
DROP TABLE IF EXISTS `ming_mysql_mq_config`;
CREATE TABLE `ming_mysql_mq_config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `topic` varchar(255) DEFAULT NULL COMMENT '消息主题',
  `topic_name` varchar(255) DEFAULT NULL COMMENT '主题名称',
  `consumer` varchar(255) DEFAULT NULL COMMENT '消费者列表',
  `status` varchar(6) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COMMENT='消息订阅配置';

-- ----------------------------
-- Records of ming_mysql_mq_config
-- ----------------------------
INSERT INTO `ming_mysql_mq_config` VALUES ('30', 'topic01', 'topic01name', '[\"http://localhost:11112/topic01Listener\"]', null);
INSERT INTO `ming_mysql_mq_config` VALUES ('31', 'topic02', 'topic02name', '[\"http://localhost:11112/topic02Listener\"]', null);

-- ----------------------------
-- Table structure for ming_mysql_mq_message
-- ----------------------------
DROP TABLE IF EXISTS `ming_mysql_mq_message`;
CREATE TABLE `ming_mysql_mq_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `topic` varchar(255) DEFAULT NULL COMMENT '主题',
  `ip` varchar(255) DEFAULT NULL COMMENT '投递消息者的ip',
  `body` text COMMENT '消息体',
  `request_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '请求时间',
  `status` varchar(255) DEFAULT NULL COMMENT '消费状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

