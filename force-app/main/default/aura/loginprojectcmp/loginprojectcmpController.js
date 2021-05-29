({
	login : function(component, event, helper) {
		console.log(1);      
        helper.loginUserHelper(component,event);
        
	},
    register : function(component,event,helper){
        console.log("hi")
        component.set('v.showreg',true);
        component.set('v.showlog',false);
   },
    
})