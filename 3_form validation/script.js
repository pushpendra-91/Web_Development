function validate(){
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var c_password = document.getElementById('c_password').value
    console.log(username + email)

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordsmatch(password, c_password)
}

//function to validate username
function checkusername(username){
    if( username.length > 7)
    {
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error', 'success')
        document.getElementById('username_error').innerHTML=''

    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerHTML = 'Username should be at least 8 characters long'
    }
}

//function to validate email
function checkemail(email)
{
    if(email.length > 10 && email.includes('@gmail.com'))
    {
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error', 'success')
        document.getElementById('email_error').innerHTML=''
    }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerHTML='Enter Valid Email'
    }
}

//function to validate password
function checkpassword(password)
{
    if(password.length > 7 )
    {
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error', 'success')
        document.getElementById('pass_error').innerHTML=''
    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('pass_error').innerHTML='Password must have at least 8 characters'
    }
}

//function to confirm password
function checkpasswordsmatch(c_password, password)
{
    if(password == c_password && password != '')
    {
        document.getElementById('c_password').classList.add('success')
        document.getElementById('c_password').classList.replace('error', 'success')
        document.getElementById('c_pass_error').innerHTML=''
    }
    else{
        document.getElementById('c_password').classList.add('error')
        document.getElementById('c_pass_error').innerHTML='Password did not match'
    }
}