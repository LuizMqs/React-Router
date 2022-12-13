function Update(email, password, setUser) {

  const body = {
    email: email,
    password: password
  };

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include"
  };
 
  fetch("http://localhost:8000/accounts/update", options)
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }
      } catch (error) {
        return console.error(error);
      }
    })
    .then((data) => {
      console.log(data)
      setUser(data)
      
    });
}

export default Update;