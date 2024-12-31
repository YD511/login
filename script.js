function vaildateLogin() {
    var email = document.getElementById("email").value;  
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    
    if (email == "") {
        errorMessage.innerText = "الرجاء ادخال اسم المستخدم";
        errorMessage.style.display = "block";
        return false; 
    }

 
    if (password == "") {
        errorMessage.innerText = "الرجاء ادخال كلمة المرور";
        errorMessage.style.display = "block";
        return false; 
    }

    errorMessage.style.display = "none";  
    alert("تم تسجيل الدخول بنجاح!");  
    return true; 
}

function validateRigster() {
    var errorMessage = document.getElementById("error-message");
    var errormessagEmail =  document.getElementById("email").value;
    var errormessagName =  document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    
    if (errormessagName === ""){
        errorMessage.innerText = "الرجاء ادخال اسم المستخدم"; 
        errorMessage.style.display = "block";
        return false;
    }

    if (errormessagEmail === ""){
        errorMessage.innerText = "   الرجاء ادخال الايميل "; 
        errorMessage.style.display = "block";
        return false;
    }

    if (password === "" || confirmPassword === "") {
        errorMessage.innerText = "   الرجاء ادخال كلمة المرور "; 
        errorMessage.style.display = "block";
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.innerText = "كلمة المرور غير متطابقة"; 
        errorMessage.style.display = "block";
        return false;  
    } 
    
    
        errorMessage.style.display = "none";  
        alert("تم إنشاء الحساب بنجاح!");  
        return true;  
    
}

