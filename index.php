<!DOCTYPE html>
<html lang="en" ontouchmove>
<meta charset="UTF-8">
<title>Mirek Nguyen</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="CSS.css">
<script src="Javascript.js"></script>

<body tabIndex=0>
   <div class="navigationBar">
      <div style="width: 25%;">MIREKNG</div>
      <div onclick="navigateTo('#projects')">Projects</div>
      <div onclick="navigateTo('#projects')">About me</div>
      <div onclick="navigateTo('#projects')" style="border-right-style: none;">Contact</div>
   </div>
   <div class='center' id="projects" style="transition: all 150ms; padding-top: 25px;">
      <div class="projectsContainer">
         <div class="card" onclick="navigateTo('food')">
            <div class="cardInside">
               <div class="titleProject">Food</div>
               <div class="viewProject"><span>View project</span></div>
            </div>
         </div>
         <div class="card" onclick="navigateTo('vietnamist')">
            <div class="cardInside">
               <div class="titleProject">Vietnamist</div>
               <div class="viewProject"><span>View project</span></div>
            </div>
         </div>
         <div class="card" onclick="navigateTo('koreanist')">
            <div class="cardInside">
               <div class="titleProject">Koreanist</div>
               <div class="viewProject"><span>View project</span></div>
            </div>
         </div>
         <div class="card" onclick="navigateTo('quiz')">
            <div class="cardInside">
               <div class="titleProject">Quiz</div>
               <div class="viewProject"><span>View project</span></div>
            </div>
         </div>
      </div>
      <hr style="width: 100%;border-top: 1px solid black;">
      <p style="opacity: 0.5;">© Copyright 2022 by Mirek Nguyen. All Rights reserved.</p>
   </div>
</body>

</html>
