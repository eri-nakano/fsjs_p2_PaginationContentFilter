// let pageNumber;
// let tenStudents;
// let studentsList = Array.from(document.getElementsByTagName('li'));
 // let studentsList = Array.from(document.getElementsByTagName('li'));
 // for (let i = 0; i < pageNumber; i++){
//pageNumber, studentList
function showPage(pageNumber, studentList) {
  studentList = document.querySelectorAll('li');
// first hide all students on the page
  $(studentList).hide();
// Then loop through all students in our student list argument
  for (let i = 0; i < studentList.length; i += 1){
  // if student should be on this page number
  if ((pageNumber*10) - 10 <= i && i < pageNumber*10){
    // show the student
  studentList[i].style.display = 'block';
  } else {studentList[i].style.display = 'none'; } }
};

showPage (4, );

function appendPageLinks(studentList) {
 // determine how many pages for this student list
let totalPage = studentList.length/10
    // create a page link section
    
    // “for” every page
        // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link
        // Use the showPage function to display the page for the link clicked
        // mark that link as “active”
// }
//
// console.log(array.from(document.getElementsByTagName('li')));
