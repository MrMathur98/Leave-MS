({
	backlogin: function(component, event, helper) {
      component.set('v.showreg',false);
      component.set('v.showlog',true);
		},
    
    submit: function(component,event,helper){
        console.log("Submitted Successfully");
        const name1=component.find("name1");
        const fname2=component.find("fname2");
        const email3=component.find("email3");
        const mob4=component.find("mob4");
        const password5=component.find("password5");
        
        if(password5.reportValidity()){
            if(mob4.reportValidity()) {
                if(email3.reportValidity()){
                    if(fname2.reportValidity()){
                        if(name1.reportValidity()){
                        helper.register123(component,event);
                        }
                        else{
                            alert("Kindly! Enter valid Name");
                        }
                    }
                    else{
                        alert("Kindly! Enter valid Father's Name");
                    }
                }
                else{
                    alert("Kindly! Enter valid email");
                }
            }
            else{
            alert("Kindly! Enter valid mobile number");
            }
        }
        else{
        alert("Password must have these : Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character")
        }
        
    },
})