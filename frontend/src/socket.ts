import { io } from "socket.io-client"

export const socket = io("http://lolcalhost:5174",{
    withCredentials: true,
}
)