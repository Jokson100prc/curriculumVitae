const windowHeight = window.innerHeight;
console.log(windowHeight)

function toggleClass() {

    const scrollDistance = window.scrollY;

    // topLeft
    const topLClass = document.querySelector('.topleft');
    const topLHeight = topLClass.clientHeight;
    const distanceToTopL = topLClass.offsetTop;


    if (scrollDistance > distanceToTopL + topLHeight - windowHeight) {
        topLClass.classList.add('active');
    }
    if (scrollDistance < distanceToTopL + topLHeight - windowHeight) {
        topLClass.classList.remove('active');
    }

    // topRight
    const topRClass = document.querySelector('.topright');
    const topRHeight = topRClass.clientHeight;
    const distanceToTopR = topRClass.offsetTop;


    if (scrollDistance > distanceToTopR + topRHeight - windowHeight) {
        topRClass.classList.add('active');
    }
    if (scrollDistance < distanceToTopR + topRHeight - windowHeight) {
        topRClass.classList.remove('active');
    }

    // left adres
    const adresClass = document.querySelector('.adres');
    const adresHeight = adresClass.clientHeight;
    const distanceToAdres = adresClass.offsetTop;


    if (scrollDistance > distanceToAdres + 1.5 * adresHeight - windowHeight) {
        adresClass.classList.add('active');
    }
    if (scrollDistance < distanceToAdres + 1.5 * adresHeight - windowHeight) {
        adresClass.classList.remove('active');
    }

    // education
    const eduClass = document.querySelector('.education');
    const eduHeight = eduClass.clientHeight;
    const distanceToEdu = eduClass.offsetTop;
    if (scrollDistance > distanceToEdu + 1.5 * eduHeight - windowHeight) {
        eduClass.classList.add('active');
    }
    if (scrollDistance < distanceToEdu + 1.5 * eduHeight - windowHeight) {
        eduClass.classList.remove('active');
    }

    // skills
    const skillsClass = document.querySelector('.skills');
    const skillsHeight = skillsClass.clientHeight;
    const distanceToSkills = skillsClass.offsetTop;
    if (scrollDistance > distanceToSkills + .9 * skillsHeight - windowHeight) {
        skillsClass.classList.add('active');
    }
    if (scrollDistance < distanceToSkills + .9 * skillsHeight - windowHeight) {
        skillsClass.classList.remove('active');
    }

    // right future
    const futureClass = document.querySelector('.future');
    const futureHeight = futureClass.clientHeight;
    const distanceToFuture = futureClass.offsetTop;


    if (scrollDistance > distanceToFuture + futureHeight - windowHeight) {
        futureClass.classList.add('active');
    }
    if (scrollDistance < distanceToFuture + futureHeight - windowHeight) {
        futureClass.classList.remove('active');
    }

    // right present
    const presentClass = document.querySelector('.present');
    const presentHeight = presentClass.clientHeight;
    const distanceToPresent = presentClass.offsetTop;


    if (scrollDistance > distanceToPresent + .9 * presentHeight - windowHeight) {
        presentClass.classList.add('active');
    }
    if (scrollDistance < distanceToPresent + .9 * presentHeight - windowHeight) {
        presentClass.classList.remove('active');
    }

    // right past
    const pastClass = document.querySelector('.past');
    const pastHeight = pastClass.clientHeight;
    const distanceToPast = pastClass.offsetTop;


    if (scrollDistance > distanceToPast + .8 * pastHeight - windowHeight) {
        pastClass.classList.add('active');
    }
    if (scrollDistance < distanceToPast + pastHeight - windowHeight) {
        pastClass.classList.remove('active');
    }

    // right quote
    const quoteClass = document.querySelector('.quote');
    const quoteHeight = quoteClass.clientHeight;
    const distanceToQuote = quoteClass.offsetTop;


    if (scrollDistance > distanceToQuote + 4 * quoteHeight - windowHeight) {
        quoteClass.classList.add('active');
    }
    if (scrollDistance < distanceToQuote + 4 * quoteHeight - windowHeight) {
        quoteClass.classList.remove('active');
    }

}
document.addEventListener('scroll', toggleClass)