export default{
    install(app,options){
        app.config.globalProperties.$message = ()=>{
            console.log('plugin');
        }
        app.provide('i18n', options)
    }
}