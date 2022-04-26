const userData = [
    {
      id: 1,
      username: "choco",
      email: "choco@test.com",
    },
    {
      id: 2,
      username: "monggun",
      email: "monggun@test.com",
    },
    {
      id: 3,
      username: "mongmonge",
      email: "mongmonge@test.com",
    },
    {
      id: 4,
      username: "sesame",
      email: "seseme@test.com",
    },
  ];

  const addressData = [
    {
      id: 1,
      userId: 1,
      address: "광주광역시 북구",
    },
  
    {
      id: 2,
      userId: 2,
      address: "서울시 성동구",
    },
  
    {
      id: 3,
      userId: 3,
      address: "군포시",
    },
  
    {
      id: 4,
      userId: 4,
      address: "군포시",
    },
  ];

  const findUserByUsername = (username) => 
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            const foundUser = userData.find((user) => user.name===username);
            if (foundUser) return resolve(foundUser);
            reject(new Error(`There is no such user: ${username}`));
        }, 300);
    });

  const findAddressByUserId = (userId) =>
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            const foundAddress = addressData.find((user) => user.id===userId);
            if (foundAddress) return resolve(foundAddress);
            reject(new Error(`Could not find Address.`));
        }, 300);
    }); 

  export { findUserByUsername, findAddressByUserId }
  