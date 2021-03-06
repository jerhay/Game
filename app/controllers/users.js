
var Users = function()
{
   this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

   this.index = function( req, resp, params )
   {
      var self = this;
      geddy.db.LoadAllUsers( 
         function( usersDB )
         {
            self.respond( { users: usersDB } );
         }
      );
   };

   this.add = function( req, resp, params )
   {
      this.respond( { params: params } );
   };

   this.create = function( req, resp, params )
   {
      // Save the resource, then display index page
      var user = geddy.model.User.create( { id: params.name, name: params.name } );
      geddy.model.User.save( user );
      this.redirect( { controller: this.name } );
   };

   this.show = function( req, resp, params )
   {
      var self = this;
      geddy.log.debug( "params: " + JSON.stringify( params ) );
      geddy.model.User.load( params.id, null, function( game )
      {
         self.respond( { user: game } );
      } );
   };

   this.edit = function( req, resp, params )
   {
      this.respond( { params: params } );
   };

   this.update = function( req, resp, params )
   {
      // Save the resource, then display the item page
      this.redirect( { controller: this.name, id: params.id } );
   };

   this.remove = function( req, resp, params )
   {
      this.respond( { params: params } );
   };

};

exports.Users = Users;

