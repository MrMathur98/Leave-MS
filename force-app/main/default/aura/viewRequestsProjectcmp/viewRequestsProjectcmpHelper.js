({
	getAllLeaveRequest : function(component,event,helper) {
        var action = component.get("c.getAllRequest");
        var data = component.get("v.reg");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                console.log('Success in fetching');
                var result=JSON.parse(response.getReturnValue());
                data = result;
                component.set("v.reg", data);
            }
            else{
                alert(state);
            }
        });
     $A.enqueueAction(action);
		
	}
})