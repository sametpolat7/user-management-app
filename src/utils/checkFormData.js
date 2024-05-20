// Check if the username already exists
function checkFormData(users, formData) {
  let isIdTaken = users.some((user) => {
    return user.id.toLowerCase().trim() === formData.id.toLowerCase().trim();
  });
  return isIdTaken;
}

export default checkFormData;
