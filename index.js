function check(form)
      {
       if(form.userid.value == "sanim" && form.pswrd.value == "111")
        {
          window.open('nav/shop.html')
        }
       else
       {
         alert("Error Password or Username")
        }
      }