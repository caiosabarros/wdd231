const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// inject course list into courses card
// @dev styling in the .css file
const coursesDiv = document.getElementById("courses");
function wddCourses() {
    removeChildren();
    const wdds = courses.filter((course) => course.subject == 'WDD');
    wdds.forEach((course) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${course.subject} ${String(course.number)}`;
        coursesDiv.appendChild(paragraph);
    });
    markCompleted();
}

function cseCourses() {
    removeChildren();
    const cses = courses.filter((course) => course.subject == 'CSE');
    cses.forEach((course) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${course.subject} ${String(course.number)}`;
        coursesDiv.appendChild(paragraph);
    });
    markCompleted();
}

function allCourses() {
    removeChildren();
    courses.forEach((course) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = `${course.subject} ${String(course.number)}`;
        coursesDiv.appendChild(paragraph);
    });
    markCompleted();
}

// used to remove not accumulate p children when clicking on 
// selectors sequentially
function removeChildren() {
    const paragraphs = coursesDiv.querySelectorAll("p");
    paragraphs.forEach((p) => {
        coursesDiv.removeChild(p);
    });
}

// used to mark completed courses shown in the page.
function markCompleted() {
    const paragraphs = coursesDiv.querySelectorAll("p");
    // get credits
    let credits = 0
    let selectedCourses = [];
    paragraphs.forEach((p) => {
        // get course and number
        const subject = String(p.textContent).split(' ')[0];
        const number = String(p.textContent).split(' ')[1];


        // match against courses array
        courses.forEach((course) => {
            if (course.subject == subject && course.number == number) {
                // if completed, mark it
                if (course.completed) {
                    p.style.color = 'white';
                    p.style.padding = '5px';
                    p.style.backgroundColor = 'darkgreen';
                    p.style.maxWidth = 'fit-content';
                } else {
                    p.style.color = 'white';
                    p.style.backgroundColor = '#363636';
                }
                selectedCourses.push(course);
            }
            p.style.padding = '5px';
            p.style.maxWidth = 'fit-content';
            p.style.fontSize = '19px'
        })
    });

    // reduce as requested
    credits = selectedCourses.reduce(
        (acc, course) => acc + course.credits,
        0,
    );

    document.getElementById("credits").textContent = `The total number of credits for these courses is ${credits}`;
}

function displayAllCourseWork() {
    const courseWork = document.querySelector("#coursework");
    courses.forEach((course) => {
        const listElement = document.createElement('li');
        listElement.textContent = `${course.subject + ' ' + course.number} - ${course.title}`;
        courseWork.appendChild(listElement);
    })
}

/** hamburguer button */
const hamButton = document.querySelector("#menu");
const navigationMenu = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigationMenu.classList.toggle('open');
    hamButton.classList.toggle('open');
}, { passive: true });

// waywinding
function wayWind() {
    const currentPagePath = window.location.pathname;
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((navLink) => {
        if (String(navLink.getAttribute("href")).includes(currentPagePath)) {
            // TODO: remove it from HOME nav link
            navLink.classList.add("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    allCourses();
    displayAllCourseWork();
    wayWind();
}, { passive: true });


