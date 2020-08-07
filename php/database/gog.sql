/*
Navicat MySQL Data Transfer

Source Server         : localhostsql
Source Server Version : 50553
Source Host           : localhost:3305
Source Database       : gog

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2020-08-07 11:24:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `banner_list`
-- ----------------------------
DROP TABLE IF EXISTS `banner_list`;
CREATE TABLE `banner_list` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(999) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `price` float(7,0) unsigned DEFAULT NULL,
  `zhekou` tinyint(7) unsigned DEFAULT NULL,
  `piclisturl` varchar(999) DEFAULT NULL,
  `system` varchar(999) DEFAULT NULL,
  `logo_url` varchar(999) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner_list
-- ----------------------------
INSERT INTO `banner_list` VALUES ('1', 'https://images-4.gog-statics.com/b4c7993055a663a1e754e62beacfe8777f5db9fb0137260f2b74adec4eb3cf84_bs_background_1275.jpg', 'Exiled Kingdoms', '24', '25', '', 'w', 'https://images-1.gog-statics.com/c224af7d7839bb245d61ac01da22357439728e9a9c2539d441d961c1d1be7474_bs_logo_big.png');
INSERT INTO `banner_list` VALUES ('2', 'https://images-3.gog-statics.com/29a229ebef1809db979d8bcc1ff25524d9eb2bec2b535af9334be622328e64b9_bs_background_1275.jpg', 'Outwars', '24', '8', '', 'w', 'https://images-1.gog-statics.com/c224af7d7839bb245d61ac01da22357439728e9a9c2539d441d961c1d1be7474_bs_logo_big.png');
INSERT INTO `banner_list` VALUES ('3', 'https://images-3.gog-statics.com/c70e52b4c026fe14444ac42678b25ffdcf15c24120b26999104ae1882bc21361_bs_background_1275.jpg', 'Divinity: Original Sin 2 - Definitive Edition', '67', '50', '', 'w', 'https://images-1.gog-statics.com/8f7c4d22a059476989391174b8e4598aaa2ee9da7e1104b620ee75ee3ac6e61f_bs_logo_big.png');
INSERT INTO `banner_list` VALUES ('4', 'https://images-2.gog-statics.com/c0c87c0d433795d9a1ad1fe6a4679a7484ac7eeb9873341f07bb9040a9bfc765_bs_background_1275.jpg', 'Destroy All Humans!', '159', '0', '', 'w', 'https://images-1.gog-statics.com/1130614726a5fac13eee175340530b0d93183bc92d5b7b0f7c35d6aa1d407400_bs_logo_big.png');
INSERT INTO `banner_list` VALUES ('5', 'https://images-1.gog-statics.com/05a5f1f36446dd767a53ed6795f6aa192d044ace31e0774e260e3e1ee2fa6235_bs_background_1275.jpg', 'Blades of Time', '26', '28', '', 'w', 'https://images-1.gog-statics.com/a7bbb304ab6197d62f378e5887917c54ccf3357ccd69d1cc336ff237d09d7e2a_bs_logo_big.png');
INSERT INTO `banner_list` VALUES ('6', 'https://images-1.gog-statics.com/082927a643f208a040da4d385a9be44807ea12616cabf9941b0fbc8cfbcbcac0_bs_background_1275.jpg', 'Vampire\'s Fall: Origins', '22', '49', '', 'w', 'https://images-3.gog-statics.com/d6f8e8a5b3853d4a5052d9da6a4a68065a6ba76895b1808488b8662f8cdd8c0a_bs_logo_big.png');
INSERT INTO `banner_list` VALUES ('7', 'https://images-4.gog-statics.com/4b7d518478432c1073ab0c92f40938379fe9d5785162b9d4208b67c9b862c6c1_bs_background_1275.jpg', 'Fae Tactics', '70', '0', '', 'w', 'https://images-2.gog-statics.com/43b2b115b9e6fb784f205cb0e816012aa285cee6320df3797ebc52304d356c57_bs_logo_big.png');

-- ----------------------------
-- Table structure for `prolist`
-- ----------------------------
DROP TABLE IF EXISTS `prolist`;
CREATE TABLE `prolist` (
  `sid` tinyint(4) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `zhekou` int(11) DEFAULT NULL,
  `piclisturl` varchar(255) DEFAULT NULL,
  `system` varchar(255) DEFAULT NULL,
  `logourl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of prolist
-- ----------------------------
INSERT INTO `prolist` VALUES ('1', 'https://images-4.gog-statics.com/b4c7993055a663a1e754e62beacfe8777f5db9fb0137260f2b74adec4eb3cf84_bs_background_1275.jpg', 'Exiled Kingdoms + 1', '24', '25', null, 'w', 'https://images-2.gog-statics.com/43b2b115b9e6fb784f205cb0e816012aa285cee6320df3797ebc52304d356c57_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('2', 'https://images-3.gog-statics.com/29a229ebef1809db979d8bcc1ff25524d9eb2bec2b535af9334be622328e64b9_bs_background_1275.jpg', 'Exiled Kingdoms + 2', '24', '8', null, 'w', 'https://images-1.gog-statics.com/1130614726a5fac13eee175340530b0d93183bc92d5b7b0f7c35d6aa1d407400_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('3', 'https://images-3.gog-statics.com/c70e52b4c026fe14444ac42678b25ffdcf15c24120b26999104ae1882bc21361_bs_background_1275.jpg', 'Exiled Kingdoms + 3', '67', '50', null, 'w', 'https://images-1.gog-statics.com/8f7c4d22a059476989391174b8e4598aaa2ee9da7e1104b620ee75ee3ac6e61f_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('4', 'https://images-2.gog-statics.com/c0c87c0d433795d9a1ad1fe6a4679a7484ac7eeb9873341f07bb9040a9bfc765_bs_background_1275.jpg', 'Exiled Kingdoms + 4', '159', '0', null, 'w', 'https://images-1.gog-statics.com/1130614726a5fac13eee175340530b0d93183bc92d5b7b0f7c35d6aa1d407400_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('5', 'https://images-1.gog-statics.com/05a5f1f36446dd767a53ed6795f6aa192d044ace31e0774e260e3e1ee2fa6235_bs_background_1275.jpg', 'Exiled Kingdoms + 5', '26', '28', null, 'w', 'https://images-1.gog-statics.com/a7bbb304ab6197d62f378e5887917c54ccf3357ccd69d1cc336ff237d09d7e2a_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('6', 'https://images-1.gog-statics.com/082927a643f208a040da4d385a9be44807ea12616cabf9941b0fbc8cfbcbcac0_bs_background_1275.jpg', 'Exiled Kingdoms + 6', '22', '49', null, 'w', 'https://images-3.gog-statics.com/d6f8e8a5b3853d4a5052d9da6a4a68065a6ba76895b1808488b8662f8cdd8c0a_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('7', 'https://images-4.gog-statics.com/4b7d518478432c1073ab0c92f40938379fe9d5785162b9d4208b67c9b862c6c1_bs_background_1275.jpg', 'Exiled Kingdoms + 7', '70', '0', null, 'w', 'https://images-2.gog-statics.com/43b2b115b9e6fb784f205cb0e816012aa285cee6320df3797ebc52304d356c57_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('8', 'https://images-4.gog-statics.com/b4c7993055a663a1e754e62beacfe8777f5db9fb0137260f2b74adec4eb3cf84_bs_background_1275.jpg', 'Exiled Kingdoms + 8', '24', '25', null, 'w', 'https://images-1.gog-statics.com/c224af7d7839bb245d61ac01da22357439728e9a9c2539d441d961c1d1be7474_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('9', 'https://images-3.gog-statics.com/29a229ebef1809db979d8bcc1ff25524d9eb2bec2b535af9334be622328e64b9_bs_background_1275.jpg', 'Exiled Kingdoms + 9', '24', '8', null, 'w', 'https://images-1.gog-statics.com/c224af7d7839bb245d61ac01da22357439728e9a9c2539d441d961c1d1be7474_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('10', 'https://images-3.gog-statics.com/c70e52b4c026fe14444ac42678b25ffdcf15c24120b26999104ae1882bc21361_bs_background_1275.jpg', 'Exiled Kingdoms + 10', '67', '50', null, 'w', 'https://images-1.gog-statics.com/8f7c4d22a059476989391174b8e4598aaa2ee9da7e1104b620ee75ee3ac6e61f_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('11', 'https://images-2.gog-statics.com/c0c87c0d433795d9a1ad1fe6a4679a7484ac7eeb9873341f07bb9040a9bfc765_bs_background_1275.jpg', 'Exiled Kingdoms + 11', '159', '0', null, 'w', 'https://images-1.gog-statics.com/1130614726a5fac13eee175340530b0d93183bc92d5b7b0f7c35d6aa1d407400_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('12', 'https://images-1.gog-statics.com/05a5f1f36446dd767a53ed6795f6aa192d044ace31e0774e260e3e1ee2fa6235_bs_background_1275.jpg', 'Exiled Kingdoms + 12', '26', '28', null, 'w', 'https://images-1.gog-statics.com/a7bbb304ab6197d62f378e5887917c54ccf3357ccd69d1cc336ff237d09d7e2a_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('13', 'https://images-1.gog-statics.com/082927a643f208a040da4d385a9be44807ea12616cabf9941b0fbc8cfbcbcac0_bs_background_1275.jpg', 'Exiled Kingdoms + 13', '22', '49', null, 'w', 'https://images-3.gog-statics.com/d6f8e8a5b3853d4a5052d9da6a4a68065a6ba76895b1808488b8662f8cdd8c0a_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('14', 'https://images-4.gog-statics.com/4b7d518478432c1073ab0c92f40938379fe9d5785162b9d4208b67c9b862c6c1_bs_background_1275.jpg', 'Exiled Kingdoms + 14', '70', '0', null, 'w', 'https://images-2.gog-statics.com/43b2b115b9e6fb784f205cb0e816012aa285cee6320df3797ebc52304d356c57_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('15', 'https://images-4.gog-statics.com/b4c7993055a663a1e754e62beacfe8777f5db9fb0137260f2b74adec4eb3cf84_bs_background_1275.jpg', 'Exiled Kingdoms + 15', '24', '25', null, 'w', 'https://images-1.gog-statics.com/c224af7d7839bb245d61ac01da22357439728e9a9c2539d441d961c1d1be7474_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('16', 'https://images-3.gog-statics.com/29a229ebef1809db979d8bcc1ff25524d9eb2bec2b535af9334be622328e64b9_bs_background_1275.jpg', 'Exiled Kingdoms + 16', '24', '8', null, 'w', 'https://images-1.gog-statics.com/c224af7d7839bb245d61ac01da22357439728e9a9c2539d441d961c1d1be7474_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('17', 'https://images-3.gog-statics.com/c70e52b4c026fe14444ac42678b25ffdcf15c24120b26999104ae1882bc21361_bs_background_1275.jpg', 'Exiled Kingdoms + 17', '67', '50', null, 'w', 'https://images-1.gog-statics.com/8f7c4d22a059476989391174b8e4598aaa2ee9da7e1104b620ee75ee3ac6e61f_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('18', 'https://images-2.gog-statics.com/c0c87c0d433795d9a1ad1fe6a4679a7484ac7eeb9873341f07bb9040a9bfc765_bs_background_1275.jpg', 'Exiled Kingdoms + 18', '159', '0', null, 'w', 'https://images-1.gog-statics.com/1130614726a5fac13eee175340530b0d93183bc92d5b7b0f7c35d6aa1d407400_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('19', 'https://images-1.gog-statics.com/05a5f1f36446dd767a53ed6795f6aa192d044ace31e0774e260e3e1ee2fa6235_bs_background_1275.jpg', 'Exiled Kingdoms + 19', '26', '28', null, 'w', 'https://images-1.gog-statics.com/a7bbb304ab6197d62f378e5887917c54ccf3357ccd69d1cc336ff237d09d7e2a_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('20', 'https://images-1.gog-statics.com/082927a643f208a040da4d385a9be44807ea12616cabf9941b0fbc8cfbcbcac0_bs_background_1275.jpg', 'Exiled Kingdoms + 20', '22', '49', null, 'w', 'https://images-3.gog-statics.com/d6f8e8a5b3853d4a5052d9da6a4a68065a6ba76895b1808488b8662f8cdd8c0a_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('21', 'https://images-4.gog-statics.com/4b7d518478432c1073ab0c92f40938379fe9d5785162b9d4208b67c9b862c6c1_bs_background_1275.jpg', 'Exiled Kingdoms + 21', '70', '0', null, 'w', 'https://images-2.gog-statics.com/43b2b115b9e6fb784f205cb0e816012aa285cee6320df3797ebc52304d356c57_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('22', 'https://images-4.gog-statics.com/b4c7993055a663a1e754e62beacfe8777f5db9fb0137260f2b74adec4eb3cf84_bs_background_1275.jpg', 'Exiled Kingdoms + 22', '24', '25', null, 'w', 'https://images-1.gog-statics.com/c224af7d7839bb245d61ac01da22357439728e9a9c2539d441d961c1d1be7474_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('23', 'https://images-3.gog-statics.com/29a229ebef1809db979d8bcc1ff25524d9eb2bec2b535af9334be622328e64b9_bs_background_1275.jpg', 'Exiled Kingdoms + 23', '24', '8', null, 'w', 'https://images-1.gog-statics.com/c224af7d7839bb245d61ac01da22357439728e9a9c2539d441d961c1d1be7474_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('24', 'https://images-3.gog-statics.com/c70e52b4c026fe14444ac42678b25ffdcf15c24120b26999104ae1882bc21361_bs_background_1275.jpg', 'Exiled Kingdoms + 24', '67', '50', null, 'w', 'https://images-1.gog-statics.com/8f7c4d22a059476989391174b8e4598aaa2ee9da7e1104b620ee75ee3ac6e61f_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('25', 'https://images-2.gog-statics.com/c0c87c0d433795d9a1ad1fe6a4679a7484ac7eeb9873341f07bb9040a9bfc765_bs_background_1275.jpg', 'Exiled Kingdoms + 25', '159', '0', null, 'w', 'https://images-1.gog-statics.com/1130614726a5fac13eee175340530b0d93183bc92d5b7b0f7c35d6aa1d407400_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('26', 'https://images-1.gog-statics.com/05a5f1f36446dd767a53ed6795f6aa192d044ace31e0774e260e3e1ee2fa6235_bs_background_1275.jpg', 'Exiled Kingdoms + 26', '26', '28', null, 'w', 'https://images-1.gog-statics.com/a7bbb304ab6197d62f378e5887917c54ccf3357ccd69d1cc336ff237d09d7e2a_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('27', 'https://images-1.gog-statics.com/082927a643f208a040da4d385a9be44807ea12616cabf9941b0fbc8cfbcbcac0_bs_background_1275.jpg', 'Exiled Kingdoms + 27', '22', '49', null, 'w', 'https://images-3.gog-statics.com/d6f8e8a5b3853d4a5052d9da6a4a68065a6ba76895b1808488b8662f8cdd8c0a_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('28', 'https://images-4.gog-statics.com/4b7d518478432c1073ab0c92f40938379fe9d5785162b9d4208b67c9b862c6c1_bs_background_1275.jpg', 'Exiled Kingdoms + 28', '70', '0', null, 'w', 'https://images-2.gog-statics.com/43b2b115b9e6fb784f205cb0e816012aa285cee6320df3797ebc52304d356c57_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('29', 'https://images-4.gog-statics.com/b4c7993055a663a1e754e62beacfe8777f5db9fb0137260f2b74adec4eb3cf84_bs_background_1275.jpg', 'Exiled Kingdoms + 29', '24', '25', null, 'w', 'https://images-1.gog-statics.com/c224af7d7839bb245d61ac01da22357439728e9a9c2539d441d961c1d1be7474_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('30', 'https://images-3.gog-statics.com/29a229ebef1809db979d8bcc1ff25524d9eb2bec2b535af9334be622328e64b9_bs_background_1275.jpg', 'Exiled Kingdoms + 30', '24', '8', null, 'w', 'https://images-1.gog-statics.com/c224af7d7839bb245d61ac01da22357439728e9a9c2539d441d961c1d1be7474_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('31', 'https://images-3.gog-statics.com/c70e52b4c026fe14444ac42678b25ffdcf15c24120b26999104ae1882bc21361_bs_background_1275.jpg', 'Exiled Kingdoms + 31', '67', '50', null, 'w', 'https://images-1.gog-statics.com/8f7c4d22a059476989391174b8e4598aaa2ee9da7e1104b620ee75ee3ac6e61f_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('32', 'https://images-2.gog-statics.com/c0c87c0d433795d9a1ad1fe6a4679a7484ac7eeb9873341f07bb9040a9bfc765_bs_background_1275.jpg', 'Exiled Kingdoms + 32', '159', '0', null, 'w', 'https://images-1.gog-statics.com/1130614726a5fac13eee175340530b0d93183bc92d5b7b0f7c35d6aa1d407400_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('33', 'https://images-1.gog-statics.com/05a5f1f36446dd767a53ed6795f6aa192d044ace31e0774e260e3e1ee2fa6235_bs_background_1275.jpg', 'Exiled Kingdoms + 33', '26', '28', null, 'w', 'https://images-1.gog-statics.com/a7bbb304ab6197d62f378e5887917c54ccf3357ccd69d1cc336ff237d09d7e2a_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('34', 'https://images-1.gog-statics.com/082927a643f208a040da4d385a9be44807ea12616cabf9941b0fbc8cfbcbcac0_bs_background_1275.jpg', 'Exiled Kingdoms + 34', '22', '49', null, 'w', 'https://images-3.gog-statics.com/d6f8e8a5b3853d4a5052d9da6a4a68065a6ba76895b1808488b8662f8cdd8c0a_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('35', 'https://images-4.gog-statics.com/4b7d518478432c1073ab0c92f40938379fe9d5785162b9d4208b67c9b862c6c1_bs_background_1275.jpg', 'Exiled Kingdoms + 35', '70', '0', null, 'w', 'https://images-2.gog-statics.com/43b2b115b9e6fb784f205cb0e816012aa285cee6320df3797ebc52304d356c57_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('36', 'https://images-4.gog-statics.com/b4c7993055a663a1e754e62beacfe8777f5db9fb0137260f2b74adec4eb3cf84_bs_background_1275.jpg', 'Exiled Kingdoms + 36', '24', '25', null, 'w', 'https://images-1.gog-statics.com/c224af7d7839bb245d61ac01da22357439728e9a9c2539d441d961c1d1be7474_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('37', 'https://images-3.gog-statics.com/29a229ebef1809db979d8bcc1ff25524d9eb2bec2b535af9334be622328e64b9_bs_background_1275.jpg', 'Exiled Kingdoms + 37', '24', '8', null, 'w', 'https://images-1.gog-statics.com/c224af7d7839bb245d61ac01da22357439728e9a9c2539d441d961c1d1be7474_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('38', 'https://images-3.gog-statics.com/c70e52b4c026fe14444ac42678b25ffdcf15c24120b26999104ae1882bc21361_bs_background_1275.jpg', 'Exiled Kingdoms + 38', '67', '50', null, 'w', 'https://images-1.gog-statics.com/8f7c4d22a059476989391174b8e4598aaa2ee9da7e1104b620ee75ee3ac6e61f_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('39', 'https://images-2.gog-statics.com/c0c87c0d433795d9a1ad1fe6a4679a7484ac7eeb9873341f07bb9040a9bfc765_bs_background_1275.jpg', 'Exiled Kingdoms + 39', '159', '0', null, 'w', 'https://images-1.gog-statics.com/1130614726a5fac13eee175340530b0d93183bc92d5b7b0f7c35d6aa1d407400_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('40', 'https://images-1.gog-statics.com/05a5f1f36446dd767a53ed6795f6aa192d044ace31e0774e260e3e1ee2fa6235_bs_background_1275.jpg', 'Exiled Kingdoms + 40', '26', '28', null, 'w', 'https://images-1.gog-statics.com/a7bbb304ab6197d62f378e5887917c54ccf3357ccd69d1cc336ff237d09d7e2a_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('41', 'https://images-1.gog-statics.com/082927a643f208a040da4d385a9be44807ea12616cabf9941b0fbc8cfbcbcac0_bs_background_1275.jpg', 'Exiled Kingdoms + 41', '22', '49', null, 'w', 'https://images-3.gog-statics.com/d6f8e8a5b3853d4a5052d9da6a4a68065a6ba76895b1808488b8662f8cdd8c0a_bs_logo_big.png');
INSERT INTO `prolist` VALUES ('42', 'https://images-4.gog-statics.com/4b7d518478432c1073ab0c92f40938379fe9d5785162b9d4208b67c9b862c6c1_bs_background_1275.jpg', 'Exiled Kingdoms + 42', '70', '0', null, 'w', 'https://images-2.gog-statics.com/43b2b115b9e6fb784f205cb0e816012aa285cee6320df3797ebc52304d356c57_bs_logo_big.png');

-- ----------------------------
-- Table structure for `registry`
-- ----------------------------
DROP TABLE IF EXISTS `registry`;
CREATE TABLE `registry` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registry
-- ----------------------------
INSERT INTO `registry` VALUES ('52', 'yehang', '4a8a9fc31dc15a4b87bb145b05db3ae0bf2333e4', 'df', '2020-08-06 10:01:24');
INSERT INTO `registry` VALUES ('53', 'ffff', 'ed70c57d7564e994e7d5f6fd6967cea8b347efbc', 'ff', '2020-08-06 10:22:16');
