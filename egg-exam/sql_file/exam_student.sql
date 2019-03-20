-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-03-11 10:02:26
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
-- 表的结构 `exam_student`
--

CREATE TABLE `exam_student` (
  `exam_student_id` varchar(32) NOT NULL,
  `exam_exam_id` varchar(32) NOT NULL,
  `answer_json_path` varchar(255) NOT NULL,
  `student_id` varchar(32) NOT NULL,
  `grade_id` varchar(32) NOT NULL,
  `score` int(11) NOT NULL DEFAULT '0',
  `start_time` varchar(16) NOT NULL,
  `end_time` varchar(16) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '0表示未阅，1表示已阅'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
