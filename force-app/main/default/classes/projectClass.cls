public class projectClass { 
@AuraEnabled
    public static String registerUser(String data){
        user__c user = (user__c)System.JSON.deserialize(data, user__c.class);
        List<user__c> data1=projectDaoClass.RegisterUser(user);
        return JSON.serialize(data1);
    }
@AuraEnabled
    public static String NewLeaveEntry(String data){
        Leave_MS__c user = (Leave_MS__c)System.JSON.deserialize(data, Leave_MS__c.class);
        List<Leave_MS__c> data1=projectDaoClass.NewLeave(user);
        return JSON.serialize(data1);
    }
@AuraEnabled
    public static String loginUser(String data){
        user__c user = (user__c)System.JSON.deserialize(data, user__c.class);
        List<user__c> data1=projectDaoClass.LoginUser(user);
        Message message;
        if(data1.size()>0){
            user__c user1=data1.get(0);
        
        if(user1.password__c==user.password__c)
           
           {
               message = new Message(user1.Id, '200');
           }
           else
           {
               message = new Message('Password Mismatch','402');
           }
    }else{
            message= new Message('Email Not Found','401');
           }
        return JSON.serialize(message);
    }
   
    public class Message{
        String msg=null;
        String key=null;
        Message(String key, String msg){
            this.key = key;
            this.msg = msg;
        }
    }
@AuraEnabled
    public static String getAllRequest(){
        List<Leave_MS__c> data1=projectDaoClass.getAllrequest();
        return JSON.serialize(data1);
    }
@AuraEnabled
    public static String getUserProfile(String data){
        user__c user = (user__c)System.JSON.deserialize(data, user__c.class);
        List<user__c> data2=projectDaoClass.getUserProfile(user);
        return JSON.serialize(data2);
    }
   
   
    
   
}