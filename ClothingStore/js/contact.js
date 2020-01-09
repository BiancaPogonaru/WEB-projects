window.onload = function(){
    /* main div for validation-form */
    let mainDiv = document.getElementById("validation-form");

    /* create form*/
    let createForm = document.createElement('form');
    createForm.setAttribute("name","valid-form");
    createForm.setAttribute("action"," ");
    createForm.setAttribute("method","GET");
    createForm.setAttribute("id","valid");
    
    /* form title */
    let heading_title = document.createElement("h2");
    heading_title.innerHTML ="Registration";
    createForm.appendChild(heading_title);

    /* name input and label */
    let nameDiv = document.createElement("div");
    let name_input= document.createElement("input");
    let name_label = document.createElement("label");

    nameDiv.classList.add("form-group");
    name_label.for= "InputName";
    name_label.innerHTML="Your name";
    name_input.type ="text";
    name_input.classList.add("form-control");
    name_input.id = "InputName";
    name_input.aria_describedby = "nameHelp";
    name_input.placeholder = "Enter name";

    nameDiv.appendChild(name_label);
    nameDiv.appendChild(name_input);
    createForm.appendChild(nameDiv);

    /* email input and label */
    let emailDiv = document.createElement("div");
    let email_label = document.createElement("label");
    let email_input = document.createElement("input");

    emailDiv.classList.add("form-group");
    email_label.for = "InputEmail";
    email_label.innerHTML = "Your email"
    email_input.type="email";
    email_input.classList.add("form-control");
    email_input.setAttribute("name","text1");
    email_input.id = "InputEmail";
    email_input.aria_describedby = "emailHelp";
    email_input.placeholder = "name@example.com";

    /* inactive email text  */
    let small_el = document.createElement("small");
    small_el.id="nameHelp";
    small_el.classList.add("form-text");
    small_el.classList.add("text-muted");
    small_el.innerHTML = "We'll never share your information";
    
    emailDiv.appendChild(email_label);
    emailDiv.appendChild(email_input);
    emailDiv.appendChild(small_el);
    createForm.appendChild(emailDiv);

    /* password input and label */
    let passDiv = document.createElement("div");
    passDiv.classList.add("form-group");
    let pass_label = document.createElement("label");
    let pass_input = document.createElement("input");

    pass_label.htmlFor = "PasswordInput";
    pass_label.innerHTML = "Password";
    pass_input.type="password";
    pass_input.classList.add("form-control");
    pass_input.id = "InputPassword";
    pass_input.setAttribute("name","text2");
    pass_input.placeholder = "password";

    passDiv.appendChild(pass_label);
    passDiv.appendChild(pass_input);
    createForm.appendChild(passDiv);

    /* select input */
    let selectDiv = document.createElement("div");
    let select_label = document.createElement("label");
    let selectEl = document.createElement('select');

    selectEl.classList.add("form-control");
    select_label.setAttribute("for","FormControlSelect");
    selectEl.setAttribute('id', 'select-age');
    selectDiv.classList.add("form-group");
    select_label.innerHTML = "What age are you?";

    /* options for select */
    let opt1 = document.createElement("option");
    opt1.value = "1";
    opt1.text = "16";

    let opt2 = document.createElement("option");
    opt2.value = "2";
    opt2.text = "17";

    let opt3 = document.createElement("option");
    opt3.value = "3";
    opt3.text = "18";

    let opt4 = document.createElement("option");
    opt4.value = "4";
    opt4.text = "19";

    let opt5 = document.createElement("option");
    opt5.value = "5";
    opt5.text = "20";

    
    selectEl.add(opt1,null);
    selectEl.add(opt2,null);
    selectEl.add(opt3,null);
    selectEl.add(opt4,null);
    selectEl.add(opt5,null);
    
    selectDiv.appendChild(select_label);
    selectDiv.appendChild(selectEl);
    createForm.appendChild(selectDiv);

   

    /* radio input and label */
    let radioDiv = document.createElement("div");
    let radio_label1 = document.createElement("label");
    let radio_input1 = document.createElement("input");

    radioDiv.classList.add("form-check");
    radio_label1.classList.add("form-check-label");
    radio_label1.setAttribute("for","Radios");
    radio_input1.setAttribute("type","radio");
    radio_input1.setAttribute("name","Radios");
    radio_input1.setAttribute("id","Radios");
    radio_input1.setAttribute("value","option1");
    radio_input1.setAttribute("value","checked");
    radio_label1.innerHTML = "Woman";

    const line_break = document.createElement("br");

    radioDiv.appendChild(radio_input1);
    radioDiv.appendChild(radio_label1);
    radioDiv.appendChild(line_break);
    createForm.appendChild(radioDiv);
    
    
    let radio_label2 = document.createElement("label");
    let radio_input2 = document.createElement("input");

    radioDiv.classList.add("form-check");
    radio_label2.classList.add("form-check-label");
    radio_label2.setAttribute("for","Radios");
    radio_input2.setAttribute("type","radio");
    radio_input2.setAttribute("name","Radios");
    radio_input2.setAttribute("id","Radios");
    radio_input2.setAttribute("value","option1");
    radio_input2.setAttribute("value","checked");
    radio_label2.innerHTML = "Man";

    radioDiv.appendChild(radio_input2);
    radioDiv.appendChild(radio_label2);
    createForm.appendChild(radioDiv);

    /* range input */
    let rangeDiv = document.createElement("div");
    let range_label = document.createElement("label");
    let range_input = document.createElement("input");

    rangeDiv.classList.add("form-range");
    range_label.setAttribute("for","customRange");
    range_label.innerHTML = "How often do you shop online?";
    range_input.setAttribute("type","range");
    range_input.classList.add("custom-range");
    range_input.setAttribute("min","0");
    range_input.setAttribute("max","5");

    rangeDiv.appendChild(range_label);
    rangeDiv.appendChild(range_input);
    createForm.appendChild(rangeDiv);
    mainDiv.appendChild(createForm);

    /* checkbox */
    let checkDiv = document.createElement("div");
    let check_label = document.createElement("label");
    let check_input = document.createElement("input");

    checkDiv.classList.add("form-check");
    check_label.classList.add("form-check-label");
    check_label.setAttribute("for","defaultCheck");
    check_label.innerHTML= "I have read and agree to the" + "<a href='#'> Terms of Service.</a>";
    check_input.classList.add("form-check-input");
    check_input.setAttribute("type","checkbox");
    check_input.setAttribute("id","defaultCheck");

    checkDiv.appendChild(check_input);
    checkDiv.appendChild(check_label);
    createForm.appendChild(checkDiv);
    mainDiv.appendChild(createForm);

    /* submit button */
    let button_submit = document.createElement("button");
    button_submit.setAttribute("id","submit-btn");
    button_submit.setAttribute("type","submit");
    button_submit.classList.add("btn");
    button_submit.classList.add("btn-primary");
    button_submit.innerHTML = "Submit";
    createForm.appendChild(button_submit);

    /* append everything to the main div */
    mainDiv.appendChild(createForm);

    /* email validation with regex */
    document.getElementById("InputEmail").addEventListener("keypress",function(e){
        let key = e.which || e.keyCode;
        if (key === 13){ // code for enter
        let inputText = document.forms["valid-form"].elements["text1"].value;
        let mailFormat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (inputText.match(mailFormat)){
            document.forms["valid-form"].elements["text1"].focus();
            document.forms["valid-form"].elements["InputEmail"].style.borderColor = "green";
            return true;
        }
        else{
            document.forms["valid-form"].elements["text1"].focus();
            document.forms["valid-form"].elements["InputEmail"].style.borderColor= "red";
            Swal.fire({    // sweet alert
                icon: 'error',
                title: 'Oops...',
                text: '"You have entered an invalid email address!"',
                footer: 'Email format must be: name@example.com'
              })
            return false;
        }
    }
    });
    /* password validation with regex */
    document.getElementById("InputPassword").addEventListener("keypress",function(e){
        let key = e.which || e.keyCode;
        if(key == 13) {
        let inputText = document.forms["valid-form"].elements["text2"].value;
        let passFormat =  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?!])([a-zA-Z0-9?!]){8,}/;
        if(inputText.match(passFormat)){
            document.forms["valid-form"].elements["text2"].focus();
            document.forms["valid-form"].elements["InputPassword"].style.borderColor = "green";
            return true;
        }
        else{
            document.forms["valid-form"].elements["text2"].focus();
            document.forms["valid-form"].elements["InputPassword"].style.borderColor = "red";
             Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Your password must be have at least: \n 8 characters long \n 1 uppercase & 1 lowercase character \n 1 number',
              })
            return false;
        }
    }
    });
    /* Function to prevent submitting the form if the user is underage */
    document.getElementById('select-age').addEventListener('change', function ChooseAge(){
    let age_opt = document.getElementById('select-age').value;
    let submit = true;
    if(age_opt < 3){
        document.getElementById('valid').addEventListener('submit', function(event){
            event.preventDefault();
        })
        Swal.fire({
            icon: 'warning',
            text: 'You are underage'
        });
    }
    });
}
    /* CRETING THE SETTINGS PANEL */
    let accesibilityBar = document.getElementById("accessibilityBar");

    /* creating the main button */
    let button = document.createElement("button");
    button.type = "button";
    button.id = "setAccessibility";
    button.classList.add("btn");
    button.classList.add("btn-light");
    button.innerHTML = "Accessibility";
    button.style.position = "absolute";
    button.style.left = "90%";
    button.style.top = "5%";
    accesibilityBar.appendChild(button);
    const access = document.getElementById("access");
    access.classList.add("collapse");

    let btnDarkMode = document.createElement("button");
    button.type = "button";
    btnDarkMode.id = "dark-button"
    btnDarkMode.classList.add("btn");
    btnDarkMode.classList.add("btn-primary");
    btnDarkMode.setAttribute("data-toggle","collapse");
    btnDarkMode.setAttribute("data-target","#collapseElement");
    btnDarkMode.setAttribute("data-accessibility","dark");
    btnDarkMode.style.margin = "5%";
    btnDarkMode.innerHTML = "Dark";


    access.appendChild(btnDarkMode);


    let btnIncFont = document.createElement("button");
    button.type = "button";
    btnIncFont.id = "increase-button";
    btnIncFont.classList.add("btn");
    btnIncFont.classList.add("btn-warning");
    btnIncFont.setAttribute("data-accessibility","incFont");
    btnIncFont.innerHTML = "Increase";

    access.appendChild(btnIncFont);
    let elem = document.createElement("div");
    elem.classList.add("collapse");

    document.getElementById("accessibilityBar").firstChild.addEventListener("click",function(){   
        const active_btn = document.getElementById("access");
        active_btn.style.display = "inline";
        active_btn.style.position = "absolute";
        active_btn.style.left = "90%";
        active_btn.style.top = "10%";
    
        document.getElementById("dark-button").addEventListener("click",function(){

            document.getElementsByClassName("banner_form")[0].style.background = "black";
            document.getElementById("page_header").style.background = "#696969";
            document.getElementById("page_footer").style.background = "#696969";
            for(let lb = 0; lb < document.getElementsByTagName("label").length; lb++){
                document.getElementsByTagName("label")[lb].style.background = "#DCDCDC";
            }
        })

        document.getElementById("increase-button").addEventListener("click",function(){
        
            document.getElementsByTagName("h2")[0].innerHTML = '<font size="20">Registration</font>';
            for(let lb = 0; lb < document.getElementsByTagName("label").length; lb++){
                document.getElementsByTagName("label")[lb].style.fontSize = "xx-large";
        }
            
    })
})
    /* LOGIN form*/
    const log = document.getElementById('login-form');

    const inp_email = document.createElement('input');
    inp_email.setAttribute("type","email");
    inp_email.classList.add('form-control');
    inp_email.setAttribute('aria-describedby','emailHelp');
    inp_email.setAttribute('placeholder','Enter email');
    inp_email.id = 'email_id';

    const inp_pass = document.createElement('input');
    inp_pass.setAttribute("type","password");
    inp_pass.classList.add('form-control');
    inp_pass.setAttribute('aria-describedby','passwordHelp');
    inp_pass.setAttribute('placeholder','Enter password');

    const inp_check = document.createElement('input');
    inp_check.classList.add('form-check-input');
    inp_check.classList.add('form-check');
    inp_check.type = 'checkbox';
    inp_check.value = ' ';
    const label_check = document.createElement('label');
    label_check.classList.add('form-check-label');
    label_check.innerHTML = 'Remember me';

    const login_btn = document.createElement('button');
    login_btn.type = 'submit';
    login_btn.classList.add('btn');
    login_btn.classList.add('btn-primary');
    login_btn.innerHTML = 'Login';
    const line_break = document.createElement('br');

    /* adding all the elements for the login form */
    log.appendChild(inp_email);
    log.appendChild(inp_pass);
    log.appendChild(inp_check);
    log.appendChild(label_check);
    log.appendChild(line_break);
    log.appendChild(login_btn);

 document.getElementsByClassName('btn-primary')[HTMLAllCollection.length+1].addEventListener('click',loadUsers);

 function loadUsers(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
    xhr.onload = function(){
        if(this.status == 200){
            let users = JSON.parse(this.responseText);
            let output = '';
            let ok = 0;
            for(let i in users){
                if(document.getElementById('email_id').value == users[i].email){
                    output += '<div class="user">' +
                    '<ul>' +
                    '<li>Name: ' + users[i].name + '</li>' +
                    '<li>City: ' + users[i].address.city + '</li>' +
                    '<li>Company: ' + users[i].company.name + '</li>' +
                    '</ul>' +
                    '</div>'
                    Swal.fire({
                        icon: 'success'
                    })                     
                    ok = 1;
                    break;
                }

            }
            if(ok == 0){
                Swal.fire({
                    icon: 'warning',
                    text: 'You do not have an account',
                    footer: '<a href="contact.html">Register Now</a>'
                })
            }
            document.getElementById('login-form').innerHTML = output;
            
        }
    }
    xhr.send();
}
