({
	
   loginUserHelper : function(component,event) {
        console.log(2);
        var action=component.get("c.loginUser");
		var email=component.get("v.email");
        var password=component.get("v.password");
        let data={"email__c":email,"password__c":password};
        //console.log(data);
        action.setParams({
            'data': JSON.stringify(data)
        });
        action.setCallback(this,function(response){
            var state=response.getState();
            if(component.isValid() && state==="SUCCESS"){
                var result=JSON.parse(response.getReturnValue());
                console.log(result);
                if(result.msg=='200'){
                    alert("Login Succesfull")
                    window.localStorage.setItem('ID',result.key);
                   var id=window.localStorage.getItem('ID');
                    component.set("v.showreg",false);
                    component.set("v.showlog",false);
                    component.set("v.showhome",true);
                }else{
                    alert(result.key);
                }
               
            }else{
                alert(state);
            }
        });
        $A.enqueueAction(action);        
}
})