import React from 'react';

const AuthField = (props) => {

  const { 
    label,
    name,
    value,
    touch,
    error,
    onChange,
    onBlur,
    validationClassName,
    errormessage
   } = props

   const inputAttrs = {
     autoComplete: 'off',
     className: `${validationClassName}`,
     name,
     value,
     onChange,
     onBlur,
     errormessage
   }

  return(
    <div className='form-group'>
      <label>{label}</label>
      <input {...inputAttrs}/>
      {touch && !error && (
      <div className='valid-feedback'></div>)}
      {touch && error && (
        <div className='invalid-feedback'>{errormessage}</div> // PASAR ERROR CONCRETO DE VALIDACIÓN
      )}
    </div>
  )
}

export default AuthField