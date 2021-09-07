import bcrypt from 'bcryptjs';
export  function convertBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

export  async function hashPass(password){
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return hashed
}
// const [email, setEmail]= useState('');
// const [password, setPassword] = useState('');
// const handleOnChange= (e)=>{
//     setEmail(e.target.value)
// }
// const handlePassword =(e)=>{
//     hashPass(e.target.value).then((hashPass) =>{
//         setPassword(hashPass)
//     });
// }
// const hanleInputInfor =(e)=>{
//     const adminRef = firebase.database().ref("Admin")
//     const data = {email, password}
//     adminRef.push(data);

// }
export async function comparePass(password, hashedPassword){
  const validPassword = await bcrypt.compare(password, hashedPassword);
  return validPassword
}
export const auth = localStorage.getItem('admin')