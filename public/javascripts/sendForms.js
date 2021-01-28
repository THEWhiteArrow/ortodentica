// const btnSubmit = document.querySelector('#submit');

// btnSubmit.addEventListener('click', async (e) => {
//    e.preventDefault();
//    const form = document.querySelector('#form').elements;
//    const headers = {
//       'Content-Type': 'application/json',
//    }
//    const data = {
//       name: form.name.value,
//       phone: form.phone.value,
//       email: form.email.value,
//       text: form.text.value
//    };

//    const res = await fetch('http://localhost:3000/api', {
//       method: 'POST',
//       headers,
//       body: JSON.stringify(data)
//    })

//    console.log('Message delivered successfully!')
// })