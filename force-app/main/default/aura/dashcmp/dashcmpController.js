({	statusUpdate :function(component,event,helper){
    var leaveCheck=component.find("leaveStatus").get("v.value");
    if (leaveCheck == 'Closed'){
        component.set("v.leaveStatus",leaveCheck);
    }
    else {
        component.set("v.leaveStatus",'Open');
	}
   },
    
    
    
    typeUpdate :function(component,event,helper){
    component.set("v.sDate",'');
    component.set("v.eDate",'');
    component.set("v.nleaves",'');
    component.set("v.sTime",'');
    component.set("v.eTime",'');
    component.set("v.nHours",'');
	},
  timeUpdate : function(component,event,helper){
      var startTimeFieldValue = component.get("v.sTime");
      var endTimeFieldValue = component.get("v.eTime");
      if(startTimeFieldValue != ''){
      if(endTimeFieldValue > startTimeFieldValue){
      let sTM = 0;
       const [shours, sminutes,sseconds] = startTimeFieldValue.split(':');
        sTM += shours * 3600000;
        sTM += sminutes * 60000;
      let eTM = 0;
       const [ehours, eminutes,eseconds] = endTimeFieldValue.split(':');
        eTM += ehours * 3600000;
        eTM += eminutes * 60000;
      
      console.log(sTM);
      var timeDiff = (eTM - sTM) / 3600000;
      	component.set("v.nHours",timeDiff);
          component.set("v.sTM",sTM);
          component.set("v.eTM",eTM);
			          
      
      }
      else {
          alert("Start time cannot be later than end time");
          component.set("v.sTime",'');
          component.set("v.eTime",'');
          component.set("v.nHours",'');
      }
      }
      else {
          alert("Kindly, Enter Start Time first");
          component.set("v.eTime",'');
      }
      
  },
    dateUpdate : function(component, event, helper) {

        var startDateField = component.find("StartDate");
        var startDateFieldValue = startDateField.get("v.value");
        var leaveType=component.get("v.leaveType");
        if(leaveType == 'type3'){
        var endDateField = component.find("EndDate");
        var endDateFieldValue = endDateField.get("v.value");
        console.log("EndDateValue", endDateFieldValue);
        var days;
        

          if(startDateFieldValue && endDateFieldValue )
          {
            if(startDateFieldValue>endDateFieldValue)
            {
              component.set("v.dateValidationError" , true);
             }

        else{
            var startDate = new Date(startDateFieldValue), 
    			endDate = new Date(endDateFieldValue),
    			days = ((endDate-startDate)/8.64e7)+1;
						component.set("v.nleaves", days);
            component.set("v.dateValidationError" , false);



        }
              if(days == '1'){
                  component.set("v.leaveType",'type2');
              }
        }


     }
        else{
            component.set("v.nleaves",'1');
            component.set("v.edate",null);
        }
    },
	submitNewLeave : function(component, event, helper) {
        if("v.leaveStatus" != "Closed"){
            if("v.sTime" != ''){    
        		var sTM = component.get("v.sTM");
        		var Startmilliseconds = sTM + 19800000;
          		var Startsecs = (Startmilliseconds / 1000) % 60;
				var Startmins = ((Startmilliseconds / (1000 * 60)) % 60);
				var Starthours = ((Startmilliseconds / (1000 * 60 * 60)) % 24);
          		var StartHours = parseInt(Starthours);
        		var STA = StartHours+':'+Startmins+':'+Startsecs;
          			console.log(STA);
          			component.set("v.sTime",STA);
        
                var eTM = component.get("v.eTM");
                var Endmilliseconds = eTM + 19800000;
                var Endsecs = (Endmilliseconds / 1000) % 60;
                var Endmins = ((Endmilliseconds / (1000 * 60)) % 60);
                var Endhours = ((Endmilliseconds / (1000 * 60 * 60)) % 24);
                var EndHours = parseInt(Endhours);
                var ETA = EndHours+':'+Endmins+':'+Endsecs;
                 	console.log(ETA);
                  	component.set("v.eTime",ETA);

            }
        console.log('Submitted leave');
        helper.NewLeaveName(component,event);
        component.set("v.selectedName",'');
        component.set("v.nleaves",'');
        component.set("v.sDate",'');
        component.set("v.eDate",'');
        component.set("v.selectedId",'');
        component.set("v.sTabId", '2' );
        component.set("v.sTime",'');
        component.set("v.eTime",'');
        }
        else {
            alert("You are marking your attendance please put Leave Status to Closed");
            component.set("v.nleaves",'');
       		component.set("v.sDate",'');
        	component.set("v.eDate",'');
        }
        
        
		
	},
    
    logout : function(component,event,helper){
    	console.log('Logout Successfull');
       				component.set("v.showreg",false);
                 	component.set("v.showlog",true);
               		component.set("v.showhome",false);
        			component.set("v.email",'');
        
},
   
})