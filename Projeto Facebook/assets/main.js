function verifica() {
    if (document.forms[0].email.value.length == 0) {
      document.frmEnvia.email.classList.add("bg-danger")
      document.frmEnvia.email.focus();
      return false;
    }
    return true;
  }

  function checarEmail(){
    if( document.forms[0].email.value=="" 
       || document.forms[0].email.value.indexOf('@')==-1 
         || document.forms[0].email.value.indexOf('.')==-1 )
        {
          alert( "Por favor, informe um E-MAIL válido!" );
          return false;
        }
    }