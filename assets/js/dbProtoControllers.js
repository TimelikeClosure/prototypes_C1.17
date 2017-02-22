//MySQL Basics
app.controller('mysqlBasicsController', function() {
    this.title = ['MySQL Basics', 'MySQL Basics'];
    this.description = "<p>This prototype will introduce you to creating some basic SQL statements and creating tables using phpMyAdmin</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'mysql_basics';
    this.protoId = 33;

    this.links = {
        Presentation: {
            'Intro to Databases': 'https://docs.google.com/presentation/d/1g91Zuyyx9w8ZKJgBFv88C4aTlXUhKjbtPdD-k-EQpC8/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'MySQL PhpMyAdmin': 'https://docs.google.com/presentation/d/1UksvgIn8wmBpkVMp_e5PtUPDkF976-yA-JmiM8gCdvE/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'Intro to Databases': 'https://www.youtube.com/watch?v=YQ2AenC--H4&feature=youtu.be',
            'MySQL PhpMyAdmin': 'https://www.youtube.com/watch?v=MB7qtR3Dbgg&feature=youtu.be'
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "MySQL Basics",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li><p>The following file is included in the <code>mysql_basics</code> folder</p><ol class='nested-1'><li><code>mysql_queries.sql</code></li></ol></li><li>Place all your queries in the <code>mysql_queries.sql</code> file</li></ol>"
        },
        'Feature Set 1 - MySQL Basics': {
            html: "<ol class='left-border'><li class='clean-list'><h5>Do all of this in phpMyAdmin</h5></li><li class='clean-list'><h5>Make sure to check your database's contents between each operation</h5></li><li class='clean-list'><h5>Put all of your answer SQL statements into <code>mysql_queries.sql</code></h5></li><li value='1'>Using <b><code>SELECT</code></b>, find one user from your user table by username<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint1' aria-expanded='false' aria-controls='hint1'>View Hint</button></li><li id='hint1' class='clean-list collapse'><div class=\"highlight highlight-source-sql\"><pre><span class=\"pl-k\">SELECT</span> <span class=\"pl-k\">*</span> <span class=\"pl-k\">FROM</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>users<span class=\"pl-pds\">`</span></span> <span class=\"pl-k\">WHERE</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>username<span class=\"pl-pds\">`</span></span><span class=\"pl-k\">=</span><span class=\"pl-s\"><span class=\"pl-pds\">'</span>Juan<span class=\"pl-pds\">'</span></span></pre></div></li></ul></li><li>Using <b><code>UPDATE</code></b>, change one user's email from your user table. Update only the user that you had previously selected above<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint2' aria-expanded='false' aria-controls='hint2'>View Hint</button></li><li id='hint2' class='clean-list collapse'><div class=\"highlight highlight-source-sql\"><pre><span class=\"pl-k\">UPDATE</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>users<span class=\"pl-pds\">`</span></span> <span class=\"pl-k\">SET</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>email<span class=\"pl-pds\">`</span></span><span class=\"pl-k\">=</span><span class=\"pl-s\"><span class=\"pl-pds\">'</span>myawesomeemail<span class=\"pl-pds\">'</span></span> <span class=\"pl-k\">WHERE</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>username<span class=\"pl-pds\">`</span></span><span class=\"pl-k\">=</span><span class=\"pl-s\"><span class=\"pl-pds\">'</span>Juan<span class=\"pl-pds\">'</span></span></pre></div></li></ul></li><li>Using <b><code>INSERT</code></b>, add one new user to your user table<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint3' aria-expanded='false' aria-controls='hint3'>View Hint</button></li><li id='hint3' class='clean-list collapse'><div class=\"highlight highlight-source-sql\"><pre><span class=\"pl-k\">INSERT INTO</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>users<span class=\"pl-pds\">`</span></span> <span class=\"pl-k\">SET</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>username<span class=\"pl-pds\">`</span></span><span class=\"pl-k\">=</span><span class=\"pl-s\"><span class=\"pl-pds\">'</span>Mandy<span class=\"pl-pds\">'</span></span>, <span class=\"pl-s\"><span class=\"pl-pds\">`</span>email<span class=\"pl-pds\">`</span></span><span class=\"pl-k\">=</span><span class=\"pl-s\"><span class=\"pl-pds\">'</span>greatemail@email.com<span class=\"pl-pds\">'</span></span>, <span class=\"pl-s\"><span class=\"pl-pds\">`</span>password<span class=\"pl-pds\">`</span></span><span class=\"pl-k\">=</span>sha1(<span class=\"pl-s\"><span class=\"pl-pds\">'</span>thisisagreatpassword<span class=\"pl-pds\">'</span></span>)</pre></div></li></ul></li><li>Using <b><code>DELETE</code></b>, delete the user you just created<ul><li><button class='btn btn-danger btn-xs' type='button' data-toggle='collapse' data-target='#hint4' aria-expanded='false' aria-controls='hint4'>View Hint</button></li><li id='hint4' class='clean-list collapse'><div class=\"highlight highlight-source-sql\"><pre><span class=\"pl-k\">DELETE</span> <span class=\"pl-k\">FROM</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>users<span class=\"pl-pds\">`</span></span> <span class=\"pl-k\">WHERE</span> <span class=\"pl-s\"><span class=\"pl-pds\">`</span>username<span class=\"pl-pds\">`</span></span><span class=\"pl-k\">=</span><span class=\"pl-s\"><span class=\"pl-pds\">'</span>Mandy<span class=\"pl-pds\">'</span></span></pre></div></li></ul></li></ol>"
        },
        'Feature Set 2 - Make a Table': {
            html: "<ol class='left-border'><li>Create a table, <code>todo_items</code>, with the following fields:<ol class='nested-1'><li><b>id</b>: int 11</li><li><b>title</b>: varchar 50</li><li><b>details</b>: varchar 500</li><li><b>timestamp</b>: int 11</li><li><b>user_id:</b> int 11</li></ol></li><li>Inside <code>todo_items</code>, in phpMyAdmin, manually do the following:<ol class='nested-1'><li>create 10 todo items</li></ol></li><li>Inside <code>todo_items</code> create SQL statements to do the following:<ol class='nested-1'><li>Select all todo_items made by 1 user of your choice</li><li>Insert a new todo item into the table by that same user</li><li>Delete a todo item by that user</li><li>Update a todo item by that user with data of your choice</li><li>Perform a select to get all information from `users` by using the user's id</li><li>Copy all 5 SQL statements into <code>mysql_queries.sql</code>.<ul><li>Make sure to clearly label all SQL statements</li></ul></li></ol></li></ol>"
        }
    }

});

