({
     viewprofile: function (cmp, event) {
         console.log(2020)
          var action=cmp.get("c.getUserProfile");
         var data={"Id":window.localStorage.getItem("ID")};
         action.setParams({
             "data":JSON.stringify(data)
         });
        action.setCallback(this,function(response){
            var state=response.getState();
            if(cmp.isValid() && state==="SUCCESS"){
                var result=JSON.parse(response.getReturnValue());  
                console.log(result)
                cmp.set('v.arr',result[0])
            }else{
                alert(result.key);
            }
        });
        $A.enqueueAction(action);
    },
});