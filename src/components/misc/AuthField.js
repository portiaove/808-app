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
    errormessage,
    type
   } = props

   const inputAttrs = {
     autoComplete: 'off',
     className: `${validationClassName}`,
     name,
     value,
     onChange,
     onBlur,
     errormessage,
     type
   }

  return(
    <div className='Inputs'>
      <input placeholder={label} {...inputAttrs}/>
      {touch && !error && (
      <div className='valid-feedback'></div>)}
      {touch && error && (
        <div className='invalid-feedback'>{errormessage}</div> // PASAR ERROR CONCRETO DE VALIDACIÓN
      )}
    </div>
  )
}

export default AuthField