/*
__Seed builder__v0.1.8
  AUTO_GENERATED (Read only)
  Modify via builder
*/

export const BUSINESS = `
{
  business {
    id
    name
    addressCords
    contact1
    contact2
    contact3
    contact4
    tags
    isLocal
    openingTime
    closingTime
    openDays
    verified
    user {
      id
    }
    category {
      id
    }
  }
}
`;

export const SET_BUSINESS = `
mutation Set(
  $id: Int!,
  $name: String,
  $addressCords: String,
  $contact1: String,
  $contact2: String,
  $contact3: String,
  $contact4: String,
  $tags: String,
  $isLocal: Boolean,
  $openingTime: DateTime,
  $closingTime: DateTime,
  $openDays: String,
  $verified: Boolean,
  $user: Int,
  $category: Int,
)
{
  setBusiness(
    id: $id,
    name: $name,
    addressCords: $addressCords,
    contact1: $contact1,
    contact2: $contact2,
    contact3: $contact3,
    contact4: $contact4,
    tags: $tags,
    isLocal: $isLocal,
    openingTime: $openingTime,
    closingTime: $closingTime,
    openDays: $openDays,
    verified: $verified,
    user: $user,
    category: $category,
  ) {
    business {
      id
      name
      addressCords
      contact1
      contact2
      contact3
      contact4
      tags
      isLocal
      openingTime
      closingTime
      openDays
      verified
      user {
        id
      }
      category {
        id
      }
    }
  }
}
`;

export const SAVE_BUSINESS = `
mutation Save(
  $name: String!,
  $addressCords: String!,
  $contact1: String!,
  $contact2: String!,
  $contact3: String!,
  $contact4: String!,
  $tags: String!,
  $isLocal: Boolean!,
  $openingTime: DateTime!,
  $closingTime: DateTime!,
  $openDays: String!,
  $verified: Boolean!,
  $user: Int!,
  $category: Int!,
)
{
  saveBusiness(
    name: $name,
    addressCords: $addressCords,
    contact1: $contact1,
    contact2: $contact2,
    contact3: $contact3,
    contact4: $contact4,
    tags: $tags,
    isLocal: $isLocal,
    openingTime: $openingTime,
    closingTime: $closingTime,
    openDays: $openDays,
    verified: $verified,
    user: $user,
    category: $category,
  ) {
    business {
      id
    }
  }
}
`;

export const DELETE_BUSINESS = `
mutation Delete($id: Int!)
{
  deleteBusiness(id: $id)
  {
    id
  }
}
`;

export const CATEGORY = `
{
  category {
    id
    name
  }
}
`;

export const SET_CATEGORY = `
mutation Set(
  $id: Int!,
  $name: String,
)
{
  setCategory(
    id: $id,
    name: $name,
  ) {
    category {
      id
      name
    }
  }
}
`;

export const SAVE_CATEGORY = `
mutation Save(
  $name: String!,
)
{
  saveCategory(
    name: $name,
  ) {
    category {
      id
    }
  }
}
`;

export const DELETE_CATEGORY = `
mutation Delete($id: Int!)
{
  deleteCategory(id: $id)
  {
    id
  }
}
`;

export const STAT = `
{
  stat {
    id
    prop1
    prop2
    prop3
    prop4
    comment
    user {
      id
    }
  }
}
`;

export const SET_STAT = `
mutation Set(
  $id: Int!,
  $prop1: Int,
  $prop2: Int,
  $prop3: Int,
  $prop4: Int,
  $comment: String,
  $user: Int,
)
{
  setStat(
    id: $id,
    prop1: $prop1,
    prop2: $prop2,
    prop3: $prop3,
    prop4: $prop4,
    comment: $comment,
    user: $user,
  ) {
    stat {
      id
      prop1
      prop2
      prop3
      prop4
      comment
      user {
        id
      }
    }
  }
}
`;

export const SAVE_STAT = `
mutation Save(
  $prop1: Int!,
  $prop2: Int!,
  $prop3: Int!,
  $prop4: Int!,
  $comment: String!,
  $user: Int!,
)
{
  saveStat(
    prop1: $prop1,
    prop2: $prop2,
    prop3: $prop3,
    prop4: $prop4,
    comment: $comment,
    user: $user,
  ) {
    stat {
      id
    }
  }
}
`;

export const DELETE_STAT = `
mutation Delete($id: Int!)
{
  deleteStat(id: $id)
  {
    id
  }
}
`;

export const USER = `
{
  user {
    id
    username
    firstName
    lastName
    email
    isActive
  }
}
`;

export const SET_USER = `
mutation Set(
  $id: Int!,
  $username: String,
  $firstName: String,
  $lastName: String,
  $email: String,
  $isActive: Boolean,
  $password: String,
)
{
  setUser(
    id: $id,
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
  ) {
    user {
      id
      username
      firstName
      lastName
      email
      isActive
    }
  }
}
`;

export const SAVE_USER = `
mutation Save(
  $username: String!,
  $firstName: String!,
  $lastName: String!,
  $email: String!,
  $isActive: Boolean!,
  $password: String!,
)
{
  saveUser(
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
  ) {
    user {
      id
    }
  }
}
`;

export const DELETE_USER = `
mutation Delete($id: Int!)
{
  deleteUser(id: $id)
  {
    id
  }
}
`;

export const USER_TYPE = `
{
  userType {
    id
    name
  }
}
`;

export const SET_USER_TYPE = `
mutation Set(
  $id: Int!,
  $name: String,
)
{
  setUserType(
    id: $id,
    name: $name,
  ) {
    userType {
      id
      name
    }
  }
}
`;

export const SAVE_USER_TYPE = `
mutation Save(
  $name: String!,
)
{
  saveUserType(
    name: $name,
  ) {
    userType {
      id
    }
  }
}
`;

export const DELETE_USER_TYPE = `
mutation Delete($id: Int!)
{
  deleteUserType(id: $id)
  {
    id
  }
}
`;

