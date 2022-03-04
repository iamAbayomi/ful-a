import { User } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]



export const sampleRiderData = [
  { ridersSectionTitle: 'Online Riders', ridersNo: 20 },
  { ridersSectionTitle: 'Offline Riders', ridersNo: 6},
  { ridersSectionTitle: 'New riders', ridersNo: 7, backgroundColor: "#FBCCC2"},
  { ridersSectionTitle: 'Suspended riders', ridersNo: 0, backgroundColor: "#FBCCC2"}
]