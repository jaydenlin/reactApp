/**
 * @jsx React.DOM
 */
var data = [
  {author: "Pete Hunt", text: "This is one comment haha"},
  {author: "Jordan Walke", text: "This is *another* comment haha"}
]; 
 
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <CommentList data={data}/>
        <CommentForm />
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('content')
  
);