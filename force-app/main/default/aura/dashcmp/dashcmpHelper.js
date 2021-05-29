({
    NewLeaveName : function(component,event) {
        //console.log(registerhel);
        var action=component.get("c.NewLeaveEntry");
        var LMname=component.get("v.selectedName");
        var nleaves=component.get("v.nleaves");
        var leaveStatus=component.find("leaveStatus").get("v.value");
        var sDate=component.get("v.sDate");
        var eDate=component.get("v.eDate");
        var sTime=component.get("v.sTime");
        var eTime=component.get("v.eTime");
        var nHours=component.get("v.nHours");
        var name=component.get("v.name");
        var LM_user=component.get("v.selectedId");
        var email=component.get("v.email");
        var Attendance=component.find("Attendance").get("v.value");
        if(sDate != ''){
        if(leaveStatus != 'Closed'){
        if(eDate != ''){
            var data={"Name":LMname,"Number_of_leaves__c":nleaves,"Leave_Status__c":leaveStatus,"Starting_date__c":sDate,"Ending_date__c":eDate,"Leave_management_user__c":LM_user,"Marked_by_Email__c":email,"User_attendance__c":Attendance};   
        }
        else if(sTime != ''){
            var data={"Name":LMname,"Number_of_leaves__c":nleaves,"Leave_Status__c":leaveStatus,"Starting_date__c":sDate,"Starting_Time__c":sTime,"Ending_Time__c":eTime,"No_of_hours__c":nHours,"Leave_management_user__c":LM_user,"Marked_by_Email__c":email,"User_attendance__c":Attendance};
        }
        else{
            var data={"Name":LMname,"Number_of_leaves__c":nleaves,"Leave_Status__c":leaveStatus,"Starting_date__c":sDate,"Leave_management_user__c":LM_user,"Marked_by_Email__c":email,"User_attendance__c":Attendance};   
            }
        }
        else {
            alert(" Marking Attendance ....");
            var data={"Name":LMname,"Leave_Status__c":leaveStatus,"Starting_date__c":sDate,"Leave_management_user__c":LM_user,"Marked_by_Email__c":email,"User_attendance__c":Attendance};   
        }
        }
        else {
            alert("Enter a valid date");
        }
       
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
               		
                window.localStorage.setItem('ID',data[0].Id);
                alert(state);
            }else{
                alert(state);
            }
        })
        $A.enqueueAction(action);
    }
})