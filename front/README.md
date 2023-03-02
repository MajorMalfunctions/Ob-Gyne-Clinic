         password: password
      })
      .then((result) =>  {
         console.log(result.data)
         // props.userAuthentication()
         alert('SUCCESS')
         const token =  (email, password);
         if (token) {
            localStorage.setItem('name', result.data.name)
            localStorage.setItem('email', result.data.email)
            localStorage.setItem('roles', result.data.roles)
         }
         if(!localStorage.setItem('token', result.data.refreshToken)) {
               sessionStorage.setItem('session-user', result.data.name);
               sessionStorage.setItem('session-user-email', result.data.email);
               sessionStorage.setItem('session-user-roles', result.data.roles);
               sessionStorage.setItem('refreshToken', result.data.refreshToken);
               sessionStorage.setItem('accessToken', result.data.accessToken);
            console.log('Go HOME');
            navigate('/home')
         }
      })
      .catch(error => {
        alert('ERROR')
        alert(error.message)
        console.log(error)
        console.log(error.message)
        console.log(error.result.data.error.message)
      })
   }
   