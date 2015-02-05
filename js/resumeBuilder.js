
var bio = {
	"name"           : "Tom Smoker",
	"role"           : "                        Web Developer"  ,
	"contacts"       : {"mobile"   : "+61 400 204 804",
					    "email"    : "thomas.m.smoker@gmail.com",
					    "github"   : "tomsmoker",
					    "location" : "Perth, Australia"},
	"welcomeMessage" : "He work hard for the money, but it ain't about cash",
	"skills"         : ["python", "java", "classical piano", "irish goodbyes","puzzles, specifically jigsaws", "monopoly (provided i'm the bank)", "birdcalls*"],
	"biopic"         : "images/profile.jpg",

	"display" : function() {

		var formattedName 			= HTMLheaderName.replace("%data%",bio.name);
		var formattedRole 			= HTMLheaderRole.replace("%data%",bio.role);
		var contacts 				= bio["contacts"];
		var formattedMobile 		= HTMLmobile.replace("%data%",contacts["mobile"]);
		var formattedEmail 			= HTMLemail.replace("%data%",contacts["email"]);
		var formattedGithub		    = HTMLgithub.replace("%data%", contacts["github"]);
		var formattedLocation 		= HTMLlocation.replace("%data%",contacts["location"]);
		var formattedInfo 		    = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
		var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
		var formattedPic 			= HTMLbioPic.replace ("%data%", bio.biopic);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$(formattedInfo).appendTo("#topContacts, #footerContacts");
		$("#header").append(formattedPic);
		$("#header").append(formattedWelcomeMessage);

		if(bio.skills.length > 0) {

			$("#header").append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
			$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
			$("#skills").append(formattedSkill);
				formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
			$("#skills").append(formattedSkill);

		}
	}
}

bio.display();

var work = {
  "jobs" : [
	    {
	    	"employer"    : "Deloitte",
	    	"title"       : "Summer Intern",
	    	"location"    : "Level 14,240 St Georges Terrace, Perth WA 6000",
	    	"dates"       : "1/12/14 - 18/12/14",
	    	"description" : "I was a vacationer in Consulting, working in the EIM division of technology. I worked on file and database management and integration, as well as data presentation."
	    },

	    {
	    	"employer"    : "Clairault Streicker Wines",
	    	"title"       : "Cellar Door",
	    	"location"    : "3277 Caves Road, Wilyabrup WA 6280",
	    	"dates"       : "Summer 14/15",
	    	"description" : "I ran tastings and viewings at the cellar door, and acted as a waiter if needed."
	    }
    ],

    "display": function() {

	 	for (job in work.jobs) {

			 $("#workExperience").append(HTMLworkStart);

			 var formattedEmployer      = HTMLworkEmployer.   replace("%data%", work.jobs[job].employer);
			 var formattedTitle         = HTMLworkTitle.      replace("%data%", work.jobs[job].title);
			 var formattedEmployerTitle = formattedEmployer + formattedTitle;
			 var formattedLocation      = HTMLworkLocation.   replace("%data%", work.jobs[job].location);
			 var formattedDates         = HTMLworkDates.      replace("%data%", work.jobs[job].dates);
			 var formattedDescription   = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			 $(".work-entry:last").append(formattedEmployerTitle);
			 $(".work-entry:last").append(formattedLocation);
			 $(".work-entry:last").append(formattedDates);
			 $(".work-entry:last").append(formattedDescription);
	 	}
	}
}
work.display();

var projects = {
  "projects"      : [
  {
    "title"       : "Udacity Web Mockup",
    "dates"       : "January 2015",
    "description" : "Recreated a basic website",
    "images"      : ""
	}
  ],

    "display" : function() {

	  	for (project in projects.projects) {

		  	$("#projects").append(HTMLprojectStart);

		  	var formattedTitle       = HTMLprojectTitle.      replace("%data%", projects.projects[project].title);
		  	var formattedDates       = HTMLprojectDates.      replace("%data%", projects.projects[project].dates);
		  	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		  	$(".project-entry:last").append(formattedTitle);
		  	$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);

		  	if (projects.projects[project].images.length > 0) {

		  		for (image in projects.projects[project].images) {

		  			var formattedImage = HTMLprojectImage.    replace("%data%", projects.projects[project].images[image]);

		  			$(".project-entry: last").append(formattedImage);
		  		}
		  	}
		}
    }
}

projects.display();

var education = {
  "schools" : [
    {
    	"name"     : "University of Western Australia",
    	"location" : "35 Stirling Hwy, Crawley WA 6009",
    	"degree"   : "BSc",
    	"major"    : "Software Engineering / Data Science",
    	"dates"    : "2013 - 2015"
    }
  ]
,
  "onlineCourses" : [
    {
    	"title"   : "Front End Web Developer Nanodegree",
    	"school"  : "Udacity",
    	"date"    : 2015,
    	"url"     : "https://www.udacity.com/course/nd001"
    }
  ],

    "display" : function() {

    	for (school in education.schools) {

		  	$("#education").append(HTMLschoolStart);

		  	var formattedName     	   = HTMLschoolName.    replace("%data%", education.schools[school].name);
		  	var formattedDegree  	   = HTMLschoolDegree.  replace("%data%", education.schools[school].degree);
		  	var formattedNameAndDegree = formattedName      + formattedDegree;
		  	var formattedDates   	   = HTMLschoolDates.   replace("%data%", education.schools[school].dates);
		  	var formattedLocation	   = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		  	var formattedMajor   	   = HTMLschoolMajor.   replace("%data%", education.schools[school].major);

		  	$(".education-entry:last").append(formattedNameAndDegree);
		  	$(".education-entry:last").append(formattedDates);
		  	$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);

		}

		for (onlineCourse in education.onlineCourses) {

			$("#education").append(HTMLonlineClasses);
			$("#education").append(HTMLschoolStart);

		  	var formattedTitle  		= HTMLonlineTitle. replace("%data%", education.onlineCourses[onlineCourse].title);
		  	var formattedSchool 		= HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		  	var formattedTitleAndSchool = formattedTitle   + formattedSchool;
		  	var formattedDates  		= HTMLonlineDates. replace("%data%", education.onlineCourses[onlineCourse].date);
		  	var formattedURL    		= HTMLonlineURL.   replace("%data%", education.onlineCourses[onlineCourse].url);

		  	$(".education-entry:last").append(formattedTitleAndSchool);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedURL);

		}
    }

}

education.display();

$("#mapDiv").append(googleMap);

function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);

  }

  return locationArray;
}

console.log(locationizer(work));


function inName(name) {
  name = bio.name.trim().split(" ");
  console.log(name);
  name[1] = name[1]. toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();

  return name[0] + name[1];
}


$("#main").append(internationalizeButton);

