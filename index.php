<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<title>Mirek Nguyen</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="CSS.css">
<script src="Javascript.js"></script>

<body>
   <div style="background-color: floralwhite; width: 15%; float: left; height: 5vw; line-height: 5vw; text-align: center;">MIREKNG</div>
   <div class="navigationBar">
      <div onclick="navigateTo('#projects')">Projects</div>
      <div onclick="navigateTo('#projects')">About me</div>
      <div onclick="navigateTo('#projects')" style="border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-right-style: none;">Contact</div>
   </div>
   <div class='center' id="projects" style="transition: width 2s;">
      <div class="card" onclick="navigateTo('koreanist')"><a href="koreanist">Koreanist</a></div>
      <div class="card" onclick="navigateTo('kalendar')"><a href="kalendar">Advent Calendar</a></div>
      <div class="card" onclick="navigateTo('quiz')"><a href="quiz">Quiz</a></div>
      <div class="card" onclick="navigateTo('vietnamist')"><a href="vietnamist">Vietnamist</a></div>
      <div class="card" onclick="navigateTo('food')"><a href="food">Food</a></div>
   </div>
</body>

</html>
