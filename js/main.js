
function showPage(pageNumber, studentList) {
  studentList = Array.from(document.getElementsByClassName("student-item cf"));
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
function appendPageLinks(studentList) {
    studentList = Array.from(document.getElementsByClassName("student-item cf"));
    // determine how many pages for this student list
    let totalPage = Math.ceil(studentList.length/10);
    // create a page link section
    const pageLinkSection = document.createElement('ul')
    pageLinkSection.classList.add('pagination');
        // “for” every page
    for (let i = 1; i <= totalPage; i += 1){
      let currentPage = i;
      const pageLink = document.createElement('li');
      pageLink.innerHTML = '<a href = "#">' + currentPage + '</a>';
      // add a page link to the page link section
      $(pageLinkSection).append(pageLink);
      $('.page').prepend(pageLinkSection);
      // append our new page link section to the site
      $('.page').append(pageLinkSection);
      // define what happens when you click a link
      pageLink.addEventListener = ('click', function() {
        // Use the showPage function to display the page for the link clicked
        showPage(i,studentList);
        // mark that link as “active”
        const currentLink = document.querySelectorAll('.pagination li a');
        currentLink.classList.add('active');
      });
}
}
appendPageLinks();
