var rows = 3;
var columns = 3;

var currTile;
var otherTile; //blank title

var turns = 0;

//var imgOrder = ["1","2","3","4","5","6","7","8","9"];
var imgOrder = ["4","2","8","5","1","6","7","9","3"];

window.onload = function() 
{
  for(let r=0; r<rows; r++)
  {
    for(let c=0; c < columns; c++)
    {
      //<img id="0-0" src="1.jpg">
      let tile = document.createElement("img");
      tile.id = r.toString() + "-" + c.toString();
      tile.src = imgOrder.shift() + ".jpg";

      document.getElementById("board").append(tile);
    }
  }
}

