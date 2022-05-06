export async function getUserInfos(userId) {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}`)
    return await response.json()
  } catch (error) {
    return error
  }
}


export async function getUserDailyActivities(userId) {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    )
    return await response.json()
  } catch (error) {
    return error
  }
}