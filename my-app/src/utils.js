const mapUsers = (dataArr, users) => {
    const data = dataArr.slice().map((item) => {
      const matchingUser = users.find((user) => user.user_id === item.user_id);
      return { ...item, userInfo: matchingUser };
    });
    return data
  };

export {
    mapUsers
}