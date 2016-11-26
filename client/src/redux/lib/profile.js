export function setLocalProfile (profile) {
  if (profile.picUrl) {
    localStorage.profile = JSON.stringify({
      firstName: profile.firstName,
      lastName: profile.lastName,
      location: profile.location,
      picUrl: profile.picUrl
    })
  } else {
    localStorage.profile = JSON.stringify({
      firstName: profile.firstName,
      lastName: profile.lastName,
      location: profile.location
    })
  }
}

export default {
  setLocalProfile
}