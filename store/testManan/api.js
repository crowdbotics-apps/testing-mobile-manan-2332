import axios from "axios"
import { TESTMANAN1_USERNAME, TESTMANAN1_PASSWORD } from "react-native-dotenv"
const testManan = axios.create({
  baseURL: "https://abc.com",
  auth: { username: TESTMANAN1_USERNAME, password: TESTMANAN1_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function testmanan1_get_Pet_id_read(payload) {
  return testManan.get(`/Pet/${payload.id}`)
}
export const apiService = { testmanan1_get_Pet_id_read }
