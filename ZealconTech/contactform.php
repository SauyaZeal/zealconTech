<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width:100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #01B2EC;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #C07000;
}

.szcontainer {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;width: 30%;margin-left: 35%;
border:1px solid #0060DB30;border-radius:10px;box-shadow: 2px 3px 10px 5px #0060DB60;
}



/* Create four equal columns that floats next to each other */
.szcol {
  float: left;
  width: 50%;
  padding: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.circleu {
  width:20px;
  height:20px;
  border: 1px solid #ff3bc0;
  border-radius:10px;
  position : absolute;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 900px) {
  .szcol  {
    width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .szcol  {
    width: 100%;
  }
}
@media screen and (max-width: 800px) {
  .szcontainer   {
    width: 90%;
    margin-left: 20px;
    padding: 20px;
  }
}

</style>
</head>
<body>

<h2 style="text-align:center;">Contact Us</h2>

<div class="szcontainer">
  <form action="/action_page.php">
    <label for="name">Name</label>
    <input type="text" id="szname" name="name" placeholder="Your name..">

<div class="row">
  <div class="szcol">
  <label for="phone">Phone</label>
    <input type="text" id="szphone" name="lastname" placeholder="Your last name..">
  </div>
  
  <div class="szcol">
   <label for="email">Email</label>
    <input type="text" id="szemail" name="lastname" placeholder="Your last name..">
  </div>
  
</div>
<label for="subject">Subject</label>
    <select id="szsubject" name="subject">
      <option value="select">Select a service</option>
      <option value="website">Web design & development</option>
      <option value="ecommerce">Ecommerce solutons</option>
      <option value="socialmedia">Social media marketing</option>
      <option value="graphics">Graphics Design</option>
      <option value="SEO">SEO</option>
    </select>
    <label for="subject">Comment</label>
    <textarea id="szcomment" name="Comment" placeholder="Write something.." style="height:150px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>

<script type="text/javascript">
document.onmousemove = animateCircles;

    var colors = ['#ccc','#6cf','#eba13a'];

    function animateCircles (event) {
      let circle = document.createElement("div");
      circle.setAttribute("class", "circle");
      document.body.appendChild(circle);

      circle.style.left = event.clientX + 'px';
      circle.style.top = event.clientY + 'px';

      var color = colors[Math.floor(Math.random() * colors.length)];
      circle.style.borderColor = color;

      circle.style.transition = "all 0.5s linear 0s";

      circle.style.left = circle.offsetLeft - 20 + 'px';
      circle.style.top = circle.offsetTop - 20 + 'px';

      circle.style.width = "50px";
      circle.style.height = "50px";
      circle.style.borderWidth = "5px";
      circle.style.borderRadius = "20px";
      circle.style.opacity = 0;
      
      setTimeout(function() {
      circle.remove();
      }, 500);
    }
</script>


</body>
</html>
