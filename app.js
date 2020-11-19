console.log($)

const showVideo= () =>{
    $('.morph').append("<iframe width='100%' height='315' src='https://www.youtube.com/embed/dOWDtDUKz-U?controls=0&amp;start=56' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")
}
const showForm=()=>{
    $('.formBox').append("<form><div class='form-group'><label for='exampleInputEmail1'>Email address</label><input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'><small id='emailHelp' class='form-text text-muted'>We'll never share your email with anyone else.</small></div><div class='form-group'><label for='exampleInputPassword1'>Comment</label><input type='password' class='form-control' id='exampleInputPassword1'></div><div class='form-group form-check'><input type='checkbox' class='form-check-input' id='exampleCheck1'><label class='form-check-label' for='exampleCheck1'>Send Me Info On How I can Help</label></div><button type='submit' class='btn btn-primary'>Submit</button></form>").append("<img class='formImg' src='https://orgs.law.harvard.edu/blsa/files/2018/02/External-Outreach.jpg'>")
}
const showForm2=()=>{
    $('.formBox').append("<form><div class='form-group'><label for='exampleInputEmail1'>Email address</label><input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'><small id='emailHelp' class='form-text text-muted'>We'll never share your email with anyone else.</small></div><div class='form-group'><label for='exampleInputPassword1'>Resources Needed</label><input type='password' class='form-control' id='exampleInputPassword1'></div><div class='form-group form-check'><input type='checkbox' class='form-check-input' id='exampleCheck1'><label class='form-check-label' for='exampleCheck1'>Send Me Resources</label></div><button type='submit' class='btn btn-primary'>Submit</button></form>").append("<img class='formImg' src='https://media.ford.com/content/fordmedia/fna/us/en/news/2016/01/18/ford-extends-commitment-to-african-american-community-with-forum.img.png/1453385717638.jpg'>")
}
const toggleMusic = () =>{
    audio = new Audio('./piano_beat.mp3')
        audio.play()
    
        $('body').append("<iframe width='5px' height='5px' src='https://www.youtube.com/embed/25Xrf4oyG3g' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")
}
const ring= ()=>{
    audio = new Audio('./ding.wav')
    audio.play()
}
const pledgeAlpha = () =>{
    $('.omegaContainer').css("background-color","gold")
    $('.fratContainer').css("background-color","black")
    $('.frat').append("<img class='logoEmblem'src='https://news.syr.edu/wp-content/uploads/2016/12/alphaPhiAlpha-310-206_72.jpg'>")
    $('.soro').replaceWith("<p>Text About your Frat</p>")
    $('.brand-header').replaceWith("<h1>Alpha Phi Alpha</h1>")
}
const pledgeOmega = () =>{
    $('.omegaContainer').css("background-color","purple")
    $('.fratContainer').css("background-color","gold")
    $('.frat').append("<img class='logoEmblem'src='https://www.logolynx.com/images/logolynx/ba/bae62302a28bee2a7f53f9705b45d873.jpeg'>")
    $('.soro').replaceWith("<p>Text About your Frat</p>")
    $('.brand-header').replaceWith("<h1>Omega Psi Phi</h1>")

}
const pledgeKappa = () =>{
    $('.omegaContainer').css("background-color","red")
    $('.fratContainer').css("background-color","white")
    $('.frat').append("<img class='logoEmblem'src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/k-a-psi-sincerely-lovely-ts.jpg'>")
    $('.soro').replaceWith("<p>Text About your Frat</p>")
    $('.brand-header').replaceWith("<h1>Kappa Alpha Psi</h1>")

}
const pledgeAKA = () =>{
    $('.omegaContainer').css("background-color","pink")
    $('.fratContainer').css("background-color","green")
    $('.frat').append("<img class='logoEmblem'src='https://www.logolynx.com/images/logolynx/87/8770e17ede13d04d48b718cb38f17d7e.jpeg'>")
    $('.soro').replaceWith("<p>Text About your Frat</p>")
    $('.brand-header').replaceWith("<h1>Alpha Kappa Alpha</h1>")

}
const pledgeDelta = () =>{
    $('.omegaContainer').css("background-color","grey")
    $('.fratContainer').css("background-color","red")
    $('.frat').replaceWith("<img class='logoEmblem' src='https://www.logolynx.com/images/logolynx/3e/3e1304dcdbc5048e4dd3ca2f29e4dbcf.png'>");
    
    $('.soro').replaceWith("<p>Text About your Frat</p>")
    $('.brand-header').replaceWith("<h1>Delta Sigma Theta</h1>")

}