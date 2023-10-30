
export const emailValidator = (email: string | null) => {
  if(email === null) return false
  const regex = /\S+@\S+\.\S+/
  if(email === '') return 'Email is required'
  if(!regex.test(email)) return 'Email is invalid'
  return false
}

export const passwordValidator = (password: string | null) => {
  if(password === null) return false
  if(password === '') return 'Password is required'
  if(password.length < 8) return 'Password must be at least 8 characters'
  return false
}

export const nameValidator = (name: string | null) => {
  if(name === null) return false
  if(name === '') return 'Name is required'
  if(name.length < 3) return 'Name must be at least 3 characters'
  return false
}

export const titleValidator = (title:string | null) => {
  if(title === null) return false
  if(title === '') return 'Title is required'
  if(title.length < 3) return 'Title must be at least 3 characters'
  if(title.length > 50) return 'Title must be less than 50 characters'
  return false
}

export const subTitleValidator = (subTitle:string | null) => {
  if(subTitle === null) return false
  if(subTitle === '') return 'SubTitle is required'
  if(subTitle.length < 3) return 'SubTitle must be at least 3 characters'
  if(subTitle.length > 256) return 'SubTitle must be less than 256 characters'
  return false
}

export const contentValidator = (content:string | null) => {
  if(content === null) return false
  if(content === '') return 'Content is required'
  if(content.length < 3) return 'Content must be at least 3 characters'
  if(content.length > 256) return 'Content must be less than 256 characters'
  return false
}