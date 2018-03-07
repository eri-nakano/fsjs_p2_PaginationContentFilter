// function to show 10 students on each page
function showPage(pageNumber, studentList) {
  studentList = Array.from(document.getElementsByClassName('student-item cf'));
// hide all students on the page
  $(studentList).hide();
// loop through all students in the student list argument
  for (let i = 0; i < studentList.length; i += 1){
  // if student should be on this page number
  if ((pageNumber*10) - 10 <= i && i < pageNumber*10){
    // show the student
  studentList[i].style.display = 'block';
  } else {studentList[i].style.display = 'none'; } }
};
// function to append pagelinks to the page
function appendPageLinks(studentList) {
    studentList = Array.from(document.getElementsByClassName("student-item cf"));
    // determine how many pages for this student list
    let totalPage = Math.ceil(studentList.length/10);
    // create a page link section
    const pageLinkSection = document.createElement('ul')
    // add the page link section class name
    pageLinkSection.classList.add('pagination');

    for (let i = 1; i <= totalPage; i += 1){
      let currentPage = i;
      // create a page link
      const pageLink = document.createElement('li');
      pageLink.innerHTML = '<a href = "#">' + currentPage + '</a>';
      // add a page link to the page link section
      $(pageLinkSection).append(pageLink);
      // append the new page link section to the site
      $('.page').append(pageLinkSection);
      // make the page 1 active when the page is loaded
      document.querySelector('.pagination li a').classList.add('active');
      showPage(1,);
      // define what happens when you click a link
      pageLink.addEventListener('click', function(event) {
        // show the page clicked
        showPage(i,studentList);
        const currentLink = this.querySelector('a');
        // remove active class from all page links
        $('.active').removeClass('active')
        // add active class on the link clicked
        $(currentLink).addClass('active')
        });
}
}
appendPageLinks();
