// const Header=()=>{
//     return(
//         <header className="top">
//             <div className="topleft">
//                 <h1 className="name">Zawacki Marcin</h1>

//                 <div className="aspTechBox">
//                     <h3 className="aspiration">&#123; junior: programmer; &#125;</h3>
//                     <p className="technology">frontend: HTML5 CSS3 JS<br/>backend: Java</p>
//                 </div>
//             </div>


//             <div className="topright">
//                 <div><img src="img/CVMarcinZawacki.jpg" alt="Marcin Zawacki"/></div>
//             </div>
//         </header>
//     );
// }



class CV extends React.Component{
    state={

    }

    
    render(){
      return(  
      <React.Fragment>
        <div className="first">
        <div className="moveUp"></div>
        <div className="moveDown"></div>
    </div>
    
    
    <main className="wrapper">
        <header className="top">
            <div className="topleft">
                <h1 className="name">Zawacki Marcin</h1>

                <div className="aspTechBox">
                    <h3 className="aspiration">"&#123; junior: programmer; &#125;"</h3>
                    <p className="technology">frontend: HTML5 CSS3 JS<br/>backend: Java</p>
                </div>
            </div>


            <div className="topright">
                <div><img src="img/CVMarcinZawacki.jpg" alt="Marcin Zawacki"/></div>
            </div>
        </header>


        <article className="content">

            <div className="left">

                <section className="adres">
                    <h2>"Adres "<i className="fas fa-envelope"></i></h2>
                    <p>
                        "marcinzacki@gmail.com"
                        <br/>
                    </p>
                </section>

                <section className="education">
                    <h2>"Edukacja "<i className="fas fa-user-graduate"></i></h2>

                    <p>"10.2018 / 06.2019 SDAcademy-Java"</p>

                    <p>
                        "wykształcenie średnie"
                        <br/>
                    </p>
                </section>

                <section className="skills">
                    <h2>"Umiejętności "<i className="fas fa-user-cog"></i></h2>
                    <p>"* HTML i CSS ***"
                        <br/>"* JS **"
                        <br/>"* Git **"
                        <br/>"* Angielski b1"
                        <br/>"* logiczne myślenie"
                        <br/>"* nauka i zaangażowanie"
                        <br/>"* wytrwałość"
                        <br/>"* dociekliwość"
                        <br/>"* praca z ludźmi"
                    </p>
                </section>
            </div>


            <section className="right">

                <div className="future">
                    <h2>"Obecne kursy i projekty:"</h2>

                    <h3>
                        "Od 27.10.2018"
                        <i className="fab fa-java"></i>
                        <a href="https://sdacademy.pl/lista-kursow/java-od-podstaw-bydgoszcz-grudzien/" target="_blank">
                            "Java od podstaw SDA"
                        </a>
                    </h3>

                    <h3>
                        "Od 26.11 2018 czwarty moduł kursu"
                        <i className="fas fa-laptop-code"></i>
                        <a href="https://www.udemy.com/user/samuraj-programowania/">
                            "React od podstaw teoria i praktyka"
                        </a>
                        "Bartłomieja Borowczyka"
                    </h3>

                    <p>"Każda możliwa konferencja poświęcona IT"<i className="fas fa-laptop-code"></i></p>
                </div>


                <div className="present">
                    <h2>"Swój czas poświęcam na:"</h2>

                    <h3>
                    <a href="https://github.com/Jokson100prc">"GIT"</a>" Hub"
                    </h3>

                    <h3>
                    <a href="https://gitlab.com/GroupProjectSDA/groupproject.git">GIT</a>
                    " Lab projekt grupowy"
                    </h3>

                    <p>
                        "Projekt strony poświęconej treningowi pamięci"
                        <i className="fas fa-brain"></i>
                    </p>

                    <h3>
                        "17.09.2018 kurs"
                        <a href="https://websamuraj.pl/" target="_blank">
                            "Bartłomieja Borowczyka cz.3/6 JS i programowanie obiektowe"
                        </a>
                    </h3>

                    <h3>
                        "08.2018 Pierwsza wersja"
                        <a href="http://marcinzawacki.cba.pl/" target="_blank">
                            <i className="far fa-address-card"></i>
                            "CV.webSite"
                        </a>
                    </h3>

                    <p>"08/09.2018 "<i className="fas fa-flask"></i>" PRODżekt: (Nauka CSS JS)"</p>

                    <h3>
                        "07/09.2018 "<i className="fas fa-laptop-code"></i> "Kursy Bartłomieja Borowczyka"
                        <a href="https://www.udemy.com/certificate/UC-WO4XWXKI/" target="_blank">
                            "cz.1/6"
                        </a>
                        "oraz"
                        <a href="https://www.udemy.com/certificate/UC-UQ1JW2JY/" target="_blank">" cz.2/6 "</a>
                    </h3>

                    <p>
                        "01.07.2018"
                        <i className="fas fa-battery-quarter"></i>
                        "Moja pierwsza strona"
                        <a href="http://fotozaparatu.cba.pl/index.html" target="_blank">
                            "..."
                            <i className="fas fa-globe"></i>
                        </a>
                    </p>

                    <h3>
                        <i className="fas fa-code"></i>
                        "Początki z kodem –"
                        <a href="https://www.youtube.com/channel/UCzn6vAfspIcagLax1fck_jw" target="_blank">
                            "Mirosław Zelent"
                        </a>
                        <i className="fab fa-html5"></i> 
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-js"></i>
                    </h3>
                </div>

                <div>
                    <h4 className="quote">"„Coś się kończy,"<br/>"coś się zaczyna”"</h4>
                </div>

                <div className="past">
                    <h2>"Co robiłem wcześniej?"</h2>

                    <p>

                        <span>
                            <i className="fab fa-grav"></i>
                            "grałem, trenowałem, uczyłem i tworzyłem społeczność"
                            <br/>
                            "brazylijskiej sztuki walki"
                            <a href="https://www.youtube.com/watch?v=G16xScfD5WM" target="_blank">"Capoeira"</a>
                        </span>

                        <br/>

                        <span>
                            <i className="fas fa-cut"></i> "przez 10 lat byłem fryzjerem"
                        </span>

                        <br/>

                        <span>
                            <i className="fas fa-wrench"></i>
                            "wcześniej pracowałem przy obsłudze magazynów,"
                            <br/>
                            "maszyn ciężkich i ukończyłem szkołę mechaniczną…"
                        </span>

                    </p>
                </div>
            </section>
        </article>

    </main>

    <footer className="bot">
        <p>"Wszelkie Prawa Zastrzeżone &copy; 2018 Marcin Zawacki marcinzacki@gmail.com"</p>
    </footer>
    </React.Fragment>
    )
   
}


{/* const Header=()=>{
    return(
        <header className="top">
            <div className="topleft">
                <h1 className="name">Zawacki Marcin</h1>

                <div className="aspTechBox">
                    <h3 className="aspiration">&#123; junior: programmer; &#125;</h3>
                    <p className="technology">frontend: HTML5 CSS3 JS<br/>backend: Java</p>
                </div>
            </div>


            <div className="topright">
                <div><img src="img/CVMarcinZawacki.jpg" alt="Marcin Zawacki"/></div>
            </div>
        </header>
    );
}



class CV extends React.Component{
    state={

    }

    
    render(){
      return(  <>
        <div className="first">
        <div className="moveUp"></div>
        <div className="moveDown"></div>
    </div>
    </>
    
    <main className="wrapper">
        


        <article className="content">

            <div className="left">

                <section className="adres">
                    <h2>"Adres "<i className="fas fa-envelope"></i></h2>
                    <p>
                        "marcinzacki@gmail.com"
                        <br>
                    </p>
                </section>

                <section className="education">
                    <h2>"Edukacja "<i className="fas fa-user-graduate"></i></h2>

                    <p>"10.2018 / 06.2019 SDAcademy-Java"</p>

                    <p>
                        "wykształcenie średnie"
                        <br>
                    </p>
                </section>

                <section className="skills">
                    <h2>"Umiejętności "<i className="fas fa-user-cog"></i></h2>
                    <p>"* HTML i CSS ***"
                        <br>"* JS **"
                        <br>"* Git **"
                        <br>"* Angielski b1"
                        <br>"* logiczne myślenie"
                        <br>"* nauka i zaangażowanie"
                        <br>"* wytrwałość"
                        <br>"* dociekliwość"
                        <br>"* praca z ludźmi"
                    </p>
                </section>
            </div>


            <section className="right">

                <div className="future">
                    <h2>"Obecne kursy i projekty:"</h2>

                    <h3>
                        "Od 27.10.2018"
                        <i className="fab fa-java"></i>
                        <a href="https://sdacademy.pl/lista-kursow/java-od-podstaw-bydgoszcz-grudzien/" target="_blank">
                            "Java od podstaw SDA"
                        </a>
                    </h3>

                    <h3>
                        "Od 26.11 2018 czwarty moduł kursu"
                        <i className="fas fa-laptop-code"></i>
                        <a href="https://www.udemy.com/user/samuraj-programowania/">
                            "React od podstaw teoria i praktyka"
                        </a>
                        "Bartłomieja Borowczyka"
                    </h3>

                    <p>"Każda możliwa konferencja poświęcona IT"<i className="fas fa-laptop-code"></i></p>
                </div>


                <div className="present">
                    <h2>"Swój czas poświęcam na:"</h2>

                    <h3>
                    <a href="https://github.com/Jokson100prc">"GIT"</a>" Hub"
                    </h3>

                    <h3>
                    <a href="https://gitlab.com/GroupProjectSDA/groupproject.git">GIT</a>
                    " Lab projekt grupowy"
                    </h3>

                    <p>
                        "Projekt strony poświęconej treningowi pamięci"
                        <i className="fas fa-brain"></i>
                    </p>

                    <h3>
                        "17.09.2018 kurs"
                        <a href="https://websamuraj.pl/" target="_blank">
                            "Bartłomieja Borowczyka cz.3/6 JS i programowanie obiektowe"
                        </a>
                    </h3>

                    <h3>
                        "08.2018 Pierwsza wersja"
                        <a href="http://marcinzawacki.cba.pl/" target="_blank">
                            <i className="far fa-address-card"></i>
                            "CV.webSite"
                        </a>
                    </h3>

                    <p>"08/09.2018 "<i className="fas fa-flask"></i>" PRODżekt: (Nauka CSS JS)"</p>

                    <h3>
                        "07/09.2018 "<i className="fas fa-laptop-code"></i> "Kursy Bartłomieja Borowczyka"
                        <a href="https://www.udemy.com/certificate/UC-WO4XWXKI/" target="_blank">
                            "cz.1/6"
                        </a>
                        "oraz"
                        <a href="https://www.udemy.com/certificate/UC-UQ1JW2JY/" target="_blank">" cz.2/6 "</a>
                    </h3>

                    <p>
                        "01.07.2018"
                        <i className="fas fa-battery-quarter"></i>
                        "Moja pierwsza strona"
                        <a href="http://fotozaparatu.cba.pl/index.html" target="_blank">
                            "..."
                            <i className="fas fa-globe"></i>
                        </a>
                    </p>

                    <h3>
                        <i className="fas fa-code"></i>
                        "Początki z kodem –"
                        <a href="https://www.youtube.com/channel/UCzn6vAfspIcagLax1fck_jw" target="_blank">
                            "Mirosław Zelent"
                        </a>
                        <i className="fab fa-html5"></i> 
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-js"></i>
                    </h3>
                </div>

                <div>
                    <h4 className="quote">"„Coś się kończy,"<br>"coś się zaczyna”"</h4>
                </div>

                <div className="past">
                    <h2>"Co robiłem wcześniej?"</h2>

                    <p>

                        <span>
                            <i className="fab fa-grav"></i>
                            "grałem, trenowałem, uczyłem i tworzyłem społeczność"
                            <br>
                            "brazylijskiej sztuki walki"
                            <a href="https://www.youtube.com/watch?v=G16xScfD5WM" target="_blank">"Capoeira"</a>
                        </span>

                        <br>

                        <span>
                            <i className="fas fa-cut"></i> "przez 10 lat byłem fryzjerem"
                        </span>

                        <br>

                        <span>
                            <i className="fas fa-wrench"></i>
                            "wcześniej pracowałem przy obsłudze magazynów,"
                            <br>
                            "maszyn ciężkich i ukończyłem szkołę mechaniczną…"
                        </span>

                    </p>
                </div>
            </section>
        </article>

    </main>

    <footer className="bot">
        <p>"Wszelkie Prawa Zastrzeżone &copy; 2018 Marcin Zawacki marcinzacki@gmail.com"</p>
    </footer>
    </>);
   
} */}