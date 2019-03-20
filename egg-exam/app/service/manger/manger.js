/*
 * @Author: tao 
 * @Date: 2019-03-06 11:38:51 
 * @Last Modified by: tao
 * @Last Modified time: 2019-03-06 18:20:19
 * @func 学生、班级、教室管理的业务逻辑
 */

 const Service = require('egg').Service;
 const {ALL_STUDENT_SQL} = require('../../sql/stuedntRoomGrade');
 class MangerService extends Service{
     // 查询学生
     async findStudent(){
        let result = await this.app.mysql.query(ALL_STUDENT_SQL);
        return result;
     }
     // 更新学生
     async updateStudent(body){
        let result = await this.app.mysql.update('student',body,{
            where:{student_id:body.student_id}
        });
        return result;
     }
     // 添加学生
     async createStudent(body){
        let result = await this.app.mysql.insert('student',body);
        return result;
     }
     // 查询教室
     async findRoom(){
        let result = await this.app.mysql.select('room');
        return result;
     }
     // 添加教室
    async createRoom(body){
        let result = await this.app.mysql.insert('room',body);
        return result;
    }
    // 更新教室
    async updateRoom(body){
        let result = await this.app.mysql.update('room',body,{
            where:{room_id:body.room_id}
        });
        return result;
    }
    // 查询班级
    async findGrade(){
        let result = await this.app.mysql.select('grade');
        return result;
    }
    // 添加班级
    async createGrade(body){
        let result = this.app.mysql.insert('grade',body)
        return result;
    }
    // 更新班级
    async updateGrade(body){
        let result = this.app.mysql.update('grade',body,{
            where:{grade_id:body.grade_id}
        });
        return result;
    }
    // 删除班级、教室、学生
    async delGradeRoomStudent(tableName,key,value){
        let result = this.app.mysql.delete(tableName,{[key]:value});
        return result;
    }
    // 查询 班级、教室、学生
    async findGradeRoomStudent(){
        
    }
    
 }
 module.exports = MangerService;
