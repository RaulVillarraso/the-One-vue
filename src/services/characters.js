import api from '@/services/index.js'

export async function getAllCharacters(){
  const {data} = await api.get("/character")
  console.log(data.docs)
  return data.docs
}