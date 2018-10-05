/*
This is empty on purpose! Your code to build the resume will go here.
 */

//var name="Maishat Sana";

var bio={
  "name": "Maishat Sana",
  "role": "Web Developer",
  "contacts":{
    "mobile":"123-456-9000",
    "email":"maishatsana",
    "twitter":"@sana123",
    "gitHub":"gitmaishat",
    "location":"Bengaluru"
  },
  "biopic":"images/img1.jpg",
  "welcomeMessage":"Hello!Welcome to Udacity",
  "skills":["Web Developer","Trainer","Home Maker"]
};
var education={
  "schools":[
    {
     "name":"Vidyodaya",
      "location":"Madanapalle",
      "dates":"1989-1999",
      "majors":"science",
      "degree":"Secondary" 
    },
    {
      "name":"Sri Venkateshwara University",
      "location":"Madanapalle",
       "dates":"1999-2001",
      "majors":"science",
      "degree":"PU"
    },
    {
      "name":"Osmania University",
      "location":"Hyderabad",
      "year":"2001-2004",
      "majors":"Compscience",
      "degree":"Bachelor"
    }
  ],
"onlineCourses":[
  {
  "title": "Nanodegree Front End Developer Course",
  "school":"Udacity",
  "dates":"2017",
  "url":"https://www.udacity.com"
  }
]};
var work={
  "jobs":[{
  "title": "Web Developer",
  "experience": 0.6,
  "date":"2009",
  "employer":"Free Lance",
  "location":"Pune",
  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
  },
  {
  "title": "Trainer",
  "experience": 2,
  "date":"2004-2006",
  "employer":"Aptech",
  "location":"Madanapalle",
  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud "
  },
  {
  "title": "Software Developer",
  "experience": 2.5,
  "date":"2006-2008",
  "employer":"Harvest",
  "location":"Bengaluru",
  "description":"Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
  }
  ]
};
var projects={
  "projects":[
  {
    "title":"Project 1",
    "date":"2007",
    "description":"Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
    "image":"images/fry.jpg"
  },
  {
    "title":"Project 2",
    "date":"2006-2007",
    "description":"Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
    "image":"images/fry.jpg"
  },
  {
    "title":"Project 3",
    "date":"2007-2009",
    "description":"Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
    "image":"images/fry.jpg"
  }
  ]
};
//Add personal Info
var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
if(bio.biopic!=="")
{
  var formattedPic=HTMLbioPic.replace("%data%",bio.biopic);
  $("#header").append(formattedPic);
}
//Add Contact Info
bio.displayContact=function(selector){
  if(bio.contacts!="")
  {
    var formattedMobile=HTMLmobile.replace("%data%", bio["contacts"].mobile);
    var formattedEmail=HTMLemail.replace("%data%", bio["contacts"].email);
    var formattedTwitter=HTMLtwitter.replace("%data%",bio["contacts"].twitter);
    var formattedgithub=HTMLgithub.replace("%data%", bio["contacts"].gitHub);
    var formattedlocation=HTMLlocation.replace("%data%", bio["contacts"].location);
    $("#"+selector).append(formattedMobile);
    $("#"+selector).append(formattedEmail);
    $("#"+selector).append(formattedTwitter);
    $("#"+selector).append(formattedgithub);
    $("#"+selector).append(formattedlocation);
  }
}

//Add skills to Page
var formattedSkill="";
if(bio.skills!="")
{
  
  $("#header").append(HTMLskillsStart);
  bio["skills"].forEach(function(skill){
    formattedSkill=HTMLskills.replace("%data%",skill);
    $("#skills").append(formattedSkill);
  });
  
}
//Add Work Experience
work.displayWork=function(){
  work.jobs.forEach(function(job){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer=HTMLworkEmployer.replace("%data%",job.employer);
    var formattedTitle=HTMLworkTitle.replace("%data%",job.title);
    var formattedEmployerTitle=formattedEmployer + formattedTitle;
    var formattedDate=HTMLworkDates.replace("%data%",job.date);
    var formattedDescription=HTMLworkDescription.replace("%data%",job.description);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDate);
    $(".work-entry:last").append(formattedDescription);
  });
}

//Add Projects to the page.

projects.displayProjects=function(){
  projects.projects.forEach(function(project){
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle= HTMLprojectTitle.replace("%data%",project.title);
    var formattedProjectDate=HTMLprojectDates.replace("%data%",project.date);
    var formattedProjectDescription=HTMLprojectDescription.replace("%data%",project.description);
    var formattedProjectImage=HTMLprojectImage.replace("%data%",project.image);
    
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDate);
    $(".project-entry:last").append(formattedProjectDescription);
    $(".project-entry:last").append(formattedProjectImage);
  });
}
//Add Education to the Page
education.displayEducation=function(){
  education.schools.forEach(function(school){
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName= HTMLschoolName.replace("%data%",school.name);
    var formattedDegree=HTMLschoolDegree.replace("%data%",school.degree);
    var formattedSchoolDegree=formattedSchoolName+formattedDegree;
    var formattedSchoolDate=HTMLschoolDates.replace("%data%",school.year);
    var formattedSchoolLocation=HTMLschoolLocation.replace("%data%",school.location);
    var formattedSchoolMajor=HTMLschoolMajor.replace("%data%",school.majors);
    
    $(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolDate);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajor);

  });
  education.onlineCourses.forEach(function(course){
      $(".education-entry:last").append(HTMLonlineClasses);
      var formattedTitle = HTMLonlineTitle.replace("%data%",course.title);
      var formattedSchool = HTMLonlineSchool.replace("%data%",course.school);
      var formattedTitleSchool=formattedTitle+formattedSchool;
      var formattedDate=HTMLonlineDates.replace("%data%",course.dates);
      var formattedUrl=HTMLonlineURL.replace("%data%",course.url);
      $(".education-entry:last").append(formattedTitleSchool);
      $(".education-entry:last").append(formattedDate);
      $(".education-entry:last").append(formattedUrl);
    });
  
}

var fruits=["Apple","Apple","Apple","Banana","chikku","chikku","Banana","Banana"];
var copyOfFruits=fruits.slice(0);

var fruitObj={};
for(var i=0;i<fruits.length;i++){
  var count=0;
  for(var j=0;j<copyOfFruits.length;j++){
    if(fruits[i]===copyOfFruits[j])
    {
      count++;
      delete copyOfFruits[j];
    }
  }
  if(count>0){
    var res={};
    //res.value=fruits[i];
    //res.count=count;
    fruitObj[fruits[i]]=count;
    //fruitObj.push(res);
  }
}
console.log(fruitObj);

bio.displayContact("topContacts");
//Add contact to footer
bio.displayContact("footerContacts");
work.displayWork();
projects.displayProjects();
education.displayEducation();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
var family2=$("<div id='family2'></div>").insertAfter("#family1");
family2.append("<h1>Family2</h1>");
var bruce=family2.append("<div id='bruce'></div>");
$("#bruce").append("<h2>Bruce</h2>");
$("#bruce").append("<div id='madison'></div>");
$("#madison").append("<h3>Madison</h3>");
$("<div id='hunter'><h3>Hunter</h3></div>").insertAfter("#madison");

