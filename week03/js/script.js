$(document).ready(function(){
  console.log('hi');

  $('#submit').click(function(i){
    var searchTerm;
    search(searchTerm);
   });


});

function search(searchTerm){

var searchTerm = ['dog','cat','elephant','chocolate','snake','love'];
   console.log(parseInt(Math.random()*6));
 $.ajax({
   url:'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ searchTerm[parseInt(Math.random()*6)] +'&format=json&callback=?',
   dataType:'jsonp',
   success:function(data){
   console.dir(data);
   $('#output').html();
            for(var i=0;i<data[1].length;i++){
              $('#output').prepend(
                '<li><a href=' + data[3][i] + '>'
                 + data[2][i]+ data[1][i] + 
                 '</a></lli>');
            }
        }
});



}
