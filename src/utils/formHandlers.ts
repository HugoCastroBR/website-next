
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