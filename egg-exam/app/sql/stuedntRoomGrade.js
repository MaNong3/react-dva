/*
 * @Author: tao 
 * @Date: 2019-03-06 16:30:04 
 * @Last Modified by: tao
 * @Last Modified time: 2019-03-06 22:57:31
 * @func 学生、教室、班级的sql语句
 */

 const ALL_STUDENT_SQL = `
    select 
        student.student_id as student_id,
        student.student_name as student_name,
        room.room_id as room_id,
        room.room_text as room_text,
        grade.grade_id as grade_id,
        grade.grade_name as grade_name
    from
        student,
        room,
        grade
    where
        student.grade_id=grade.grade_id 
        And
        grade.room_id=room.room_id
 `
 exports.ALL_STUDENT_SQL = ALL_STUDENT_SQL;