//Firebase Intro
app.controller('fbIntroController', function() {
    this.title = ['Firebase Introduction', 'Firebase Intro'];
    this.description = "<p>This prototype will introduce you to Firebase, a backend solution for your website or app. In this prototype we will be working witht the SGT and connecting it to Firebase database.</p><p>This prototype is based on the information that you obtained through the following resources <b>(If you haven't gone through these then please do so now).</b></p>";
    this.branch = 'fb_intro';
    this.protoId = 43;

    this.links = {
        Presentation: {
            'Intro to Databases': 'https://docs.google.com/presentation/d/1g91Zuyyx9w8ZKJgBFv88C4aTlXUhKjbtPdD-k-EQpC8/pub?start=false&loop=false&delayms=3000&slide=id.p',
            'Firebase Intro': 'https://docs.google.com/presentation/d/1BchTvPKiJpol8ooIBGCwIaKKJdlVOfxTw-L5kTZ4uO0/pub?start=false&loop=false&delayms=3000&slide=id.p'
        },
        Video: {
            'Intro to Databases': 'https://www.youtube.com/watch?v=YQ2AenC--H4&feature=youtu.be',
        }
    };

    this.demo = {
        'Video Prototype Demo': {
            title: "Firebase Intro",
            link: "",
            live: false
        }
    };

    this.features = {
        'Getting Started': {
            html: "<h5>If you did not do the challenge from the slides, do so now. You will be using the database from that challenge.</h5><ol class='left-border'><li>Included files<ol class='nested-1'><li><code>index.html</code></li><li><code>easy.js</code></li><li><code>hard.js</code></li></ol></li><li>If you have not already, you need to sign into Firebase's website and create a project<ol class='nested-1'><li>If you completed the challenge you can use that same project</li><li>If you don't already have a project created refer to the <a href='https://docs.google.com/presentation/d/1BchTvPKiJpol8ooIBGCwIaKKJdlVOfxTw-L5kTZ4uO0/pub?start=false&loop=false&delayms=3000&slide=id.p' target='_blank'>Firebase Intro Slides</a> to create one</li></ol></li><li>There are two versions of this prototype<ol class='nested-1'><li>Easy - You will be working with preexisting functions and just need to add in the firebase portions of the code.</li><li>Hard - Not truly hard just more work than easy. There will still be some predefined functions that you can use if you choose.</li><li>You <b>DO NOT</b> have to complete both, they should both end with similar outcomes. If you do the easy and want to try the harder one that is okay as well.</li><li>Utilize the Firebase console to help with testing</li></ol></li></ol>"
        },
        "Feature Set 1 Easy - Config": {
            html: "<ol class='left-border'><li class='clean-list'><b>In <code>easy.js</code> complete the following:</b></li><li value='1'>Around line 26 by the comment <code>// Add config data</code>, add your config object from Firebase</li><li>Using your config object initialize firebase</li><li>Create a reference to your database</li><li>In the <code>index.html</code> file<ol><li>Add <code>easy.js</code> to the script tag on <b>line 12</b> (or the one that is close to line 12 and has an empty <code>src</code> attribute)</li></ol></li></ol>"
        },
        "Feature Set 2 Easy - Get the data": {
            html: "<ol class='left-border'><li class='clean-list'><b>In <code>easy.js</code> complete the following</b></li><li value='1'>Below where you created your database reference add an event listener</li><li>The event listener should be listening for any changes in the student node</li><li>The callback function should call the <code>updateDom</code> function</li><li>If you have data in your database you should see the table populate now</li><li>If your table does not populate:<ol class='nested-1'><li>Put a console log within your callback function. Do you see it when you refresh your page?<ul><li><b class='text-success'>Yes</b><ol class='nested-2'><li>Move to option ii</li></ol></li><li><b class='text-danger'>No</b><ol class='nested-2'><li>Verify your config object is correct</li><li>Verify you are using the database reference correctly</li><li>Verify you are connecting to Firebase</li><li>If still stuck, ask for help</li></ol></li></ul></li><li>So the call back function is working but nothing is showing in the table<ol class='nested-1'><li>Is there data in your database</li><li>Are you using a reference to the correct node</li><li>Did you call the <code>updateDom</code> function</li><li>Did you pass your db snapshot into the <code>updateDom</code> function</li><li>Did you use <code>.val()</code></li><li>Is your data formatted correctly in your database, console log your snapshot to verify</li><li>Each student should have the following keys:<ul><li><code>student_id</code></li><li><code>student_name</code></li><li><code>course</code></li><li><code>grade</code></li></ul></li><li>Still nothing? Ask for help</li></ol></li></ol></li><li>If your table did populate, move on to feature set 3</li></ol>"
        },
        "Feature Set 3 Easy - Add a student": {
            html: "<ol class='left-border'><li class='clean-list'><b>In <code>easy.js</code> complete the following</b></li><li value='1'>Locate the <code>addStudent</code> function, should be below your database event listener</li><li>The function takes in four parameters that contain the students info</li><li>Use the parameters to create an objet with the correct keys that match your database</li><li><b>Push</b> the object to your database</li><li>Test the add functionality and verify it works before moving on</li></ol>"
        },
        "Feature Set 4 Easy - Remove a student": {
            html: "<ol class='left-border'><li class='clean-list'><b>In <code>easy.js</code> complete the following</b></li><li value='1'>Locate the <code>deleteStudent</code> function, should be below <code>addStudent</code></li><li>Use the first parameter <code>key</code> to remove that student from your database</li><li>For an added <b>optional</b> challenge utilize the second parameter to have the user confirm the delete<ol class='nested-1'><li>Just use <code>confirm()</code> to keep it simple</li><li>The alert should ask the user if they are sure they want to delete the following student. It should display the student_id and the student_name</li><li>You can utilize the <code>getRowData</code> function to retrieve the students info</li><li><code>getRowData</code> returns an object with all the students info</li><li><code>getRowData</code> expects a <code>&lt;tr&gt;</code> element as a parameter</li><li>You can use the second parameter of <code>deleteStudent</code> to find the <b>closest 'tr'</b></li></ol></li><li>Test the delete functionality and verify it works before moving on</li></ol>"
        },
        "Feature Set 1 Hard - Firebase config": {
            html: "<ol class='left-border'><li class='clean-list'><b>In <code>hard.js</code> complete the following</b></li><li value='1'>Add your config object to the top of the file</li><li>Initialize the firebase object</li><li>Create a reference to your firebase database</li><li>In the <code>index.html</code> file<ol class='nested-1'><li>Add <code>hard.js</code> to the script tag on <b>line 12</b> (or the one that is close to line 12 and has an empty <code>src</code> attribute)</li></ol></li></ol>"
        },
        "Feature Set 2 Hard - Make it work!": {
            html: "<ol class='left-border'><li class='clean-list'><b>In <code>easy.js</code> complete the following</b></li><li value='1'>Utilizing the existing HTML add the following functionality<ol class='nested-1'><li>Add students to database</li><li>Update students in database</li><li>Delete students from database with a confirm / cancel notification. You can use <code>confirm()</code></li><li>Display student data in table, in real time</li></ol></li><li>There are a few functions left in from the easy version, feel free to utilize them or not. You can modify them if you want.</li><li>The HTML <b>can</b> be modified as long as the end result stays within the spirit of this prototype</li><li>Make sure to test everything before submitting. Utilize the firebase console to help verify things are working as expected</li></ol>"
        }
    }
});
