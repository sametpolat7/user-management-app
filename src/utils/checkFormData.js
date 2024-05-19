// const users = [{ id: 'Samet', name: 'Same' }];
// const formData = { id: 'samet', name: 'Same' };

function checkFormData(users, formData) {
  let isIdTaken = users.some((user) => {
    return user.id.toLowerCase().trim() === formData.id.toLowerCase().trim();
  });
  return isIdTaken;
}

// checkFormData(users, formData);

export default checkFormData;
