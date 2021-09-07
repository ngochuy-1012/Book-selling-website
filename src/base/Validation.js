
export default function Validation(values) {
    let errors = {}
    if( values.name === ''){
        errors.name = 'Tên không được để trống'
    }
    if( values.author === ''){
        errors.author = 'Tên không được để trống'
    }
    if(values.title === ''){
        errors.title ='Tiêu đề không được để trống'
    }
    if (values.des ==='') {
        errors.des = `Mô tả không được trống`;
    }
    else if (values.des && values.des.split(' ').join('').length < 6 ) {
        errors.des = `Mô tả phải nhiều hơn 6 kí tự  `
    }
    if(values.password2 !== values.password1){
        errors.password2 = "Mật khẩu không khớp"
    }
    if(values.password1 === values.password){
        errors.password1 = "Mật khẩu cập nhật phải khác mật khẩu cũ"
    }
   
    return errors;
}


