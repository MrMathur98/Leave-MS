({
    register123 : function(component,event) {
        //console.log(registerhel);
        var action=component.get("c.registerUser");
        var name=component.get("v.name");
        var Fname=component.get("v.Fname");
        var email=component.get("v.email");
        var password=component.get("v.password");
        var mobile=component.get("v.Mobile");
        var data={"Name__c":name,"Fname__c":Fname,"email__c":email,"password__c":password,"MobileNo__c":mobile};
        action.setParams({
           
            'data': JSON.stringify(data)
        });
        console.log(data);
        console.log(JSON.stringify(data))
        action.setCallback(this,function(response){
            var state=response.getState();
            if(component.isValid() && state==="SUCCESS"){
                var data=JSON.parse(response.getReturnValue());
                console.log(data);
                component.set("v.showreg",false);
                component.set("v.showlog",true);
                component.set("v.showhome",false);
                window.localStorage.setItem('ID',data[0].Id);
                alert(state);
            }else{
                alert(state);
            }
        })
        $A.enqueueAction(action);
    }
})