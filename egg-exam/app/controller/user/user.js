/*
 * @Author: tao 
 * @Date: 2019-02-03 18:33:13 
 * @Last Modified by: tao
 * @Last Modified time: 2019-02-17 16:49:49
 * @Func 用户以及用户的权限相关的控制器
 */
const Controller = require('egg').Controller;
class UserController extends Controller{
    /**
     * 创建用户
     * /user
     * POST
     * {user_name,user_pwd,identity_id(非必须)}
     */
    async create(){
        try{
            this.ctx.validate({user_name:'username',user_pwd:'userpwd'});
        }catch(err){
            this.ctx.body = {code:0,msg:'参数有误',err}
            return;
        }
        let {user_pwd} = this.ctx.request.body;
        this.ctx.request.body.user_pwd = this.ctx.helper.sha256(user_pwd);
        let result = await this.ctx.service.user.user.createUser(this.ctx.request.body);
        if(result === 'repeat'){
            this.ctx.body = {code:0,msg:'用户名重复'}
        }else if(result.row === 1){
            this.ctx.body = {code:1,msg:'用户添加成功',user_id:result.user_id}
        }else if(result.row === 0){
            this.ctx.body = {code:0,msg:'用户添加失败，可能是数据库原因'}
        }
    }
    /**
     * 更新用户，权限，身份
     * /user/user   {user_id,user_name/user_pwd/identity_id}
     * /user/identity
     * /user/apiAuthority
     * /user/viewAuthority
     * PUT
     */
    async update(){
        let param = this.ctx.params.id;
        let request = this.ctx.request;
        if(param === 'user'){// 更新user
            let {user_id} = request.body;
            let willUpdated = {...request.body}
            if(willUpdated.user_pwd){
                willUpdated.user_pwd = this.ctx.helper.sha256(willUpdated.user_pwd);
            }
            delete willUpdated.user_id;
            let result = await this.ctx.service.user.user.updateUser(user_id,willUpdated);
            if(result === 'repeat'){
                this.ctx.body = {msg:'用户名重复',code:0}
            }else if(result === 1){
                this.ctx.body = {msg:'更新成功',code:1}
            }else if(result === 0){
                this.ctx.body = {msg:'更新失败，可能是数据库原因',code:0}
            }
        }
    }
    /**
     * 添加权限、添加身份
     * /user/identity/edit  添加身份
     * {identity_text}
     * /user/authorityView/edit 添加视图权限
     * {view_authority_text,view_id}
     * /user/authorityApi/eidt 添加接口权限 
     * {api_authority_text,api_authority_url,api_authority_mehtod}
     * GET
     * 
     */
    async edit(){
        let {request} = this.ctx;
        let param = this.ctx.params.id;
        if(param === 'identity'){ // 添加身份
            this.ctx.validate({identity_text:'string'},request.query);
            let {identity_text} = request.query;
            if(identity_text === 'undefined'){
                this.ctx.body = {code:0,msg:'名称不能为空'}
                return;
            }
            let result = await this.ctx.service.user.user.addIdentity(identity_text);
            if(result === 'repeat'){
                this.ctx.body = {code:0,msg:'身份名重复'}
            }else if(result.row === 1){
                this.ctx.body = {code:1,msg:'身份添加成功',identity_id:result.identity_id}
            }else if(result.row === 0){
                this.ctx.body = {code:0,msg:'身份添加失败，可能是数据库原因'}
            }
        }else if(param === 'authorityView'){// 添加视图权限
            this.ctx.validate({view_authority_text:'string',view_id:'string'},request.query);
            let result = await this.ctx.service.user.user.addAuthorityView(request.query);
            if(result === 'repeat'){
                this.ctx.body = {code:0,msg:'视图权限重复'}
            }else if(result.row === 1){
                this.ctx.body = {code:1,msg:'添加视图权限成功',view_authority_id:result.view_authority_id}
            }else if(result.row === 0){
                this.ctx.body = {code:0,msg:'视图权限添加失败，可能是数据库原因'}
            }
        }else if(param === 'authorityApi'){// 添加接口权限
            this.ctx.validate({api_authority_text:'string',api_authority_url:'string',api_authority_method:'string'},request.query);
            let result = await this.ctx.service.user.user.addAuthorityApi(request.query);
            if(result === 'repeat'){
                this.ctx.body = {code:0,msg:'api权限重复'}
            }else if(result.row === 1){
                this.ctx.body = {code:1,msg:'添加api权限成功',api_authority_id:result.api_authority_id}
            }else if(result.row === 0){
                this.ctx.body = {code:0,msg:'api权限添加失败，可能是数据库原因'}
            }
        }
    }
    /**
     * 为身份设定api接口权限
     * /user/setIdentityApi
     * POST
     * {identity_id,api_authority_id}
     */
    async setIdentityApi(){
        let result = await this.service.user.user.addIdentityApi(this.ctx.request.body);
        if(result === 'repeat'){
            this.ctx.body = {msg:'身份权限重复',code:0}
        }else if(result === 1){
            this.ctx.body = {msg:'设定成功',code:1}
        }else if(result === 0){
            this.ctx.body = {msg:'设定失败,可能是数据库原因',code:0}
        }
    }
    /**
     * 为身份设定视图权限
     * /user/setIdentityView
     * POST
     * {identity_id,view_authority_id}
     */
    async setIdentityView(){
        let result = await this.service.user.user.addIdentityView(this.ctx.request.body);
        if(result === 'repeat'){
            this.ctx.body = {msg:'身份权限重复',code:0}
        }else if(result === 1){
            this.ctx.body = {msg:'设定成功',code:1}
        }else if(result === 0){
            this.ctx.body = {msg:'设定失败,可能是数据库原因',code:0}
        }
    }
    /**
     * 展示数据(用户，身份，api权限)
     * /user/user
     * /user/identity
     * /user/api_authority
     * /user/identity_api_authority_relation
     * /user/identity_view_authority_relation
     * /user/view_authority 获取视图权限
     * /user/userInfo 获取用户信息
     * GET
     */
    async show(){
        let param = this.ctx.params.id;
        let result = await this.ctx.service.user.user.show(param);
        this.ctx.body = {msg:'数据获取成功',code:1,data:result}
    }
    /**
     * 根据用户id，返回该用户的视图权限
     * /user/new
     * GET
     * {user_id}
     */
    async new(){
        this.ctx.validate({user_id:'string'},this.ctx.request.query);
        let result = await this.ctx.service.user.user.isUserViewAuthority(this.ctx.request.query.user_id);
        this.ctx.body = {msg:'获取数据成功',code:1,data:result}

    }
}
module.exports = UserController;
