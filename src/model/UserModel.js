class UserModel {
  constructor(userId, fullName, userName, email, role, avatarId) {
    this.userId = userId;
    this.fullName = fullName;
    this.userName = userName;
    this.email = email;
    this.role = role;
    this.avatarId = avatarId;
  }
}

export default UserModel;
