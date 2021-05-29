public class projectDaoClass {
   public static List<user__c> LoginUser(user__c data){
       
        List<user__c> result=[select Id,password__c from user__c WHERE email__c=:data.email__c];
        return result;
    }
   
    public static List<user__c> RegisterUser(user__c data){
        insert data;
       
         List<user__c> result=[select Id,Name from user__c WHERE email__c=:data.email__c];
        return result;
    }
   
    public static List<Leave_MS__c> getAllrequest(){
       
         List<Leave_MS__c> result=[select Id,Name,User_attendance__c,Marked_By_Email__c,Starting_date__c,Ending_date__c,Starting_Time__c,Ending_Time__c,Leave_Status__c from Leave_MS__c];
        return result;
    }
    public static List<user__c> getUserProfile(user__c data){
       
       
          List<user__c> result=[select Id,Name,Name__c,email__c,Fname__c,MobileNo__c from user__c WHERE Id=:data.Id];
        return result;
    }
    public static List<Leave_MS__c> NewLeave(Leave_MS__c data){
        insert data;
       
         List<Leave_MS__c> result=[select Id,Name from Leave_MS__c WHERE Marked_By_Email__c=:data.Marked_By_Email__c];
        return result;
    }
}