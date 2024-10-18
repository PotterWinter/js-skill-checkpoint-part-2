// เริ่มเขียนโค้ดตรงนี้
const getUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users");
};

const handleResponse = (response) => {
  return response.json();
};

const onSuccess = (data) => {
  let result = [];
  data.filter((word) =>
    word.name.length > 17 ? result.push(word.name) : null
  );
  console.log(result);
};

getUsers().then(handleResponse).then(onSuccess);

// [ 'Mrs. Dennis Schulist', 'Nicholas Runolfsdottir V', 'Clementina DuBuque' ]

// {
//     id: 5,
//     name: 'Chelsey Dietrich',
//     username: 'Kamren',
//     email: 'Lucio_Hettinger@annie.ca',
//     address: {
//       street: 'Skiles Walks',
//       suite: 'Suite 351',
//       city: 'Roscoeview',
//       zipcode: '33263',
//       geo: { lat: '-31.8129', lng: '62.5342' }
//     },
//     phone: '(254)954-1289',
//     website: 'demarco.info',
//     company: {
//       name: 'Keebler LLC',
//       catchPhrase: 'User-centric fault-tolerant solution',
//       bs: 'revolutionize end-to-end systems'
//     }
//   },

// const getUsers = () => {
//     return fetch("https://jsonplaceholder.typicode.com/users");
//   };

//   const handleResponse = (response) => {
//     return response.json();
//   };

//   const onSuccess = (data) => {
//     let result = [];
//     data.filter((word) => {
//       console.log(word);
//       console.log(word.name);
//       console.log(word.name.length);
//       if (word.name.length > 17) {
//         result.push(word.name);
//       }
//     });
//     console.log(result);
//   };

//   getUsers().then(handleResponse).then(onSuccess);
