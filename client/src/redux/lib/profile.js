export function setLocalProfile (profile) {
  localStorage.profile = JSON.stringify({
    firstName: profile.firstName,
    lastName: profile.lastName,
    location: profile.location
  })
}

export default {
  setLocalProfile
}