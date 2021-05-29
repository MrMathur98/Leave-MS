({
   getRequestList : function(component, event, helper) {
       console.log('Values from Leave MS');
       //helper.getAllLeaveRequest(component,event);
      var interval = window.setInterval(function(){helper.getAllLeaveRequest(component,event);}, 1000);
      component.set("v.intervalID",interval);
       
    },
})