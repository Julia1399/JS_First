function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
        .filter((item) => !!item.name)
        .map((element) => {
        const { name, value } = element
  
        return { name, value }
        })
    let question2 = document.querySelector(".question-2").style.display = 'contents';
    let question1 = document.querySelector(".question-1").style.display = 'none';
    if (iteration === 0){
        numberOfFilms = data[0].value;
    }
    personalMovieDB.count = numberOfFilms
    if (iteration === 1){
        personalMovieDB.movies[data[1].value] = data[2].value
    }
    applicantForm.reset()
    iteration = 1;
    console.log(personalMovieDB)
  }
  
  function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
  }
  
  const applicantForm = document.getElementById('movies')
  let btn = document.querySelector('.btn');
  var numberOfFilms = '';
  var personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors: {}, 
      genres: [], 
      privat: false
  }
  let iteration = 0;
  applicantForm.addEventListener('submit', handleFormSubmit)