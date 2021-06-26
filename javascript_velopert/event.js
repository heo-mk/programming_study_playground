<div onclick="checkTarget()">
  <span>test</span>
</div>

function checkTarget(event) {
  var ele = event.currentTarget;
  console.log(ele);
}