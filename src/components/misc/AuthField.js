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
    errorMessage
   } = props

   const inputAttrs = {
     autoComplete: 'off',
     className: `${validationClassName}`,
     name,
     value,
     onChange,
     onBlur,
     errorMessage
   }

  return(
    <div className='form-group'>
      <label>{label}</label>
      <input {...inputAttrs}/>
      {touch && !error && (
      <div className='valid-feedback'></div>)}
      {touch && error && (
        <div className='invalid-feedback'>{errorMessage}</div> // PASAR ERROR CONCRETO DE VALIDACIÓN
      )}
    </div>
  )
}

export default AuthField