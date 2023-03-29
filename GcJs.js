(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('semJava');
    $body.classList.add('comJava')
    var menuhamb = document.querySelector('.main-nav');
    var vejasobre = document.getElementById('veja-sobre');
    var vejamais = document.querySelector('.veja-mais')
    var vejamenos = document.querySelector('.veja-menos')

    vejasobre.addEventListener('click', function(){
            vejamais.removeAttribute('style');
            vejasobre.style.display = 'none';
    })
    vejamenos.addEventListener('click', function(){
        vejamais.style.display = 'none';
        vejasobre.style.display = 'inline-block';
    })
    
    var slide = new Carousel({
        container: '.menu-slider .imagens-slide',
        itens: 'img',
        btnPrev: '.prev',
        btnNext: '.next'
    })
    function Carousel(config){
        this.container = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container ;
        this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens ;
        this.btnPrev = (typeof config.btnPrev === 'string') ? this.container.querySelector(config.btnPrev) : config.btnPrev ;
        this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.btnNext) : config.btnNext ;
        var _this = this;
        var _currentSlide = 0;
        
        iniciarCarousel()
    
        function iniciarCarousel(){
            var mostrar = _this.container.querySelectorAll('.show');
            
            Array.prototype.forEach.call(mostrar, function(el){
                el.classList.remove('show')
            })
            _this.itens[0].classList.add('show');
            _this.btnPrev.removeAttribute('style')
            _this.btnNext.removeAttribute('style')
    
            addListeners()
        }
        function addListeners(){
            _this.btnNext.addEventListener('click', showNextSlide);
            _this.btnPrev.addEventListener('click', showPrevSlide);
        }
        function showNextSlide(){
            _currentSlide++;
            showSlide()
        }
        function showPrevSlide(){
            _currentSlide--;
            showSlide()
        }
        function showSlide(){
            var qtd = _this.itens.length;
            var slide = _currentSlide % qtd; 
            slide = Math.abs(slide);
            _this.container.querySelector('.show').classList.remove('show');
            _this.itens[slide].classList.add('show');
        }
        intervaloslide()
        function intervaloslide(){
        setarintevalo = setInterval(function(){
            showNextSlide()
        }, 4000)}

        this.container.addEventListener('mouseover', function(){
            clearTimeout(setarintevalo);
        })
        this.container.addEventListener('mouseout', function(){
            intervaloslide();
        })
    }

    var menu = new Menu({
        container: '.main-nav',
        btn: '#header__button',
        widthEnabled: 1024
    })

    function Menu(config){
        this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
        this.btn = (typeof config.btn === 'string') ? document.querySelector(config.btn) : config.btn;
        this.maxWidth = config.widthEnabled || false;
        var menuaberto = false;
        var largura = window.innerWidth || document.body.clientWidth;
        if(largura > 1024){
            menuhamb.style.display = 'block'
        }
        var tamsz = window.addEventListener('resize', function(){
            var larguralocal = window.innerWidth || document.body.clientWidth;
            if(larguralocal > 1024){
                menuhamb.style.display = 'block'
            } else if(larguralocal < 1024){
                menuhamb.style.display = 'none'
            }
        })

        this.btn.addEventListener('click', function(){
            if(menuaberto == false){
            menuhamb.style.display = 'block';
            menuaberto = true;
            } else if(menuaberto == true){
                menuhamb.style.display = 'none';
                menuaberto = false;
            }
        })
    }
    //SECTION HABILIDADES
    var $Houtput = document.querySelector('#output');
    var $jsbtn = document.querySelector('.fa-js-square');
    var $cssbtn = document.querySelector('.fa-css3-alt');
    var $htmlbtn = document.querySelector('.fa-html5');
    var $gitbtn = document.querySelector('.fa-git-alt');
    var $reactbtn = document.querySelector('.fa-react');
    var $codebtn = document.querySelector('.fa-square-plus');
    var $icons = document.querySelector('.icons');
    
    $jsbtn.addEventListener('mouseover', function(){
        $Houtput.innerHTML = "<b>Experiência em Javascript</b>. <br> Com vários projetos e Frameworks que estarão em breve expostos aqui em meu portifólio. <br> Usado para o desenvolvimento web, desenvolvimento de apps mobile, aplicações de backend entre outros."
    })
    $cssbtn.addEventListener('mouseover', function(){
        $Houtput.innerHTML = "<b>Experiência em CSS3</b>. <br> Para criar páginas com um design ainda mais agradável, o CSS é uma ferramenta indispensável."
    })
    $htmlbtn.addEventListener('mouseover', function(){
        $Houtput.innerHTML = "<b>Experiência em HTML5</b>. <br> Componente base das páginas web, usada para a inserção de conteúdos, tais como textos, imagens, vídeos, formulários entre outros, podendo dar até um valor semântico maior a sua página."
    })
    $gitbtn.addEventListener('mouseover', function(){
        $Houtput.innerHTML = "<b>Experiência em Git</b>. *Ainda em aprendizado* <br> Possui a função de registrar quaisquer alteração feita em um código, dando a opção do programador regredir a códigos anteriores, caso desejado. Indispensável para trabalhos em equipe!"
    })
    $reactbtn.addEventListener('mouseover', function(){
        $Houtput.innerHTML = "<b>Experiência em React JS</b>. *Ainda em aprendizado* <br> Uma biblioteca Javascript, que tem como foco a criação de interface de usuários."
    })
    $codebtn.addEventListener('mouseover', function(){
        $Houtput.innerHTML = "Estou sempre em constante aprendizado de novas linguagens, e frameworks que poderão facilitar e agilizar meu trabalho a fim de ser cada vez mais produtivo. <br> Espero sempre poder trazer novidades para esta seção!"
    })
    $icons.addEventListener('mouseout', function(){
        $Houtput.innerHTML = "Passe o mouse sobre os ícones para ver informações";
    })
})()