-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-03-12 16:36:38
-- 服务器版本： 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8*/;

--
-- Database: `exam`
--

-- --------------------------------------------------------

--
-- 表的结构 `exam_exam`
--

CREATE TABLE `exam_exam` (
  `exam_exam_id` varchar(32) NOT NULL,
  `subject_id` varchar(32) NOT NULL,
  `title` varchar(255) NOT NULL,
  `question_ids` varchar(255) NOT NULL,
  `user_id` varchar(32) NOT NULL,
  `status` int(11) DEFAULT '-1' COMMENT '-1表示未确认，0表示未开始，1表示正在进行，2表示已完成',
  `description` varchar(100) DEFAULT NULL COMMENT '试卷描述',
  `exam_type` varchar(32) NOT NULL COMMENT '考试类型',
  `number` int(11) NOT NULL,
  `start_time` varchar(20) NOT NULL,
  `end_time` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `exam_exam`
--

INSERT INTO `exam_exam` (`exam_exam_id`, `subject_id`, `title`, `question_ids`, `user_id`, `status`, `description`, `exam_type`, `number`, `start_time`, `end_time`) VALUES
('pxpsxe-qy10fa', 'fqtktr-1lq5u', '移动端开发第一周月考题', 'msqy4g-icp0zt-nrwi6q-ypmct,skwfv-oni3vi-sv83x-mhnqcl,c3i1t-ay2k4s-esahyn-023sc4', 'w6l6n-cbvl6s', -1, NULL, '8sc5d7-7p5f9e-cb2zii-ahe5i', 3, '1551863357534', '1551863357534');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
