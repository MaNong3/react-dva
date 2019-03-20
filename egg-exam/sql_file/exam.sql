-- MySQL dump 10.13  Distrib 5.5.36, for Linux (x86_64)
--
-- Host: localhost    Database: exam
-- ------------------------------------------------------
-- Server version	5.5.36-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `api_authority`
--

DROP TABLE IF EXISTS `api_authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `api_authority` (
  `api_authority_id` varchar(255) NOT NULL DEFAULT '',
  `api_authority_text` varchar(255) DEFAULT NULL,
  `api_authority_url` varchar(255) DEFAULT NULL,
  `api_authority_method` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`api_authority_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_authority`
--

LOCK TABLES `api_authority` WRITE;
/*!40000 ALTER TABLE `api_authority` DISABLE KEYS */;
INSERT INTO `api_authority` VALUES ('i69wzm-bkqldr','获取所有的考试类型','/exam/examType','GET'),('duf7ds-zwvace','获取所有的课程','/exam/subject','GET'),('yda3h-y6nekr','删除指定的试题类型','/exam/delQuestionsType','POST'),('ybay6c-kqm7w','添加试题类型','/exam/insertQuestionsType','GET'),('rzerajv-0d95uo','获取所有的试题类型','/exam/getQuestionsType','GET'),('32uyuk-lg0kel','添加试题接口','/exam/questions','POST'),('ekp5yh-5xyxoh','获取所有试题','/exam/questions/new','GET'),('kpp9kr-nywgm','展示用户数据','/user/user','GET'),('1nm0c-hj4i9i','展示api接口权限数据','/user/api_authority','GET'),('9mi37w-edgwper','展示身份数据','/user/identity','GET'),('wctk6-eb17u','展示身份和api权限关系','/user/identity_api_authority_relation','GET'),('axk8no-pi8un','添加用户','/user','POST'),('fcmvyt-0l7e1s','添加视图权限','/user/authorityView/edit','GET'),('iowcpb-0rmeze','添加身份','/user/identity/edit','GET'),('rnlldc-cbymie','添加api接口权限','/user/authorityApi/edit','GET'),('prvn7n-p6khft','给身份设定api接口权限','/user/setIdentityApi','POST'),('y707cc-kiahhg','更新用户信息(用户名，用户密码，用户身份)','/user/user','PUT'),('fvmtcb-g339h','登录接口','/user/login','POST'),('2irygl-h8we2','获取当前用户信息','/user/userInfo','GET'),('db1edd-ywjnus','获取视图权限数据','/user/view_authority','GET'),('vkngbd-gnjkq','给身份设定视图权限','/user/setIdentityView','POST'),('md2k6-5phy2a','展示身份和视图权限关系','/user/identity_view_authority_relation','GET'),('oczc1v-uf0m0d','根据用户id，返回该用户的视图权限','/user/new','GET'),('2z41v-6b16qq','按条件获取用户数据','/exam/questions/condition','GET');
/*!40000 ALTER TABLE `api_authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam_type`
--

DROP TABLE IF EXISTS `exam_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exam_type` (
  `exam_id` varchar(255) NOT NULL DEFAULT '',
  `exam_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`exam_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam_type`
--

