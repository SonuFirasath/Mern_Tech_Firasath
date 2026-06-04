function validateSubjects() {
  const checked = document.querySelectorAll('input[name="subjects"]:checked');
  if (checked.length < 2) {
    alert("Please select at least 2 subjects!");
    event.preventDefault();
  } else {
    alert("Your form is submitted !!!");
  }
}
