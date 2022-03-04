import { User } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]



export const sampleRiderData = [
  { ridersSectionTitle: 'Online Riders', ridersNo: 20, backgroundColor: "#DFDFDF" },
  { ridersSectionTitle: 'Offline Riders', ridersNo: 6, backgroundColor: "#FBCCC2"},
  { ridersSectionTitle: 'New riders', ridersNo: 7, backgroundColor: "#DFDFDF"},
  { ridersSectionTitle: 'Suspended riders', ridersNo: 0, backgroundColor: "#FBCCC2"}
]


export const agentOrderData = [
  {agentOrdeNo:50, agentOrderTitle: "orders taken" , agentOderImage: "/bag-red.svg"},
  {agentOrdeNo:4, agentOrderTitle: "batched orders" , agentOderImage: "/package-red.svg", backgroundColor: "#FBCCC2"},
  {agentOrdeNo:10, agentOrderTitle: "packaged orders" , agentOderImage: "/shoppingbag-red.svg"},
  {agentOrdeNo:9, agentOrderTitle: "sent out orders" , agentOderImage: "/bicycle-red.svg", backgroundColor: "#FBCCC2"},
  {agentOrdeNo:20, agentOrderTitle: "completed orders" , agentOderImage: "/completed-orders-red.svg"},
  {agentOrdeNo:3, agentOrderTitle: "red flags" , agentOderImage: "/redflag-red.svg", backgroundColor: "#FBCCC2"}
]