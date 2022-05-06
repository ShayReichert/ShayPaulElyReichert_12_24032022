export async function getUserMainData(userId) {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}`)
    return await response.json()
  } catch (error) {
    return error
  }
}


export async function getUserActivity(userId) {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    )
    return await response.json()
  } catch (error) {
    return error
  }
}

export async function getUserAverageSessions(userId) {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    )
    return await response.json()
  } catch (error) {
    return error
  }
}