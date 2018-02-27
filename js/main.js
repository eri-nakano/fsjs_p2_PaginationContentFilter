
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
showPage(1,)
function appendPageLinks(/* take a student list as an argument */studentList) {
    studentList = document.querySelectorAll('li');
    // determine how many pages for this student list
    let totalPage = Math.ceil(studentList.length/10);
    // create a page link section
        // “for” every page
    for (let i = 1; i <= totalPage; i += 1){
      let currentPage = i;
      let pageLink = document.createElement('ul')
      // add a page link to the page link section
      pageLink = document.innerHTML='<li><a href="javascript:showPage('+ currentPage +')">' + currentPage + '</a><li>';
      $('.pagination').append(pageLink);
        // mark that link as “active”
      $('.pagination .active').append(currentPage);
}
}
appendPageLinks();
