console.log($)

const showVideo= () =>{
    $('.morph').append("<iframe width='100%' height='315' src='https://www.youtube.com/embed/dOWDtDUKz-U?controls=0&amp;start=56' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")
}
const showForm=()=>{
    $('.formBox').append("<form><div class='form-group'><label for='exampleInputEmail1'>Email address</label><input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'><small id='emailHelp' class='form-text text-muted'>We'll never share your email with anyone else.</small></div><div class='form-group'><label for='exampleInputPassword1'>Comment</label><input type='password' class='form-control' id='exampleInputPassword1'></div><div class='form-group form-check'><input type='checkbox' class='form-check-input' id='exampleCheck1'><label class='form-check-label' for='exampleCheck1'>Send Me Info On How I can Help</label></div><button type='submit' class='btn btn-primary'>Submit</button></form>").prepend("<img class='formImg' src='https://orgs.law.harvard.edu/blsa/files/2018/02/External-Outreach.jpg'>")
}
const showForm2=()=>{
    $('.formBox').append("<form><div class='form-group'><label for='exampleInputEmail1'>Email address</label><input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'><small id='emailHelp' class='form-text text-muted'>We'll never share your email with anyone else.</small></div><div class='form-group'><label for='exampleInputPassword1'>Resources Needed</label><input type='password' class='form-control' id='exampleInputPassword1'></div><div class='form-group form-check'><input type='checkbox' class='form-check-input' id='exampleCheck1'><label class='form-check-label' for='exampleCheck1'>Send Me Resources</label></div><button type='submit' class='btn btn-primary'>Submit</button></form>").prepend("<img class='formImg' src='https://media.ford.com/content/fordmedia/fna/us/en/news/2016/01/18/ford-extends-commitment-to-african-american-community-with-forum.img.png/1453385717638.jpg'>")
}
const toggleMusic = () =>{
    $('body').append("<iframe width='5px' height='5px' src='https://www.youtube.com/embed/25Xrf4oyG3g' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")
}
const addIframe= (iframe)=>{
    
}