LOCK TABLES `exam_type` WRITE;
/*!40000 ALTER TABLE `exam_type` DISABLE KEYS */;
INSERT INTO `exam_type` VALUES ('8sc5d7-7p5f9e-cb2zii-ahe5i','周考1'),('jpg8y9-zbzt7o-jpvuhf-fwnjvr','周考2'),('ukmp9b-radddj-ogwdr-nw3ane','周考3'),('wbxm4-jf8q6k-lvt2ca-ze96mg','月考');
/*!40000 ALTER TABLE `exam_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `identity`
--

DROP TABLE IF EXISTS `identity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `identity` (
  `identity_id` varchar(255) NOT NULL DEFAULT '',
  `identity_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`identity_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `identity`
--

LOCK TABLES `identity` WRITE;
/*!40000 ALTER TABLE `identity` DISABLE KEYS */;
INSERT INTO `identity` VALUES ('63no9p-8y0k4','管理员'),('uf81yn-hv8uvv','出题者'),('zi0gu7-v7dy08','浏览者');
/*!40000 ALTER TABLE `identity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `identity_api_authority_relation`
--

DROP TABLE IF EXISTS `identity_api_authority_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `identity_api_authority_relation` (
  `identity_api_authority_relation_id` varchar(255) NOT NULL DEFAULT '',
  `identity_id` varchar(255) DEFAULT NULL,
  `api_authority_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`identity_api_authority_relation_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `identity_api_authority_relation`
--

LOCK TABLES `identity_api_authority_relation` WRITE;
/*!40000 ALTER TABLE `identity_api_authority_relation` DISABLE KEYS */;
INSERT INTO `identity_api_authority_relation` VALUES ('2sipwi-b2hul-5mw0xf','63no9p-8y0k4','i69wzm-bkqldr'),('9ltxnf-lwhywa-h3khm','63no9p-8y0k4','duf7ds-zwvace'),('0e6v5-6ssbu-ns9bp','63no9p-8y0k4','yda3h-y6nekr'),('ebgihf-zxn3z-xybmoh','63no9p-8y0k4','ybay6c-kqm7w'),('cu92a-dfmwu-w6351g','63no9p-8y0k4','rzerajv-0d95uo'),('o4ncu-zb3rlf-fof02s','63no9p-8y0k4','32uyuk-lg0kel'),('pok0k-ncgj3-hscre','63no9p-8y0k4','jxczxso-8e8enf'),('p4mdam-ml5uy6-hgs7zr','63no9p-8y0k4','kpp9kr-nywgm'),('9nd48n-8tko9e-wxcgds','63no9p-8y0k4','1nm0c-hj4i9i'),('rpg6cc-2hgckf-z88iu','63no9p-8y0k4','9mi37w-edgwper'),('xrv6mm-ae7n6m-04n7','63no9p-8y0k4','wctk6-eb17u'),('nwv5p7-iqg8na-rvuxdn','63no9p-8y0k4','axk8no-pi8un'),('otajrg-k800ke-zinmo','63no9p-8y0k4','fcmvyt-0l7e1s'),('wsckga-4myyih-7yudma','63no9p-8y0k4','iowcpb-0rmeze'),('ipplws-7jozs9u-wm70qh','63no9p-8y0k4','rnlldc-cbymie'),('2zfz4-v7kvff-iwd0rj','63no9p-8y0k4','prvn7n-p6khft'),('0ewep7-np7npj-tqwxr','63no9p-8y0k4','y707cc-kiahhg'),('pdtxuk-0gfm8m-jafbsmd','uf81yn-hv8uvv','i69wzm-bkqldr'),('tj2eqd-9owdy8-6pyx','uf81yn-hv8uvv','yda3h-y6nekr'),('vq7g5m-dukco4-ovqkuj','uf81yn-hv8uvv','32uyuk-lg0kel'),('w5nj09-l0vd5b-ljs0gb','uf81yn-hv8uvv','jxczxso-8e8enf'),('xc7z2-bxvy8m-3k66pl','63no9p-8y0k4','fvmtcb-g339h'),('1lejic-80tm0d-jpo5mq','uf81yn-hv8uvv','fvmtcb-g339h'),('cctsi7-lystop-mmnxx9','uf81yn-hv8uvv','duf7ds-zwvace'),('46uezp9-u23t8b-tmewpb','uf81yn-hv8uvv','ybay6c-kqm7w'),('4n5obj-ngchf-fo9u4o','uf81yn-hv8uvv','rzerajv-0d95uo'),('stdqf-6axl7c-f6xi6','63no9p-8y0k4','2irygl-h8we2'),('irbac-hpzioe-i7y48','uf81yn-hv8uvv','2irygl-h8we2'),('yqg7b-e3vypl-lot8mj','63no9p-8y0k4','db1edd-ywjnus'),('i124cf-4q73hv-121pa4','63no9p-8y0k4','vkngbd-gnjkq'),('xlzxp-ksz2i-z1a39k','63no9p-8y0k4','md2k6-5phy2a'),('rwj63d-jqe4v-omvypq','63no9p-8y0k4','oczc1v-uf0m0d'),('gt20bs-w8vam-6gvv78','uf81yn-hv8uvv','oczc1v-uf0m0d'),('hhog7b-7t234g-00olkf','63no9p-8y0k4','ekp5yh-5xyxoh'),('1f17v8-jjs2b-ffbqhr','uf81yn-hv8uvv','ekp5yh-5xyxoh'),('ru7ty-nitle-acap0y','zi0gu7-v7dy08','i69wzm-bkqldr'),('eun0fq-0am9qo-ppthl','zi0gu7-v7dy08','ekp5yh-5xyxoh'),('krt9n9-zvncag-57ae5','zi0gu7-v7dy08','fvmtcb-g339h'),('v47vgn-qweotd-qlh7z','zi0gu7-v7dy08','2irygl-h8we2'),('r663p-cvpreh-9ts2l7','zi0gu7-v7dy08','oczc1v-uf0m0d'),('kvxxef-6b4l9x-jhphnw','63no9p-8y0k4','2z41v-6b16qq'),('lr6bub-0su6y5-gmkejr','uf81yn-hv8uvv','2z41v-6b16qq'),('74ytp-w0m20yo-sbinre','zi0gu7-v7dy08','2z41v-6b16qq');
/*!40000 ALTER TABLE `identity_api_authority_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `identity_view_authority_relation`
--

DROP TABLE IF EXISTS `identity_view_authority_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `identity_view_authority_relation` (
  `identity_view_authority_relation_id` varchar(255) NOT NULL DEFAULT '',
  `identity_id` varchar(255) DEFAULT NULL,
  `view_authority_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`identity_view_authority_relation_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `identity_view_authority_relation`
--

LOCK TABLES `identity_view_authority_relation` WRITE;
/*!40000 ALTER TABLE `identity_view_authority_relation` DISABLE KEYS */;
INSERT INTO `identity_view_authority_relation` VALUES ('uo48jw-9wmca3-xiu7qgc','63no9p-8y0k4','r50r9t-1p1kbm'),('3p0q4i-ap1qne-hhxy7i','63no9p-8y0k4','8olznh-943zt'),('h2m3l3-y61zk1-dpksjp','63no9p-8y0k4','4pvvb3-h5kzg'),('lnx4i-dl9998-btorgs','63no9p-8y0k4','vnpojq-tisgu'),('5erk2p-fk1e2n-moraba','63no9p-8y0k4','xpz8cf-xoyd7n'),('7jsj48-ullf9o-dautlb','63no9p-8y0k4','qcrhh-k0tvh'),('5c6fu6-zwtfa-kzuies','63no9p-8y0k4','o4xsrn-5heg27'),('1g0ui-l52ryb-932yj','uf81yn-hv8uvv','r50r9t-1p1kbm'),('v79dd8-3a01kl-jyl10p','uf81yn-hv8uvv','8olznh-943zt'),('e2xgol-l5ttus-k00i9f','uf81yn-hv8uvv','4pvvb3-h5kzg'),('0p9s9i-h74p9-z3ihhw','uf81yn-hv8uvv','xpz8cf-xoyd7n'),('u7grma-f5zamg-oxzfxs','63no9p-8y0k4','1orauc-piu6gm'),('kui3x-9x0pf8-dx2lgq','63no9p-8y0k4','43t70e-pk8ylk'),('it7q68-1ww2ad-p3mwn','zi0gu7-v7dy08','r50r9t-1p1kbm'),('uhsmb6-sy2te-6krt4q','zi0gu7-v7dy08','8olznh-943zt'),('4tgudt-mcx4tb-4lort5','zi0gu7-v7dy08','xpz8cf-xoyd7n');
/*!40000 ALTER TABLE `identity_view_authority_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `questions_id` varchar(255) NOT NULL DEFAULT '',
  `questions_type_id` varchar(255) DEFAULT NULL,
  `json_path` varchar(255) DEFAULT NULL,
  `subject_id` varchar(255) DEFAULT NULL,
  `exam_id` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`questions_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES ('u72u3-tda3n-4ni2vb-mhi3qs','774318-730z8m','u72u3-tda3n-4ni2vb-mhi3qs.json','fqtktr-1lq5u','8sc5d7-7p5f9e-cb2zii-ahe5i','axg8t2-oroeja',NULL),('83nd9t-3126tf-zoa4o9-n1l4pr','v8i73-r8oai','83nd9t-3126tf-zoa4o9-n1l4pr.json','fqtktr-1lq5u','8sc5d7-7p5f9e-cb2zii-ahe5i','ypay2t-7uxsd',NULL),('skwfv-oni3vi-sv83x-mhnqcl','774318-730z8m','skwfv-oni3vi-sv83x-mhnqcl.json','fqtktr-1lq5u','8sc5d7-7p5f9e-cb2zii-ahe5i','kqpvys-hpzkdt',NULL),('yw91la-o5xtg-m98u9-1y0y7','v8i73-r8oai','yw91la-o5xtg-m98u9-1y0y7.json','fqtktr-1lq5u','8sc5d7-7p5f9e-cb2zii-ahe5i','ypay2t-7uxsd',NULL),('xfr5vei-ybe5xo-inzsht-pfex1r','774318-730z8m','xfr5vei-ybe5xo-inzsht-pfex1r.json','wl5yk-38c0g','8sc5d7-7p5f9e-cb2zii-ahe5i','w6l6n-cbvl6s',NULL),('oa52t-mbqcan-yxep4l-waigpi','774318-730z8m','oa52t-mbqcan-yxep4l-waigpi.json','wl5yk-38c0g','jpg8y9-zbzt7o-jpvuhf-fwnjvr','w6l6n-cbvl6s',NULL),('1dmfy-lmyky6-6b62i-y8lqco','br9d6s-wh46i','1dmfy-lmyky6-6b62i-y8lqco.json','wl5yk-38c0g','jpg8y9-zbzt7o-jpvuhf-fwnjvr','w6l6n-cbvl6s',NULL),('rxshnn-047w4-ewo3y9-mw13zh','br9d6s-wh46i','rxshnn-047w4-ewo3y9-mw13zh.json','wl5yk-38c0g','jpg8y9-zbzt7o-jpvuhf-fwnjvr','w6l6n-cbvl6s',NULL),('691htg-y0fsf-giea7r-p5mbge','br9d6s-wh46i','691htg-y0fsf-giea7r-p5mbge.json','wl5yk-38c0g','jpg8y9-zbzt7o-jpvuhf-fwnjvr','w6l6n-cbvl6s',NULL),('c3i1t-ay2k4s-esahyn-023sc4','br9d6s-wh46i','c3i1t-ay2k4s-esahyn-023sc4.json','fqtktr-1lq5u','8sc5d7-7p5f9e-cb2zii-ahe5i','kqpvys-hpzkdt',NULL),('msq6d-lfrm4o-ljkv1-cool79','br9d6s-wh46i','msq6d-lfrm4o-ljkv1-cool79.json','fqtktr-1lq5u','8sc5d7-7p5f9e-cb2zii-ahe5i','kqpvys-hpzkdt',NULL),('krkyz9-lmbb1f-yxn2e-t5q8a','br9d6s-wh46i','krkyz9-lmbb1f-yxn2e-t5q8a.json','fqtktr-1lq5u','8sc5d7-7p5f9e-cb2zii-ahe5i','kqpvys-hpzkdt',NULL),('li8wiv-0pzz7vh-kwds5-9oqawu','v8i73-r8oai','li8wiv-0pzz7vh-kwds5-9oqawu.json','fqtktr-1lq5u','8sc5d7-7p5f9e-cb2zii-ahe5i','ypay2t-7uxsd',NULL),('65vst-tqms-h5kg6-rfabwg','774318-730z8m','65vst-tqms-h5kg6-rfabwg.json','fqtktr-1lq5u','8sc5d7-7p5f9e-cb2zii-ahe5i','axg8t2-oroeja',NULL),('msqy4g-icp0zt-nrwi6q-ypmct','774318-730z8m','msqy4g-icp0zt-nrwi6q-ypmct.json','fqtktr-1lq5u','8sc5d7-7p5f9e-cb2zii-ahe5i','axg8t2-oroeja',NULL);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions_types`
--

DROP TABLE IF EXISTS `questions_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions_types` (
  `questions_type_id` varchar(255) NOT NULL DEFAULT '',
  `questions_type_text` varchar(255) DEFAULT NULL,
  `questions_type_sort` int(11) DEFAULT NULL,
  PRIMARY KEY (`questions_type_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions_types`
--

LOCK TABLES `questions_types` WRITE;
/*!40000 ALTER TABLE `questions_types` DISABLE KEYS */;
INSERT INTO `questions_types` VALUES ('774318-730z8m','简答题',1),('br9d6s-wh46i','代码阅读题',2),('fwf0t-wla1q','代码补全',3),('n66k4n-i9zpen','修改bug',4),('v8i73-r8oai','手写代码',5);
/*!40000 ALTER TABLE `questions_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subject` (
  `subject_id` varchar(255) NOT NULL DEFAULT '',
  `subject_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`subject_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject`
--

LOCK TABLES `subject` WRITE;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` VALUES ('fqtktr-1lq5u','javaScript上'),('wl5yk-38c0g','javaScript下'),('8tl7os-r49tld','模块化开发'),('1ux00o6-2xbj5i','移动端开发'),('4pu32-vs796l','node基础'),('1psw2b-cy7o07','组件化开发(vue)'),('fyu3ln-azjkie','渐进式开发(react)'),('94sjh6-lnlxe','项目实战'),('k1gvd4-8lrx8f','javaScript高级'),('u3ix15-dd6md','node高级');
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` varchar(255) NOT NULL DEFAULT '',
  `user_name` varchar(255) DEFAULT NULL,
  `user_pwd` varchar(255) DEFAULT NULL,
  `identity_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('kqpvys-hpzkdt','liuyu','eb9d5a1d7b1ddeb95b63ca05e371460e0b7aa75a6f64bc0a1c6398da61cd1511','uf81yn-hv8uvv'),('axg8t2-oroeja','w916peach','00293b6c135e0b2476907a02f8fcd1c407bb2fce4d9e359ca1a805fdea590386','63no9p-8y0k4'),('qlgjry-9rwvb','yihang','5b46a84eb0eec0a3eea2d5977dca7269f18265dabf76182204291f7f2f93cbc3','uf81yn-hv8uvv'),('ypay2t-7uxsd','dingshaoshan','cc41634ea8c8acf9dea97bc0808be0091030f44edbf6192d5890c9c3e051ee78','uf81yn-hv8uvv'),('w6l6n-cbvl6s','chenmanjie','aaf2aa719b9f34058f47804f896a521c43424483b575546ffb306526ba107b92','uf81yn-hv8uvv'),('bsz88g-071r5','renyuliang','32042b23ee00e9666c562a242308186d9270d4b4b5394578d06e66c33724377f','uf81yn-hv8uvv'),('9a22l-wj1kmf','cuidongcai','fd72764421b36fd9aa09787937327ab448699b7171ccab5006a7402b02a21579','zi0gu7-v7dy08');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `view_authority`
--

DROP TABLE IF EXISTS `view_authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `view_authority` (
  `view_authority_id` varchar(255) NOT NULL DEFAULT '',
  `view_authority_text` varchar(255) DEFAULT NULL,
  `view_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`view_authority_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `view_authority`
--

LOCK TABLES `view_authority` WRITE;
/*!40000 ALTER TABLE `view_authority` DISABLE KEYS */;
INSERT INTO `view_authority` VALUES ('r50r9t-1p1kbm','登录','login'),('8olznh-943zt','主界面','main'),('4pvvb3-h5kzg','添加试题','main-addQuestions'),('vnpojq-tisgu','试题分类','main-questionsType'),('xpz8cf-xoyd7n','查看试题','main-watchQuestions'),('qcrhh-k0tvh','添加用户','main-addUser'),('o4xsrn-5heg27','用户展示','main-showUser'),('1orauc-piu6gm','添加考试','main-addExam'),('43t70e-pk8ylk','添加菜单','main-menu');
/*!40000 ALTER TABLE `view_authority` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-21 14:25:00
