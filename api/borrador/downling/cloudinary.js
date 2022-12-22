export async function upImage(obj) {
    let file = obj
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'ecommerce')
    let myHeaders = new Headers();
    let options = {
      method: 'POST',
      body: formData,
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
    };
    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/larsendevs/image/upload', options)
      const data = await res.json()
      return data
    } catch (error) {
      return new Error("Error al cargar la imagen")
    }
}