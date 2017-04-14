Meteor.startup(function () {
  // create a starter doc
  if (!Documents.findOne()){// no documents yet!
      Documents.insert({title:"New Document"});
  }
  });
  // publish a list of documents the user can se
  Meteor.publish("documents", function(){
  return Documents.find({
   $or:[
    {isPrivate:false}, 
    {owner:this.userId}
    ] 
  });
})  
// public sets of editing users
Meteor.publish("editingUsers", function(){
  return EditingUsers.find();
});
